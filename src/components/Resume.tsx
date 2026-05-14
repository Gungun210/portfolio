import { Section } from "./Section";
import { Download, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

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
          </div>
          <p className="text-muted-foreground leading-relaxed">
            One-page resume tailored for data analytics internships. Skills, projects, research, and
            achievements at a glance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
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
              <span>resume.pdf · Gungun Khatri</span>
              <span>PDF Preview</span>
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
