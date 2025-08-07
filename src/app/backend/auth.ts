import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      // profile este disponibil DOAR la primul login
      if (account && profile) {
        token.picture = profile.picture; // <--- adaugăm imaginea aici
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as { id: string; image?: string }).id = token.sub ?? "";
        session.user.image = token.picture as string; // <--- o trimitem spre client
      }
      return session;
    },
  },
});
