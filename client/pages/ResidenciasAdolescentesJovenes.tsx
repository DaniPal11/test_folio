import CaseStudyLayout from "@/components/layout/CaseStudyLayout";

export default function ResidenciasAdolescentesJovenes() {
  return (
    <CaseStudyLayout title="Residencias Adolescentes y Jóvenes">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            Mi rol y descripción
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Proyecto de título Arquitectura realizado en la Universidad
            Tecnológica Metropolitana de Chile. Este proyecto exploró el diseño
            de espacios residenciales para adolescentes y jóvenes, integrando
            principios de bienestar, funcionalidad y diseño centrado en el
            usuario.
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
