import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const categories: { name: string; items: string[] }[] = [
  { name: 'Networking', items: ['Cisco', 'MikroTik', 'VPN', 'Zero Trust', 'SSO'] },
  { name: 'Web', items: ['Next.js', 'React', 'Node.js', 'Postgres', 'Prisma'] },
  { name: 'Automation', items: ['Python', 'TypeScript', 'Ansible', 'Playwright', 'CI/CD'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Linux', 'nginx', 'Vercel'] },
  { name: 'AI', items: ['OpenAI', 'LangChain', 'Embeddings', 'Vector DB', 'RAG'] },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A practical toolkit tailored for shipping stable systems fast.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((c) => (
          <Card key={c.name}>
            <h3 className="font-heading tracking-wide">{c.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.items.map((i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">{i}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
