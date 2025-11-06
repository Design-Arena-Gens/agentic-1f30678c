import { PropsWithChildren } from 'react'

export function Section({ id, title, subtitle, children }: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="mx-auto max-w-6xl pt-28 sm:pt-32" aria-labelledby={`${id}-title`}>
      <header className="mb-8">
        <h2 id={`${id}-title`} className="font-heading text-2xl sm:text-3xl tracking-wide gradient-text">{title}</h2>
        {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
      </header>
      {children}
    </section>
  )
}