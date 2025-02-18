import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);


export default clerkMiddleware(async (auth, request) => {


  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID

  if (isAdminRoute(request) && !isAdminUser) {
    return NextResponse.redirect(new URL('/',request.url))
  }

  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};