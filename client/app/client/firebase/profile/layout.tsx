import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Auth-Kit Admin Protected Page',
  description:
    'Auth-Kit a full fledge authentication demo for multiple Services',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
