import { Section } from "./Section";
import { ArrowUpRight, Award, Database, BarChart3, Brain, Heart } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
};

const certs: Cert[] = [
  {
    title: "SQL Certification",
    issuer: "Infosys",
    category: "Database & Querying",
    icon: Database,
    href: "/certificates/infosys-sql.pdf",
  },
  {
    title: "Data Visualization",
    issuer: "Tata Group",
    category: "Analytics & Visualization",
    icon: BarChart3,
    href: "/certificates/tata-data-visualization.pdf",
  },
  {
    title: "Gen AI Powered Data Analytics",
    issuer: "Tata Group",
    category: "AI & Data Analytics",
    icon: Brain,
    href: "/certificates/tata-genai-analytics.pdf",
  },
  {
    title: "Emotional Intelligence",
    issuer: "NPTEL",
    category: "Professional Development",
    icon: Heart,
    href: "/certificates/nptel-emotional-intelligence.pdf",
    badge: "Silver Elite",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials."
      description="A focused set of certifications across databases, analytics, and AI."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between">
              <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <c.icon className="h-4.5 w-4.5" />
              </span>
              {c.badge && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r from-slate-200 to-slate-100 text-slate-700 border border-slate-300">
                  <Award className="h-3 w-3" /> {c.badge}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-base font-semibold text-foreground tracking-tight leading-snug">
              {c.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>

            <span className="mt-3 inline-flex self-start items-center px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider bg-surface border border-border text-muted-foreground">
              {c.category}
            </span>

            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                View Credential
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
