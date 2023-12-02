'use client'

import { useState, useEffect } from "react"
import Header from "@/components/ui/header"
import getUserLinks from "@/lib/supabase/getUserLinks"
import { User } from "@supabase/supabase-js"
import type Link from "@/lib/supabase/Link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"

export default function Links() {
    const [user, setUser] = useState<User | null>(null);
    const [links, setLinks] = useState<Link[] | null>(null);
    const supabase = createClientComponentClient();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            if (user) {
                getUserLinks(user).then((res) => {
                    setLinks(res);
                }).catch((err) => {
                    // something went wrong!
                    console.log(err);
                });
            } else {
                // redirect if not signed in
                redirect("/");
            }
        });
    })

    return (
        <div className="text-primary bg-gray-100 flex flex-col items-center justify-center pt-32 sm:pt-0">
            <div className="w-5/6 sm:w-1/2 flex flex-col items-start">
                <Header text="~links" />
                <div className="flex flex-col shadow-[5px_5px_0_0] sm:shadow-[7px_7px_0_0] shadow-primary justify-center space-y-1 sm:space-y-8 w-full border-2 sm:border-4 rounded-sm border-primary p-2 sm:p-8">

                </div>
            </div>
        </div>
    )
}