'use client'

import Link from "next/link"
import type { User } from "@supabase/auth-helpers-nextjs"


const Nav = ({ user }: { user: User | null }) => {
    console.log(user);

    return (
        <div className="flex flex-row-reverse px-8 py-4 sm:px-32 sm:py-16">
            {user ? <Link href='/me'>my account</Link> : <Link href='/sign-in'>Sign in</Link>}
        </div>
    );
}

export default Nav;