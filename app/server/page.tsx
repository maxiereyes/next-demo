import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

async function ServerPage () {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <div>
      <h1>Server Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <p>
        <a href='/api/auth/signout'>Sign out</a>
      </p>
    </div>
  )
}

export default ServerPage
