'use client'

import { useState, useEffect } from "react"
import Header from "@/components/ui/header"
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import AccountItem from "@/components/accountItem"

export default function Account() {
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClientComponentClient();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            if (user) {
                setUser(user)
            } else {
                // redirect if not signed in
                redirect("/");
            }
        });
    }, [])

    return (
        <div className="text-primary bg-gray-100 flex flex-col items-center justify-center pt-0 pb-16 sm:pb-32">
            <div className="w-5/6 sm:w-1/2 flex flex-col items-start">
                <Header text="~account" />
                <div className="shadow-[5px_5px_0_0] sm:shadow-[7px_7px_0_0] shadow-primary space-y-6 sm:space-y-8 w-full border-2 sm:border-4 rounded-sm border-primary p-2 sm:p-8">
                    <AccountItem item="email" value={user?.email} />
                    <AccountItem item="created_at" value={user?.created_at} is_date />
                    <AccountItem item="last_sign_in" value={user?.last_sign_in_at} is_date />
                </div>
            </div>
        </div>
    )
}