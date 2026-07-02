import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import FeaturedProjects from "../components/home/FeaturedProjects";
import RejaDivider from "../components/ui/RejaDivider";

export default function Home() {
  return (
    <main id="contenido-principal">
      <Hero />
      <TechStack />
      <RejaDivider />
      <FeaturedProjects />
    </main>
  );
}
