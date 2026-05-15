import { Section } from "./Section";
import { FileText, ArrowUpRight, BookOpen, Quote, ScrollText } from "lucide-react";

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Published work." className="bg-surface">
      <article className="rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all grid lg:grid-cols-5">
        {/* Left: Publication mockup */}
        <div className="lg:col-span-2 glass-dark text-white p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[oklch(0.55_0.22_264)/0.25] blur-3xl" />
          <div className="relative inline-flex items-center gap-2 self-start rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest">
            <BookOpen className="h-3.5 w-3.5" /> Publication
          </div>

          {/* Paper mockup */}
          <div className="relative my-6 mx-auto w-full max-w-[220px] aspect-[3/4] rounded-lg bg-white shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500 p-4 text-foreground">
            <div className="flex items-center gap-1.5 pb-2 border-b border-border">
              <ScrollText className="h-3 w-3 text-primary" />
              <span className="text-[8px] uppercase tracking-widest text-muted-foreground">Research Paper</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 w-full rounded bg-foreground/80" />
              <div className="h-1.5 w-3/4 rounded bg-foreground/80" />
            </div>
            <div className="mt-3 space-y-1">
              {[100, 92, 96, 80, 100, 88, 95, 70].map((w, i) => (
                <div key={i} className="h-1 rounded bg-border" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-3 h-10 rounded bg-surface border border-border grid place-items-center">
              <div className="flex gap-0.5 items-end h-5">
                {[40, 70, 55, 85, 60].map((h, i) => (
                  <div key={i} className="w-1.5 rounded-sm bg-primary/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {[100, 86, 92].map((w, i) => (
                <div key={i} className="h-1 rounded bg-border" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>

          <div className="relative">
            <p className="text-[11px] uppercase tracking-widest text-white/50">Published on</p>
            <p className="mt-1 text-lg font-semibold">Academia.edu</p>
            <p className="text-sm text-white/60">2026 · Peer Reviewed</p>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col">
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

          <div className="mt-6 relative rounded-2xl bg-surface border border-border p-5">
            <Quote className="absolute -top-3 left-5 h-6 w-6 p-1 rounded-full bg-primary text-primary-foreground" />
            <p className="text-sm text-foreground/80 italic leading-relaxed">
              "Hiring algorithms must be transparent, auditable, and accountable — fairness cannot be
              a side effect of optimization."
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: "Topics", v: "4" },
              { l: "Type", v: "Review" },
              { l: "Year", v: "2026" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                <p className="mt-1 text-base font-semibold text-foreground">{s.v}</p>
              </div>
            ))}
          </div>

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
