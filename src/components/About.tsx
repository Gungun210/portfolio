import { Section } from "./Section";
import { BarChart3, LineChart, LayoutDashboard, Brain } from "lucide-react";

const focus = [
  { icon: BarChart3, label: "Data Analytics", desc: "EDA, KPIs, business insight." },
  { icon: LineChart, label: "Business Intelligence", desc: "Reporting & decision support." },
  { icon: LayoutDashboard, label: "Dashboarding", desc: "Power BI · Tableau · SQL." },
  { icon: Brain, label: "AI-powered Systems", desc: "Practical ML & data products." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A data-driven mindset, built for impact.">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <p className="text-base text-muted-foreground leading-relaxed">
            B.Tech in Data Science student at <span className="text-foreground font-medium">JIET, Jodhpur</span>{" "}
            with a CGPA of <span className="text-foreground font-medium">9.0</span>. Passionate about analytics,
            dashboard development, data storytelling, and solving business problems using Python, SQL,
            and visualization tools.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat value="9.0" label="CGPA" />
            <Stat value="3+" label="Projects" />
            <Stat value="1st" label="Insight Wars" />
          </div>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {focus.map((f) => (
            <div
              key={f.label}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{f.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
