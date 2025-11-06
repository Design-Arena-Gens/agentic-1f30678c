"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Glow } from '@/components/ui/Glow'

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl pt-28 sm:pt-40">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 glass">
        <Glow />
        <div className="px-6 sm:px-12 py-14 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_8px_rgba(0,246,255,0.8)]" />
              Karachi, Pakistan ? Available for projects
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              <span className="gradient-text">Murad Khan</span> ? Building Smarter Systems for the Digital Age.
            </h1>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">
              IT solutions expert and developer specializing in modern web systems, automation, and on?demand AI integration.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contact">Get in touch</Button>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">View projects ?</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
