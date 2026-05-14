import profile from "@/assets/profile.jpg";
import { ArrowUpRight, Download, Github, Linkedin, Mail, FileText, TrendingUp, BarChart3, Sparkles } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.22_264_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,_transparent_0%,_var(--surface)_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Data Analytics Internships
          </div>

          <div className="flex items-center gap-5">
            <img
              src={profile}
              alt="Gungun Khatri"
              className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-[var(--shadow-elegant)] border border-border"
            />
            <div>
              <p className="text-sm text-muted-foreground">Hi, I'm</p>
              <p className="text-lg font-semibold text-foreground">Gungun Khatri</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Turning data <br />
            into <span className="text-gradient">decisions.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Data Science student with hands-on experience in Python, SQL, Power BI, Tableau, EDA,
            and business analytics. Passionate about transforming raw datasets into actionable
            business insights through dashboards, KPI reporting, and data storytelling.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("resume")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              <FileText className="h-4 w-4" /> View Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="https://github.com/Gungun210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gungun-khatri/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium text-foreground hover:text-primary transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </div>
        </div>

        {/* Right - Dark dashboard preview */}
        <div className="lg:col-span-5 relative">
          <div className="glass-dark rounded-2xl p-6 shadow-[var(--shadow-elegant)] text-white">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400/70" />
                <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-white/50">Analytics · Q4</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <KpiMini label="CGPA" value="9.0" sub="JIET, Jodhpur" icon={<Sparkles className="h-3.5 w-3.5" />} />
              <KpiMini label="Projects" value="3+" sub="Shipped" icon={<BarChart3 className="h-3.5 w-3.5" />} />
              <KpiMini label="Researcher" value="Published" sub="AI Ethics · 2026" icon={<FileText className="h-3.5 w-3.5" />} />
              <KpiMini label="Competition" value="1st Prize" sub="Insight Wars" icon={<TrendingUp className="h-3.5 w-3.5" />} />
            </div>

            {/* Chart card */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/50">Insight Velocity</p>
                  <p className="text-lg font-semibold">+128.4%</p>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
                  ↑ trending
                </span>
              </div>
              <MiniChart />
            </div>
          </div>

          {/* Floating accent card */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-xl p-3 pr-4 shadow-[var(--shadow-elegant)] border border-border">
            <span className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Decisions shipped</p>
              <p className="text-sm font-semibold">Data → Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiMini({ label, value, sub, icon }: { label: string; value: string; sub: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
      <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-widest">
        {icon} {label}
      </div>
      <p className="mt-1.5 text-base font-semibold">{value}</p>
      <p className="text-[11px] text-white/50">{sub}</p>
    </div>
  );
}

function MiniChart() {
  const points = [12, 18, 14, 22, 20, 28, 26, 34, 30, 40, 38, 48];
  const max = Math.max(...points);
  const w = 260;
  const h = 70;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.18 250)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.7 0.18 250)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="oklch(0.78 0.16 240)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
