'use client'

import { useEffect } from "react";
import getLink from "@/lib/supabase/getLink";

export default function urlReroute({ params }: { params: { urlID: string } }) {

    useEffect(() => {
        getLink(params.urlID).then((url: string) => {
            if (url.startsWith("https://") || url.startsWith("http://")) {
                window.location.assign(url);
            } else {
                window.location.assign("https://" + url)
            }
        })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>thanks for stopping by!</h1>
            <h2>~linkr</h2>
        </div>
    )
    // get the url based on the id being passed in the parameter

    // redirect user to that url

}