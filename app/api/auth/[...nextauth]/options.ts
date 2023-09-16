import supabase from '@/app/config/supabase'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req): Promise<any> {
        if (credentials?.email && credentials?.password) {
          const response = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password

          })

          const user = {
            ...response.data.session?.user,
            ...response.data.session
          }

          return user
        }
        return null
      }
    })
  ],
  callbacks: {
    async signIn ({ user, account, profile, email, credentials }) {
      if (user) {
        return true
      }

      return false
    },
    async redirect ({ url, baseUrl }) {
      return baseUrl
    },
    async session ({ session, user, token }) {
      return session
    },
    async jwt ({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}
