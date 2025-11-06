import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Network, Globe, Bot, Zap } from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'Networking & Infrastructure',
    points: [
      'Secure LAN/WAN design & deployment',
      'Firewalling, VPNs, zero?trust setups',
      'Monitoring, observability, SSO'
    ]
  },
  {
    icon: Globe,
    title: 'Full?stack Web Systems',
    points: [
      'Next.js, React, Node.js, Postgres',
      'Clean APIs, auth, and caching',
      'SEO, performance, accessibility'
    ]
  },
  {
    icon: Zap,
    title: 'Automation Engineering',
    points: [
      'CI/CD pipelines, infra as code',
      'Scripting with Python/TypeScript',
      'RPA and workflow automation'
    ]
  },
  {
    icon: Bot,
    title: 'On?Demand AI Integration',
    points: [
      'Intelligent assistants & copilots',
      'Embeddings, RAG, vector search',
      'Ethical and secure rollout'
    ]
  }
]

export function Services() {
  return (
    <Section id="services" title="Services" subtitle="Modern, scalable solutions designed for real?world reliability.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((s) => (
          <Card key={s.title}>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                <s.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
              </div>
              <div>
                <h3 className="font-heading tracking-wide text-lg">{s.title}</h3>
                <ul className="mt-3 space-y-1.5 text-white/75 text-sm">
                  {s.points.map((p) => (
                    <li key={p}>? {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
