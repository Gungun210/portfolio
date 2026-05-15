import profile from "@/assets/profile.jpg";
import { Download, Github, Linkedin, Mail, FileText, TrendingUp } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-mesh">
      <div className="absolute inset-0 -z-10 ring-grid opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.22_264_/_0.08),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,_transparent_0%,_var(--surface)_100%)] opacity-60" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to Data Analytics Internships
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Hi, I'm <span className="text-foreground font-medium">Gungun Khatri</span>
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.04]">
              Turning data <br />
              into <span className="text-gradient">decisions.</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Data Science student with hands-on experience in Python, SQL, Power BI, Tableau, and EDA.
            I transform raw datasets into actionable business insights through dashboards, KPI reporting,
            and data storytelling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[var(--shadow-soft)]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("resume")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary hover:border-primary/40 transition"
            >
              <FileText className="h-4 w-4" /> View Resume
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium text-foreground hover:text-primary transition"
            >
              <Mail className="h-4 w-4" /> Contact
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href="https://github.com/Gungun210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/gungun-khatri/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground/40" /> JIET, Jodhpur</span>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground/40" /> CGPA 9.0</span>
          </div>
        </div>

        {/* Right - Circular portrait + minimal accents */}
        <div className="lg:col-span-5 relative animate-fade-up delay-200">
          <div className="relative mx-auto w-[280px] sm:w-[340px] lg:w-[380px] aspect-square">
            {/* Soft glow halo */}
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />

            {/* Subtle ring */}
            <div className="absolute -inset-3 -z-10 rounded-full border border-border/60" />
            <div className="absolute -inset-6 -z-10 rounded-full border border-border/30" />

            {/* Circular portrait */}
            <div className="relative h-full w-full rounded-full overflow-hidden ring-8 ring-white shadow-[var(--shadow-elegant)]">
              <img
                src={profile}
                alt="Gungun Khatri — Data Science student and aspiring Data Analyst"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* KPI card - bottom right (subtle) */}
            <div className="hidden sm:flex absolute -bottom-3 -right-2 items-center gap-2.5 bg-white/90 backdrop-blur rounded-2xl py-2.5 px-3.5 shadow-[var(--shadow-elegant)] border border-border animate-float-slow">
              <span className="h-9 w-9 rounded-xl bg-emerald-50 grid place-items-center text-emerald-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</p>
                <p className="text-sm font-semibold text-foreground">9.0 / 10</p>
              </div>
            </div>

            {/* KPI card - top left (dark glass, single chart) */}
            <div className="hidden sm:block absolute -top-2 -left-6 glass-dark text-white rounded-2xl p-3 w-40 shadow-[var(--shadow-elegant)] animate-float-slow" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[10px] uppercase tracking-widest text-white/50">Insights</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">↑</span>
              </div>
              <p className="text-base font-semibold leading-none">+128%</p>
              <div className="mt-1.5"><MiniChart /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function MiniChart() {
  const points = [12, 18, 14, 22, 20, 28, 26, 34, 30, 40, 38, 48];
  const max = Math.max(...points);
  const w = 260;
  const h = 50;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10">
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
