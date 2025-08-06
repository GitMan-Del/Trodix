import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

// Verifică dacă variabilele de mediu sunt setate
const googleClientId = process.env.AUTH_GOOGLE_ID || process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.AUTH_GOOGLE_SECRET || process.env.GOOGLE_CLIENT_SECRET
const nextAuthSecret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET

if (!googleClientId || !googleClientSecret) {
  console.error("Available env vars:", Object.keys(process.env).filter(key => key.includes('AUTH') || key.includes('GOOGLE')))
  throw new Error("Missing required environment variables: AUTH_GOOGLE_ID/GOOGLE_CLIENT_ID and AUTH_GOOGLE_SECRET/GOOGLE_CLIENT_SECRET")
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: nextAuthSecret,
  trustHost: true, // Necesar pentru Vercel
  basePath: "/api/auth",
  providers: [Google({
    clientId: googleClientId,
    clientSecret: googleClientSecret,
  }),
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/",
    error: "/", // Redirect to home page on error
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      try {
        // Permite redirect către dashboard după login
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        // Redirect către dashboard după login reușit
        else if (new URL(url).origin === baseUrl) return url;
        return `${baseUrl}/dashboard`;
      } catch (error) {
        console.error("Redirect error:", error);
        return baseUrl; // Fallback la home page
      }
    },
    async signIn({ user }) {
      try {
        // Verifică dacă utilizatorul are o adresă de email validă
        if (user.email) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },
  },
})