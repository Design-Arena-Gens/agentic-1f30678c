"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all',
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    )}>
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href="#home" className="group inline-flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_16px_rgba(0,246,255,0.8)]" />
          <span className="font-heading text-sm sm:text-base tracking-wide gradient-text">MURAD KHAN</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden" />
      </nav>
    </header>
  )
}
