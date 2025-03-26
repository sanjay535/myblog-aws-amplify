import { runWithAmplifyServerContext } from "./utils/util";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";

// console.log("Middleware executing...");
export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // console.log("Middleware running...");

    const authenticated = await runWithAmplifyServerContext({
        nextServerContext: {
            request,
            response
        },
        operation: async (context) => {
            try {
                const session = await fetchAuthSession(context, {});
                const isAuthenticated = session.tokens !== undefined;
                console.log("User authenticated:", isAuthenticated);
                return isAuthenticated;
            } catch (error) {
                console.error("Error fetching session:", error);
                return false;
            }
        }
    });

    if (authenticated) return response;

    console.log("User not authenticated, redirecting to /signup");
    return NextResponse.redirect(new URL('/signup', request.url));
}

export const config = {
    matcher: ['/admin/:path*']
};
