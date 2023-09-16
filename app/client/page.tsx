'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Client () {
  const { data: session, status } = useSession()

  if (!session) redirect('/api/auth/signin')

  return (
    <section>
      <h1>Client Side Rendering</h1>
      <p>
        This page uses the <strong>useSession()</strong> React Hook.
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <p>
        The <strong>useSession()</strong> React Hook is easy to use and allows
        pages to render very quickly.
      </p>
    </section>
  )
}
