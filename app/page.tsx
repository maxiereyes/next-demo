'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home () {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Hello {session?.user?.email} !!!</h1>
      {
        status === 'authenticated' && <Link href='/api/auth/signout'>Logout</Link>
      }
    </div>
  )
}
