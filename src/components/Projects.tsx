import { Section } from "./Section";
import { Github, ArrowUpRight, TrendingUp, Users, ShoppingBag, Calendar, Linkedin } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="Business-oriented analytics projects — from raw data to dashboards and decisions."
    >
      <div className="space-y-6">
        {/* Featured project - Dashboard preview */}
        <article className="group grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
          <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Featured · Analytics
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              E-Commerce Sales Analytics Dashboard
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Analyzed 50K+ transaction records using SQL joins, KPI calculations, and Tableau dashboards
              to identify sales trends, customer behavior, category performance, and business insights.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["SQL", "Tableau", "Excel", "Pandas"].map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-8 flex gap-3">
              <a
                href="https://github.com/Gungun210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition"
              >
                <Github className="h-4 w-4" /> Code <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 glass-dark text-white p-6 lg:p-8 relative">
            <DashboardPreview />
          </div>
        </article>

        {/* Two side projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            icon={Calendar}
            title="Routine Optimizer"
            desc="Productivity analytics tool using Python and Pandas to identify efficiency bottlenecks, analyze routines, and generate optimized scheduling recommendations."
            tech={["Python", "Pandas", "Streamlit"]}
            href="https://github.com/Gungun210"
          />
          <ProjectCard
            icon={Linkedin}
            title="LinkedIn AI Analyzer"
            desc="Chrome Extension that analyzes LinkedIn profiles using AI APIs and suggests improvements for headlines, summaries, and profile optimization."
            tech={["Python", "AI APIs", "JavaScript"]}
            href="https://github.com/Gungun210"
          />
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({
  icon: Icon,
  title,
  desc,
  tech,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tech: string[];
  href: string;
}) {
  return (
    <article className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all flex flex-col">
      <div className="flex items-start justify-between">
        <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
          <Icon className="h-5 w-5" />
        </span>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 transition"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function DashboardPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/50">Sales Overview</p>
          <p className="text-xl font-semibold mt-0.5">$2.84M revenue</p>
        </div>
        <div className="flex gap-2">
          {["7D", "30D", "QTD"].map((t, i) => (
            <span
              key={t}
              className={`text-[11px] px-2.5 py-1 rounded-md border ${
                i === 1 ? "bg-white/10 border-white/20 text-white" : "border-white/10 text-white/50"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <MetricMini label="Orders" value="50,284" delta="+12.4%" icon={<ShoppingBag className="h-3.5 w-3.5" />} />
        <MetricMini label="AOV" value="$56.5" delta="+4.1%" icon={<TrendingUp className="h-3.5 w-3.5" />} />
        <MetricMini label="Customers" value="18,210" delta="+9.2%" icon={<Users className="h-3.5 w-3.5" />} />
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-white/60">Revenue Trend</p>
          <p className="text-[11px] text-emerald-300">+18% MoM</p>
        </div>
        <BarChart />
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <p className="text-xs text-white/60 mb-3">Category Performance</p>
        <div className="space-y-2.5">
          {[
            { l: "Electronics", v: 86 },
            { l: "Apparel", v: 64 },
            { l: "Home", v: 48 },
            { l: "Beauty", v: 32 },
          ].map((c) => (
            <div key={c.l}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-white/70">{c.l}</span>
                <span className="text-white/50">{c.v}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[oklch(0.7_0.18_250)] to-[oklch(0.78_0.16_220)]"
                  style={{ width: `${c.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricMini({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
      <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-widest">
        {icon} {label}
      </div>
      <p className="mt-1.5 text-base font-semibold">{value}</p>
      <p className="text-[10px] text-emerald-300">{delta}</p>
    </div>
  );
}

function BarChart() {
  const bars = [40, 55, 48, 70, 62, 78, 85, 72, 90, 82, 95, 88];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-[oklch(0.55_0.22_264)] to-[oklch(0.78_0.16_220)] opacity-90 hover:opacity-100 transition"
          style={{ height: `${b}%` }}
        />
      ))}
    </div>
  );
}
