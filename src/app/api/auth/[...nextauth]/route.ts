import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";

const demoUser = {
  id: "demo-1",
  name: "Zyvia Customer",
  email: "customer@example.com",
  // password is "password123" (hashed)
  passwordHash: "$2b$10$qYv3f2qG2L1Q90gk8yZJye9tU8D5d8x1lG3n6kSgA7v3C2k5lO6de",
};

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null;
        if (creds.email.toLowerCase() !== demoUser.email) return null;
        const ok = await bcrypt.compare(creds.password, demoUser.passwordHash);
        if (!ok) return null;
        return { id: demoUser.id, name: demoUser.name, email: demoUser.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
