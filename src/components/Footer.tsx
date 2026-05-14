export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Gungun Khatri · Built with care.</p>
        <p>Data Science · Analytics · Storytelling</p>
      </div>
    </footer>
  );
}
