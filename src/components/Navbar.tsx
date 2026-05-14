import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light shadow-[var(--shadow-card)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="h-8 w-8 rounded-lg bg-[var(--gradient-hero)] grid place-items-center text-white text-sm font-bold">
            G
          </span>
          <span className="text-foreground">Gungun Khatri</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 h-10 rounded-full text-sm font-medium bg-navy text-navy-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            Hire Me
          </button>
          <button
            className="lg:hidden h-10 w-10 grid place-items-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-px before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-px after:bg-foreground" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass-light border-t border-border">
          <ul className="px-6 py-4 space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
