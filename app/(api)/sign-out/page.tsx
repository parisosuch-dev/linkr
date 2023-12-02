'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function SignOut() {
    const supabase = createClientComponentClient();
    const router = useRouter();

    useEffect(() => {
        supabase.auth.signOut().then((res) => {
            // signed out user -- redirect to home
            router.push("/");
        }).catch((error) => {
            // error signing out
            console.log(error);
        })
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-2 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold">thanks for stopping by!</h1>
            <h2 className="text-xl sm:text-3xl font-medium">~linkr</h2>
        </div>
    )
}