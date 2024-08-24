import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      firebase auth
      <Link href='/admin'>Admin</Link>
    </main>
  )
}
