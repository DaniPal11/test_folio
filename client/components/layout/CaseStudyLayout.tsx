import { ReactNode } from "react";
import Layout from "./Layout";

interface CaseStudyLayoutProps {
  title: string;
  children: ReactNode;
}

export default function CaseStudyLayout({
  title,
  children,
}: CaseStudyLayoutProps) {
  return (
    <Layout>
      <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-8 px-6 py-12">
        <a
          href="/"
          className="text-base font-bold text-accent transition-opacity hover:opacity-70"
        >
          ← Volver al inicio
        </a>
        <h1 className="text-4xl font-bold tracking-[-0.352px] text-foreground sm:text-5xl">
          {title}
        </h1>
        {children}
      </div>
    </Layout>
  );
}
