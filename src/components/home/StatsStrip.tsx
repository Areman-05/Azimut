"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { stats } from "@/data/stats";

export function StatsStrip() {
  return (
    <Section variant="dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl text-terracotta lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
