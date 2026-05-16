import { Section } from "./Section";
import { ArrowUpRight, BookOpen, ScrollText } from "lucide-react";

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Published work." className="bg-surface">
      <article className="rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all p-8 lg:p-10 grid md:grid-cols-[auto,1fr] gap-8 items-center max-w-4xl mx-auto">
        {/* Compact paper illustration */}
        <div className="relative mx-auto">
          <div className="relative h-32 w-24 rounded-md bg-white border border-border shadow-[var(--shadow-soft)] p-2.5 rotate-[-4deg]">
            <div className="flex items-center gap-1 pb-1.5 border-b border-border">
              <ScrollText className="h-2.5 w-2.5 text-primary" />
              <span className="text-[6px] uppercase tracking-widest text-muted-foreground">Paper</span>
            </div>
            <div className="mt-1.5 space-y-1">
              <div className="h-1 w-full rounded bg-foreground/70" />
              <div className="h-1 w-3/4 rounded bg-foreground/70" />
            </div>
            <div className="mt-2 space-y-0.5">
              {[100, 92, 80, 95, 70, 88].map((w, i) => (
                <div key={i} className="h-[3px] rounded bg-border" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          <div className="absolute -inset-2 -z-10 rounded-2xl bg-primary/10 blur-2xl" />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 self-start text-[11px] font-medium text-primary uppercase tracking-widest mb-3">
            <BookOpen className="h-3.5 w-3.5" /> Publication
          </div>
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground leading-snug">
            Ethical Issues in AI-Based Hiring Systems: A Simple Review
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            A peer-reviewed paper exploring algorithmic bias, transparency, privacy, and
            accountability in AI-driven hiring systems.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Published on <span className="font-semibold text-foreground">Academia.edu</span>
          </p>

          <div className="mt-5">
            <a
              href="https://www.academia.edu/166975951/Ethical_Issues_in_AI_Based_Hiring_Systems_A_Simple_Review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              View Paper <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}
