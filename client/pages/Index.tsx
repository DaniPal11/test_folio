import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/portfolio/ProjectCard";

const uxProjects = [
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4e3f8274fb38c96156a8cfae75c1b83c4e5e01fc?width=1016",
    title: "UniClass",
    category: "App móvil · Investigación · UI",
    description:
      "UniClass es una plataforma web segura que conecta a padres y estudiantes con tutores universitarios mediante perfiles verificados.",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b60a92f2875f2ac5446a7b96f3d45bf85b3ac829?width=1016",
    title: "UTEMAP",
    category:
      "UX/UI Design · Navigation · Campus Map · Geolocation · Architecture",
    description:
      "Utemap es una aplicación móvil de navegación para campus universitarios que integra modelos arquitectónicos en 3D para facilitar la orientación espacial de sus usuarios.",
  },
];

const otherProjects = [
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a01b333203dd9c60438d6e4d894ab4373f694075?width=1016",
    title: "Fruit Poster Collection",
    category: "Diseño gráfico · Ilustración vectorial · Dirección de Arte",
    description: "Diseño de cartelería ilustrada para interiorismo comercial.",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e85a6e9927c6a19b267462ff0149273673a3a0a4?width=1016",
    title: "Residencias Adolescentes y Jóvenes",
    category: "Proyecto de título Arquitectura",
    description:
      "Proyecto para optar al título de Arquitecta | Universidad Tecnológica Metropolitana | Chile",
  },
];

const tools = ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Notion", "Affinity"];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1100px] flex-col items-start gap-3 px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[1.088px] text-brand-pink">
          Diseño UX/UI
        </p>
        <h1 className="text-4xl font-bold leading-[1.15] tracking-[-1.024px] text-brand-navy sm:text-5xl">
          Hola, soy Valentina.
          <br />
          Diseño productos digitales claros y usables.
        </h1>
        <p className="max-w-[560px] text-lg leading-relaxed text-muted-foreground">
          Ayudo a equipos a convertir ideas complejas en interfaces simples, a
          través de investigación, prototipado y diseño visual.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#trabajo"
            className="rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground/85 transition-opacity hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-border px-7 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-muted"
          >
            Contactar
          </a>
        </div>
      </section>

      {/* Proyectos UX/UI */}
      <section
        id="trabajo"
        className="mx-auto flex max-w-[1100px] scroll-mt-20 flex-col items-start gap-10 px-6 py-10"
      >
        <h2 className="text-3xl font-bold tracking-[-0.352px] text-foreground sm:text-[35px]">
          Proyectos UX/UI
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <ProjectCard
            {...uxProjects[0]}
            href="/uniclass"
          />
          <ProjectCard
            {...uxProjects[1]}
            href="/utemap"
          />
        </div>
      </section>

      {/* Otros proyectos */}
      <section className="mx-auto flex max-w-[1100px] flex-col items-start gap-10 px-6 py-10">
        <h2 className="text-3xl font-bold tracking-[-0.352px] text-foreground sm:text-[35px]">
          Otros proyectos
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <ProjectCard
            {...otherProjects[0]}
            href="/fpc"
          />
          <ProjectCard
            {...otherProjects[1]}
            href="/rayj"
          />
        </div>
      </section>

      {/* Sobre mí */}
      <section
        id="sobre-mi"
        className="mx-auto flex max-w-[1100px] scroll-mt-20 flex-col items-center gap-12 px-6 py-16 md:flex-row md:items-start"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ed8a967dded5ee060841a62f526d261fa9d03a07?width=560"
          alt="Valentina Correa"
          className="aspect-square w-[280px] shrink-0 rounded-2xl object-cover"
        />
        <div className="flex flex-1 flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-[-0.352px] text-foreground sm:text-[35px]">
            Sobre mí
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Diseñadora UX/UI con formación en arquitectura, enfocada en
            construir productos digitales estéticos, accesibles y centrados
            en el usuario.
          </p>
          <h3 className="text-lg font-bold text-foreground">Herramientas</h3>
          <ul className="flex flex-wrap items-start gap-2.5">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border bg-card px-4 py-[7px] text-sm text-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hablemos */}
      <section
        id="contacto"
        className="mx-auto flex max-w-[1100px] scroll-mt-20 flex-col items-center gap-4 px-6 py-16"
      >
        <h2 className="text-center text-3xl font-bold tracking-[-0.352px] text-foreground sm:text-[35px]">
          Hablemos
        </h2>
        <p className="pb-3 text-center text-base text-muted-foreground">
          ¿Tenés un proyecto en mente o querés charlar? Escribime.
        </p>
        <a
          href="mailto:valentinacorrea.sc@gmail.com"
          className="rounded-full bg-primary px-7 py-3.5 text-center text-base font-bold text-primary-foreground/85 transition-opacity hover:opacity-90"
        >
          valentinacorrea.sc@gmail.com
        </a>
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/vacorreac/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-muted-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/valenticorrea4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-muted-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Behance
          </a>
          <a
            href="https://www.instagram.com/vcorrea.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-muted-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Instagram
          </a>
        </div>
      </section>
    </Layout>
  );
}
