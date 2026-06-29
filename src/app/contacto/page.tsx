import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita presupuesto o información sobre tu proyecto con Azimut Estructuras.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        label="Contacto"
        title="Hablemos de tu proyecto"
        description="Completa el formulario o contáctanos directamente. Respondemos en 24-48 horas laborables."
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <aside className="lg:col-span-2">
              <h2 className="font-display text-xl uppercase tracking-wide">
                Datos de contacto
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm transition-colors hover:text-terracotta"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">Teléfono</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-sm transition-colors hover:text-terracotta"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-terracotta" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">Ubicación</p>
                    <p className="text-sm">{siteConfig.contact.address}</p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
