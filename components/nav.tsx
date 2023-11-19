'use client'

import Link from "next/link"
import type { User } from "@supabase/auth-helpers-nextjs"

const Nav = ({ user }: { user: User | null }) => {

    const linkStyle = "text-md sm:text-2xl"

    const authNav = (
        <Link className={linkStyle} href='/my-account'>my account</Link>
    )
    const notAuthNav = (
        <Link className={linkStyle} href='/sign-in'>sign in</Link>
    )

    return (
        <div className="flex flex-row-reverse px-8 py-4 sm:px-32 sm:py-16">
            {user ? authNav : notAuthNav}
        </div>
    );
}

export default Nav;