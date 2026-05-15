import { Section } from "./Section";
import { Download, ExternalLink, ShieldCheck, Sparkles, FileText, CheckCircle2 } from "lucide-react";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume."
      description="Preview the latest version or download the PDF."
      className="bg-surface"
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-5">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
              <ShieldCheck className="h-3.5 w-3.5" /> ATS Friendly
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" /> Updated 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-foreground border border-border text-xs font-medium">
              <FileText className="h-3.5 w-3.5" /> 1 Page · PDF
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            One-page resume tailored for data analytics internships. Skills, projects, research, and
            achievements at a glance.
          </p>

          {/* Highlights */}
          <ul className="space-y-2.5">
            {[
              "Optimized for applicant tracking systems",
              "Quantified outcomes & metrics",
              "Tailored for data analytics roles",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { l: "Last Updated", v: "2026" },
              { l: "Format", v: "PDF · A4" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-border bg-white text-foreground text-sm font-medium hover:bg-secondary transition"
            >
              <ExternalLink className="h-4 w-4" /> Open in new tab
            </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </span>
                resume.pdf · Gungun Khatri
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> ATS Verified
              </span>
            </div>
            <object
              data="/resume.pdf#toolbar=0&navpanes=0"
              type="application/pdf"
              className="w-full h-[640px] bg-white"
            >
              <div className="p-8 text-center text-muted-foreground text-sm">
                PDF preview is not supported in this browser.{" "}
                <a href="/resume.pdf" className="text-primary underline">
                  Download the resume
                </a>
                .
              </div>
            </object>
          </div>
        </div>
      </div>
    </Section>
  );
}
