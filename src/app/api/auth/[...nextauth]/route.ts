import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { IAuthenticateUser, requestAuthenticationUser } from "@/project/auth/requests-api";
import { cookies } from "next/headers";
import { decoderTokenToClaims } from "@/project/auth/decode-claims";

const handler = NextAuth({
    pages: {
        signIn: "/signin",
        signOut:"/"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user: IAuthenticateUser = { email: credentials?.email, password: credentials?.password };
                const resposta = await requestAuthenticationUser(user);

                cookies().set("jwt_back", resposta.token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    path: '/'
                });

                const decodedClaims = decoderTokenToClaims(resposta.token);
                if (resposta != null) {
                    return { id: "999", name: decodedClaims?.Name, email: decodedClaims?.Email, tipo: decodedClaims?.TipoUsuario }
                }
                return null;
            }
        })
    ]
})
export { handler as GET, handler as POST }