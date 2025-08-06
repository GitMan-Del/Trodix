import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl

  // Rutele care nu necesită autentificare
  const publicRoutes = ["/", "/api/auth"]
  
  // Verifică dacă ruta este publică
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route) || pathname === route
  )

  // Dacă utilizatorul este autentificat și încearcă să acceseze pagina principală
  if (req.auth && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // Dacă utilizatorul nu este autentificat și încearcă să acceseze o rută protejată
  if (!req.auth && !isPublicRoute) {
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