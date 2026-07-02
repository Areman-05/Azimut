import {
  Hero,
  ServicesPreview,
  StatsStrip,
  ProcessSection,
  FeaturedProjects,
  TestimonialsSection,
  CTASection,
  SustainabilitySection,
  CertificationsSection,
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
      <CertificationsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
