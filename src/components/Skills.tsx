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
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                <g.icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors"
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
