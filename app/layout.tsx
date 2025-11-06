import type { Metadata } from 'next'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['600','700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Murad Khan ? IT Solutions Expert',
  description: 'Full?stack developer and automation engineer in Karachi building smarter systems.',
  metadataBase: new URL('https://agentic-1f30678c.vercel.app'),
  openGraph: {
    title: 'Murad Khan ? Building Smarter Systems',
    description: 'IT solutions, web development, automation, AI integration on demand.',
    url: 'https://agentic-1f30678c.vercel.app',
    siteName: 'Murad Khan Portfolio',
    locale: 'en_PK',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Murad Khan ? Portfolio', description: 'IT solutions expert in Karachi.' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}> 
      <body className="font-sans antialiased">
        <div className="bg-tech" />
        {children}
      </body>
    </html>
  )
}
