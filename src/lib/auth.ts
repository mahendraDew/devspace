import { db } from "@/src/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github"
import { AuthOptions, DefaultSession, getServerSession } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
      } & DefaultSession["user"];
    }
  }

export const authConfig = {
    adapter: DrizzleAdapter(db) as Adapter,
    session:{
        strategy: "jwt",
    },
    providers: [
      GitHub({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    callbacks: {
        async jwt({ token, user }) {
          const dbUser = await db.query.users.findFirst({
            where: (users, { eq }) => eq(users.email, token.email!),
          });
    
          if (!dbUser) {
            throw new Error("no user with email found");
          }
    
          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
          };
        },
        async session({ token, session }) {
          if (token) {
            session.user = {
              id: token.id as string,
              name: token.name,
              email: token.email,
              image: token.picture,
            };
          }
    
          return session;
        },
      },
    } satisfies AuthOptions;



export function getSession(){
    return getServerSession(authConfig);
}