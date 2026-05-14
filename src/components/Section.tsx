import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 scroll-mt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12 lg:mb-16">
          {eyebrow && (
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
