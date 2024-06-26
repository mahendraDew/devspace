import { db } from "@/src/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import GitHub from "next-auth/providers/github"

const handler = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
    }),
],
})

export { handler as GET, handler as POST }