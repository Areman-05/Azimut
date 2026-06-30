"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section variant="dark" id="testimonios">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            Testimonios
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border bg-stone p-8"
            >
              <Quote
                size={24}
                className="text-terracotta"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-6 text-sm leading-relaxed text-sand/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-6">
                <cite className="not-italic">
                  <p className="font-display text-sm uppercase tracking-wide text-cream">
                    {item.author}
                  </p>
                  <p className="mt-1 text-xs text-muted">{item.role}</p>
                  <p className="mt-2 text-xs text-terracotta">{item.project}</p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
