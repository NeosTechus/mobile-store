import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}