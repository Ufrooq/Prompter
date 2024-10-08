import userModel from "@models/users";
import { connectdb } from "@utils/dbConnection";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";




const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        await connectdb();
        const currentUser = await userModel.findOne({
          email: session.user.email,
        });
        session.user.id = currentUser?._id.toString();
        return session;
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ profile }) {
      try {
        await connectdb();
        const userExists = await userModel.findOne({ email: profile.email });
        if (!userExists) {
          console.log("user not exists");
          await userModel.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { authHandler as GET, authHandler as POST };
