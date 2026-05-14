import { Section } from "./Section";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("name") || ""}`);
    const body = encodeURIComponent(
      `${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`
    );
    window.location.href = `mailto:khatrigungun225@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something with data."
      description="Open to data analytics internships, collaborations, and conversations about analytics."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-3">
          <ContactRow
            icon={Mail}
            label="Email"
            value="khatrigungun225@gmail.com"
            href="mailto:khatrigungun225@gmail.com"
          />
          <ContactRow
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/gungun-khatri"
            href="https://www.linkedin.com/in/gungun-khatri/"
          />
          <ContactRow
            icon={Github}
            label="GitHub"
            value="github.com/Gungun210"
            href="https://github.com/Gungun210"
          />
          <ContactRow icon={MapPin} label="Location" value="Jodhpur, Rajasthan, India" />
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium text-foreground mb-1.5">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about the role or project…"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
            />
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {sent ? "Opening your email client…" : "Replies usually within 24 hours."}
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:shadow-[var(--shadow-card)] hover:border-primary/30 transition-all">
      <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-foreground mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
      />
    </div>
  );
}
