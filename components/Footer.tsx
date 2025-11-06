export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-white/60">
      <div className="h-px w-full bg-white/10 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} Murad Khan. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:contact@muradkhan.dev" className="hover:text-white transition-colors">Email</a>
          <a href="https://github.com/" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
