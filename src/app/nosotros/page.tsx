import { TeamGrid } from "@/components/about";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Nosotros",
  description:
    "Conoce al equipo de Azimut Estructuras: arquitectura modular premium y construcción sostenible en España.",
  path: "/nosotros",
});

const values = [
  {
    title: "Precisión",
    description:
      "Cada detalle constructivo se planifica con rigor técnico y control de calidad en todas las fases.",
  },
  {
    title: "Sostenibilidad",
    description:
      "Priorizamos materiales de bajo impacto, eficiencia energética y procesos que reducen el desperdicio.",
  },
  {
    title: "Innovación",
    description:
      "Aplicamos sistemas modulares y tecnologías actuales para optimizar plazos sin sacrificar excelencia.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        label="Empresa"
        title="Construimos con propósito"
        description="Azimut Estructuras nace de la convicción de que la arquitectura modular puede ser tan refinada como la construcción tradicional, con mayor eficiencia y menor huella ambiental."
      />

      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Nosotros" },
            ]}
          />
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight">
                Nuestra historia
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Somos un estudio boutique con sede en España, especializado en
                arquitectura modular premium y construcción sostenible. Trabajamos
                con promotores, particulares y empresas que buscan espacios
                excepcionales con tiempos de ejecución optimizados.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Desde la primera consulta hasta la entrega de llaves,
                acompañamos cada proyecto con transparencia, comunicación
                constante y un equipo multidisciplinar de arquitectos e
                ingenieros.
              </p>
            </div>
            <div className="border border-border-light bg-sand p-10">
              <p className="text-xs uppercase tracking-widest text-terracotta">
                En cifras
              </p>
              <ul className="mt-8 space-y-6">
                <li>
                  <p className="font-display text-3xl text-charcoal">12+</p>
                  <p className="text-sm text-muted">Años de trayectoria</p>
                </li>
                <li>
                  <p className="font-display text-3xl text-charcoal">85+</p>
                  <p className="text-sm text-muted">Proyectos entregados</p>
                </li>
                <li>
                  <p className="font-display text-3xl text-charcoal">15</p>
                  <p className="text-sm text-muted">Profesionales en equipo</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <TeamGrid />

      <Section variant="sand" id="sostenibilidad">
        <Container>
          <h2 className="mb-12 font-display text-3xl uppercase tracking-tight">
            Nuestros valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-border-light bg-cream p-8"
              >
                <h3 className="font-display text-xl uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="dark" id="proceso">
        <Container className="text-center">
          <h2 className="font-display text-3xl uppercase tracking-tight text-cream">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sand/80">
            Cuéntanos tu idea y te prepararemos una propuesta personalizada.
          </p>
          <div className="mt-8">
            <Button href="/contacto" className="border-cream text-cream hover:bg-cream hover:text-charcoal" variant="secondary">
              Contactar con {siteConfig.name}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
