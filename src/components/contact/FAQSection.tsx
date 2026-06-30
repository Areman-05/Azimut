import { Container, Section } from "@/components/layout";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <Section variant="sand" id="faq">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            FAQ
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight lg:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="max-w-3xl">
          <Accordion
            items={faqItems.map((item) => ({
              id: item.id,
              title: item.question,
              content: item.answer,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
