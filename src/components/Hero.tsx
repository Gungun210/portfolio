import profile from "@/assets/profile.jpg";
import { Download, Github, Linkedin, Mail, FileText, TrendingUp, BarChart3, Sparkles } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-mesh">
      <div className="absolute inset-0 -z-10 ring-grid opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.22_264_/_0.10),_transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,_transparent_0%,_var(--surface)_100%)] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="lg:col-span-7 space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to Data Analytics Internships
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Hi, I'm <span className="text-foreground font-medium">Gungun Khatri</span></p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              Turning data <br />
              into <span className="text-gradient">decisions.</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Data Science student with hands-on experience in Python, SQL, Power BI, Tableau, EDA,
            and business analytics. I transform raw datasets into actionable business insights
            through dashboards, KPI reporting, and data storytelling.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => scrollTo("resume")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[var(--shadow-soft)]"
            >
              <FileText className="h-4 w-4" /> View Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[var(--shadow-soft)]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="https://github.com/Gungun210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary hover:border-primary/40 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gungun-khatri/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary hover:border-primary/40 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium text-foreground hover:text-primary transition"
            >
              <Mail className="h-4 w-4" /> Contact
            </button>
          </div>

          <div className="pt-6 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground/40" /> JIET, Jodhpur</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground/40" /> CGPA 9.0</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-foreground/40" /> Published Researcher</div>
          </div>
        </div>

        {/* Right - Portrait + floating analytics */}
        <div className="lg:col-span-5 relative animate-fade-up delay-200">
          <div className="relative mx-auto max-w-md">
            {/* Soft glow halo */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-2xl" />

            {/* Portrait card */}
            <div className="relative rounded-3xl overflow-hidden border border-border bg-white shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={profile}
                  alt="Gungun Khatri — Data Science student and aspiring Data Analyst"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/70">Data Analyst · Intern</p>
                  <p className="text-base font-semibold">Gungun Khatri</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/25">
                  2026
                </span>
              </div>
            </div>

            {/* Floating KPI card - top right */}
            <div className="hidden sm:block absolute -top-5 -right-5 glass-dark text-white rounded-2xl p-3.5 w-44 shadow-[var(--shadow-elegant)] animate-float-slow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-widest text-white/50">Insight Velocity</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
                  ↑
                </span>
              </div>
              <p className="text-lg font-semibold leading-none">+128.4%</p>
              <div className="mt-2"><MiniChart /></div>
            </div>

            {/* Floating KPI card - bottom left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 bg-white rounded-2xl p-3 pr-4 shadow-[var(--shadow-elegant)] border border-border animate-float-slow" style={{ animationDelay: "1.5s" }}>
              <span className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                <BarChart3 className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</p>
                <p className="text-sm font-semibold text-foreground">9.0 / 10</p>
              </div>
            </div>

            {/* Floating KPI card - middle right */}
            <div className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 items-center gap-2.5 bg-white rounded-2xl p-2.5 pr-3.5 shadow-[var(--shadow-elegant)] border border-border animate-float-slow" style={{ animationDelay: "0.8s" }}>
              <span className="h-9 w-9 rounded-xl bg-emerald-50 grid place-items-center text-emerald-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Insight Wars</p>
                <p className="text-xs font-semibold text-foreground">1st Prize</p>
              </div>
            </div>

            {/* Tag */}
            <div className="hidden md:flex absolute -top-3 -left-4 items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1 text-[11px] font-medium text-foreground shadow-[var(--shadow-card)]">
              <Sparkles className="h-3 w-3 text-primary" /> Data Storyteller
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
