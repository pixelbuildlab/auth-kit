import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Admin Page',
  description: 'Authentication demo in Next.js 14',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
