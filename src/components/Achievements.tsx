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
            className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all"
          >
            <span className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">
              0{i + 1}
            </span>
            <span className="h-12 w-12 rounded-xl bg-[var(--gradient-hero)] grid place-items-center text-white shadow-[var(--shadow-soft)]">
              <it.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
