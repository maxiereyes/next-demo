export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/client/:path*']
}
