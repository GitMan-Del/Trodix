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

  callbacks: {
    async session({ session, token }) {
      // Ensure session.user exists and is an object
      if (session.user) {
        // Assign id as string, fallback to empty string if undefined
        (session.user as { id: string }).id = token.sub ?? "";
      }
      return session;
    },
  },
})