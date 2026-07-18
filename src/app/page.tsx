import { About } from "@/components/About";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { DemoProjectSection } from "@/components/DemoProjectSection";
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
        <DemoProjectSection />
        <Projects />
        <BlogSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
