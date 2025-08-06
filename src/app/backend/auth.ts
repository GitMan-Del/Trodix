import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
      // Permite redirect către dashboard după login
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Redirect către dashboard după login reușit
      else if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/dashboard`;
    },
    async signIn({ user, account, profile }) {
      // Allow all sign ins
      return true;
    },
  },
})