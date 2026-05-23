import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

const KEY = "visitor-counter";
const RATE_LIMIT_TTL = 60 * 60; // 1 saat

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export async function GET(request: Request) {
  if (!url || !token) {
    return NextResponse.json(
      {
        error:
          "UPSTASH_REDIS_REST_URL veya UPSTASH_REDIS_REST_TOKEN ortam değişkenleri ayarlanmamış. .env.local dosyanızı kontrol edin.",
      },
      { status: 500 }
    );
  }

  const redis = new Redis({ url, token });
  const ip = getClientIp(request);
  const ipKey = `visitor-counter-ip:${ip}`;

  try {
    const incremented = await redis.set(ipKey, "1", {
      ex: RATE_LIMIT_TTL,
      nx: true,
    });

    if (incremented) {
      await redis.incr(KEY);
    }

    const count = await redis.get(KEY);
    return NextResponse.json({ count: Number(count ?? 0) });
  } catch (error) {
    return NextResponse.json(
      { error: "Ziyaretçi sayısı alınamadı." },
      { status: 500 }
    );
  }
}
