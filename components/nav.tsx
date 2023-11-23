'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClientComponentClient, type User } from "@supabase/auth-helpers-nextjs"
import { usePathname } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import supabase from "@/lib/supabase/supabase-browser"

const Nav = ({ user }: { user: User | null }) => {
    const linkStyle = "text-md sm:text-2xl";

    const authNav = (
        <Link className={linkStyle} href='/my-account'>my account</Link>
    )
    const notAuthNav = (
        <Link className={linkStyle} href='/sign-in'>sign in</Link>
    )

    return (
        <div className="flex flex-row-reverse px-8 py-4 sm:px-32 sm:py-16">
            <div className="space-x-8">
                <Link className={linkStyle} href="/">home</Link>
                {user ? authNav : notAuthNav}
            </div>
        </div>
    );
}

export default Nav;