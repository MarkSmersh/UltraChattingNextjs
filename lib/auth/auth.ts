import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        // signIn: "/login",
        // signOut: "/",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async session({token, session}) {
            if (token) {
                (session.user as any).id = token.id;
                session.user!.name = token.name;
                session.user!.email = token.email;
                session.user!.image = token.picture;
            }

            return session;
        },
        async jwt({token, user}) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email as string,
                },
            });

            if (!dbUser) {
                await prisma.user.create({
                    data: {
                        email: token.email as string,
                        displayName: token.name as string,
                        imgUrl: token.image as string,
                    }
                });
                return token;
            }

            return {
                ...token,
            }
        },
        redirect() {
            return "/chat";
        }

    }
};
