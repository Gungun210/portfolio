import { Section } from "./Section";
import { Award, Trophy, BookCheck } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Genpact Scholarship Recipient",
    desc: "Awarded for academic excellence and demonstrated potential in data-driven problem solving.",
  },
  {
    icon: Trophy,
    title: "1st Prize — Insight Wars",
    desc: "Winner of the Insight Wars Data Analytics Competition for an end-to-end analytics solution.",
  },
  {
    icon: BookCheck,
    title: "Published Researcher",
    desc: "Author of a peer-reviewed paper on ethical issues in AI-based hiring systems.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & milestones.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="group relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <span className="absolute top-6 right-6 text-[11px] font-mono text-muted-foreground/70">
              0{i + 1}
            </span>
            <span className="relative h-12 w-12 rounded-xl bg-[var(--gradient-hero)] grid place-items-center text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10">
              <it.icon className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 text-lg font-semibold text-foreground tracking-tight">{it.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
