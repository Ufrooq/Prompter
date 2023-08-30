import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signin({ profile }) {},
});

export { authHandler as GET, authHandler as POST };
