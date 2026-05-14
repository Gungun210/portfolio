import { Section } from "./Section";
import { FileText, ArrowUpRight, BookOpen } from "lucide-react";

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Published work." className="bg-surface">
      <article className="rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all grid lg:grid-cols-3">
        <div className="lg:col-span-1 glass-dark text-white p-8 flex flex-col justify-between">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest">
            <BookOpen className="h-3.5 w-3.5" /> Publication
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/50">Published on</p>
            <p className="mt-1 text-lg font-semibold">Academia.edu</p>
            <p className="text-sm text-white/60">2026</p>
          </div>
        </div>
        <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col">
          <div className="inline-flex items-center gap-2 self-start text-xs font-medium text-primary mb-3">
            <FileText className="h-3.5 w-3.5" /> AI Ethics · Peer Review
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Ethical Issues in AI-Based Hiring Systems: A Simple Review
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Research focused on algorithmic bias, transparency, privacy, and accountability in
            AI-driven hiring systems.
          </p>
          <div className="mt-6">
            <a
              href="https://www.academia.edu/166975951/Ethical_Issues_in_AI_Based_Hiring_Systems_A_Simple_Review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              View Paper <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}
