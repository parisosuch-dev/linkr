import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    await supabase.auth.getSession();

    return res;
}

// create matcher to prevent middleware auth on not auth endpoints
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"]
}