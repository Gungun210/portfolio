import { Section } from "./Section";
import { Code2, Database, BarChart3, Brain, Wrench } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", items: ["Python", "SQL"] },
  {
    icon: Database,
    title: "Data Analytics",
    items: ["Pandas", "NumPy", "Excel", "Power BI", "Tableau", "Google Sheets"],
  },
  { icon: BarChart3, title: "Visualization", items: ["Matplotlib", "Seaborn"] },
  {
    icon: Brain,
    title: "Concepts",
    items: ["EDA", "Data Cleaning", "KPI Reporting", "Statistical Analysis", "ML Basics"],
  },
  { icon: Wrench, title: "Tools", items: ["GitHub", "Jupyter Notebook", "MySQL", "VS Code"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The analytics toolkit."
      description="Languages, tools, and concepts I use to move from raw data to clear decisions."
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary grid place-items-center ring-1 ring-primary/10 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground group-hover:ring-primary/30 transition-all">
                <g.icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-semibold text-foreground tracking-tight">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
