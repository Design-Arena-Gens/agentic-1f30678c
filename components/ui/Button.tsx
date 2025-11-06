import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Button({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium',
        'text-black bg-white hover:bg-white/90 transition-colors',
        'neon-ring',
        className
      )}
    >
      {children}
    </a>
  )
}
