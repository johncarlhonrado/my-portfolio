import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import SideDock from "@/components/SideDock";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <div className="container">
          <div className="divider" />
        </div>
        <TechStack />
        <div className="container">
          <div className="divider" />
        </div>
        <Projects />
        <div className="container">
          <div className="divider" />
        </div>
        <Contact />
      </main>

      <Footer />
      <SideDock />
      <BackToTop />
    </>
  );
}
