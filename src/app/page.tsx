import {
  Hero,
  ServicesPreview,
  StatsStrip,
  ProcessSection,
  FeaturedProjects,
  TestimonialsSection,
  CTASection,
  SustainabilitySection,
} from "@/components/home";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <FeaturedProjects projects={featured} />
      <SustainabilitySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
