export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <a href="#top" className="text-lg font-bold text-foreground">
          Valentina Antonia Correa Castro
        </a>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#trabajo"
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                Trabajo
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
