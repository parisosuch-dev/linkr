'use client'

import { useState, useEffect } from "react"
import Header from "@/components/ui/header"
import getUserLinks from "@/lib/supabase/getUserLinks"
import { User } from "@supabase/supabase-js"
import type Linkr from "@/lib/supabase/Linkr"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import LinkControl from "@/components/linkcontrol"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Links() {
    const [links, setLinks] = useState<Linkr[] | null>(null);
    const supabase = createClientComponentClient();
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
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
    });

    const noLinks = (
        <div className="flex flex-row space-x-4 items-center justify-center">
            <p className="w-1/2 text-lg sm:text-3xl ">you have no links!</p>
            <Button
                className="w-1/2"
                onClick={() => {
                    router.push("/");
                }}>add one</Button>
        </div>
    )

    return (
        <div className="text-primary bg-gray-100 flex flex-col items-center justify-center pt-0 pb-16 sm:pb-32">
            <div className="w-5/6 sm:w-1/2 flex flex-col items-start">
                <Header text="~links" />
                <div className="shadow-[5px_5px_0_0] sm:shadow-[7px_7px_0_0] shadow-primary space-y-6 sm:space-y-8 w-full border-2 sm:border-4 rounded-sm border-primary p-2 sm:p-8">
                    {links && links.length === 0 ? noLinks
                        : links ? links.map((value, index) => (
                            <LinkControl key={index} link={value} />
                        ))
                            : <p className="text-lg sm:text-2xl">loading links...</p>}
                </div>
            </div>
        </div>
    )
}