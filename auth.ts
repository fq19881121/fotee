import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Resend({
      from: process.env.AUTH_EMAIL_FROM ?? "login@fotoee.com"
    })
  ],
  pages: {
    signIn: "/"
  }
});
