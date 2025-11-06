import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export function Card({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors', className)}>
      {children}
    </div>
  )
}
