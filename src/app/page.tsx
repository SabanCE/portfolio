import { About } from "@/components/About";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <BlogSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
