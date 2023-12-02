'use client'

import Link from "next/link"
import { type User } from "@supabase/auth-helpers-nextjs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import supabase from "@/lib/supabase/supabase-browser"

const Nav = ({ user }: { user: User | null }) => {
    const linkStyle = "text-md sm:text-2xl";

    const authNav = (
        <Link className={linkStyle} href='/my-account'>my account</Link>
    )
    const notAuthNav = (
        <Dialog>
            <DialogTrigger asChild>
                <button className={linkStyle}>sign in</button>
            </DialogTrigger>
            <DialogContent className="sm:w-full shadow-[5px_5px_0_0] border-2 sm:border-4 border-primary">
                <DialogHeader>
                    <DialogTitle className="text-xl pt-2 sm:text-5xl font-medium">Sign In</DialogTitle>
                    <DialogDescription className="text-sm sm:text-lg text-center">
                        (you will get to keep your links)
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={() => {
                    supabase.auth.signInWithOAuth({
                        provider: 'google'
                    });
                }}>Login with Google</Button>
            </DialogContent>
        </Dialog>
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