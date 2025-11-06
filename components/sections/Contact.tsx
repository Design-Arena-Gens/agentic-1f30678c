"use client"

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useCallback } from 'react'

export function Contact() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()
    const subject = encodeURIComponent(`Inquiry from ${name || 'Portfolio'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:contact@muradkhan.dev?subject=${subject}&body=${body}`
  }, [])

  return (
    <Section id="contact" title="Contact" subtitle="Let?s build something dependable and efficient.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card>
          <h3 className="font-heading tracking-wide">Work with Murad</h3>
          <p className="mt-2 text-white/75 text-sm">For consulting, engagements, or collaborations, send an email or use the form.</p>
          <a href="mailto:contact@muradkhan.dev" className="mt-4 inline-block text-white/90 hover:text-white">contact@muradkhan.dev ?</a>
        </Card>
        <Card>
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="text-xs text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
            </div>
            <div>
              <label className="text-xs text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
            </div>
            <div>
              <label className="text-xs text-white/70">Message</label>
              <textarea name="message" rows={4} required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
            </div>
            <button className="mt-2 inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium text-black bg-white hover:bg-white/90 transition-colors neon-ring">
              Send email
            </button>
          </form>
        </Card>
      </div>
    </Section>
  )
}
