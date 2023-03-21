import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware"
import { getSession } from "next-auth/react";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    async function middleware(req) {
        const token = await getToken({
            req: req,
            secret: process.env.NEXTAUTH_SECRET
        });
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
)

export const config = { matcher: ["/"] }