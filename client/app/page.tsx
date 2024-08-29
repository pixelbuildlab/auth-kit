import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      Auth-Kit Home
      <br />
      Page Non-Protected Page
      <Link href='/admin'>Admin</Link>
    </main>
  )
}
