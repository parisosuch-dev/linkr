'use client'

import { useEffect } from "react";
import getLink from "@/lib/supabase/getLink";

export default function URLReroute({ params }: { params: { urlID: string } }) {

    useEffect(() => {
        getLink(params.urlID).then((url: string) => {
            if (url.startsWith("https://") || url.startsWith("http://")) {
                window.location.assign(url);
            } else {
                window.location.assign("https://" + url)
            }
        })
    }, [params.urlID])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-2">
            <h1 className="text-4xl sm:text-6xl font-bold">thanks for stopping by!</h1>
            <h2 className="text-xl sm:text-3xl font-medium">~linkr</h2>
        </div>
    )
    // get the url based on the id being passed in the parameter

    // redirect user to that url

}