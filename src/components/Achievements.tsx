import { Section } from "./Section";
import { Award, Trophy, BookCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Genpact Scholarship Recipient",
    desc: "Awarded for academic excellence and demonstrated potential in data-driven problem solving.",
    tag: "Scholarship",
    meta: "Merit-Based",
  },
  {
    icon: Trophy,
    title: "1st Prize — Insight Wars",
    desc: "Winner of the Insight Wars Data Analytics Competition for an end-to-end analytics solution.",
    tag: "Competition",
    meta: "Gold · 1st Place",
  },
  {
    icon: BookCheck,
    title: "Published Researcher",
    desc: "Author of a peer-reviewed paper on ethical issues in AI-based hiring systems.",
    tag: "Publication",
    meta: "Academia.edu · 2026",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & milestones.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="group relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <span className="absolute top-6 right-6 text-[11px] font-mono text-muted-foreground/70">
              0{i + 1}
            </span>

            <div className="relative">
              <span className="relative h-14 w-14 rounded-2xl bg-[var(--gradient-hero)] grid place-items-center text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10">
                <it.icon className="h-6 w-6" />
                <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white border border-border grid place-items-center">
                  <Sparkles className="h-2.5 w-2.5 text-primary" />
                </span>
              </span>
            </div>

            <span className="relative mt-5 inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest">
              {it.tag}
            </span>

            <h3 className="relative mt-3 text-lg font-semibold text-foreground tracking-tight leading-snug">
              {it.title}
            </h3>
            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>

            <div className="relative mt-6 pt-5 border-t border-border flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">{it.meta}</span>
              <span className="inline-flex items-center gap-1 text-primary font-medium">
                Verified
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
