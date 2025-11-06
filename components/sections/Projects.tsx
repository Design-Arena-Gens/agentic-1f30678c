import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const projects = [
  {
    title: 'Smart Retail Automation Suite',
    desc: 'End?to?end automation for inventory, billing, and analytics integrating barcode, sensors, and a Next.js dashboard.',
    tags: ['Next.js', 'Node', 'Postgres', 'Automation'],
    href: '#'
  },
  {
    title: 'AI?Enabled Service Desk',
    desc: 'RAG?powered assistant that triages tickets, suggests fixes, and automates routine responses with guardrails.',
    tags: ['OpenAI', 'RAG', 'Vector DB', 'TypeScript'],
    href: '#'
  },
  {
    title: 'Secure Network Backbone',
    desc: 'Hardened campus network with SSO, VPN, and observability, designed for high availability and zero trust.',
    tags: ['Networking', 'Security', 'SSO', 'Monitoring'],
    href: '#'
  }
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected builds that demonstrate breadth and depth.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="flex h-full flex-col">
              <h3 className="font-heading tracking-wide text-lg">{p.title}</h3>
              <p className="mt-2 text-white/75 text-sm flex-1">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
              <a href={p.href} className="mt-5 text-sm text-white/80 hover:text-white">View details ?</a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
