interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  href?: string;
}

export default function ProjectCard({
  image,
  title,
  category,
  description,
  href = "#",
}: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex h-[250px] items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-2 p-6">
        <h3 className="text-lg font-bold leading-tight text-foreground">
          {title}
        </h3>
        <p className="pt-[7px] text-sm font-bold leading-relaxed text-accent">
          {category}
        </p>
        <p className="flex-1 pb-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <a
          href={href}
          className="text-base font-bold text-foreground transition-opacity hover:opacity-70"
        >
          Ver caso de estudio →
        </a>
      </div>
    </article>
  );
}
