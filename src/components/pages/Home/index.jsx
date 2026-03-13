import Hero from "../../Hero";
import Navbar from "../../Nav";
import ProjectsSection from "../../ProjectsSection";
import ServicesSection from "../../Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ServicesSection />
    </>
  );
}
