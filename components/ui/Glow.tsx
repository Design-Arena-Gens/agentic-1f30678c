export function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0,246,255,0.25), transparent 60%)' }} />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.25), transparent 60%)' }} />
    </div>
  )
}
