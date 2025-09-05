export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-surface/60">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div>© {new Date().getFullYear()} Zyvia Herbals. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-ivory transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-ivory transition-colors">Terms</a>
          <a href="/contact" className="hover:text-ivory transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
