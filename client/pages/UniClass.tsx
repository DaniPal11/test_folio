import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

export default function UniClass() {
  return (
    <CaseStudyLayout title="UniClass">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            Mi rol y descripción
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            UniClass es una plataforma web segura que conecta a padres y
            estudiantes con tutores universitarios mediante perfiles verificados.
            En este proyecto, trabajé en la investigación de usuarios, diseño de
            interfaz móvil y validación de prototipos.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            Galería del proyecto
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-xl border border-border bg-muted p-12">
              <p className="text-center text-muted-foreground">
                Imagen del proyecto 1
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border bg-muted p-12">
              <p className="text-center text-muted-foreground">
                Imagen del proyecto 2
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border bg-muted p-12">
              <p className="text-center text-muted-foreground">
                Imagen del proyecto 3
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border bg-muted p-12">
              <p className="text-center text-muted-foreground">
                Imagen del proyecto 4
              </p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
