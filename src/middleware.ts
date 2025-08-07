import { auth } from "./app/backend/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl

  // Rutele care nu necesită autentificare

  // Rutele care trebuie să fie protejate (ex: dashboard)
  const protectedRoutes = ["/dashboard"]

  // Verifică dacă ruta este protejată (ex: dashboard sau subrute)
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  )

  // Dacă utilizatorul nu este autentificat și încearcă să acceseze o rută protejată
  if (!req.auth && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  // Configurează care rute să fie verificate de middleware
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}