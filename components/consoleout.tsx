'use client'

import { useState } from "react";
import { RiClipboardLine, RiClipboardFill } from "react-icons/ri";

const ConsoleOut = ({ text, isError }: { text: string, isError?: boolean }) => {
    const [copy, setCopy] = useState(false);

    if (isError) {
        return (
            <p className="pt-4 font-bold text-md sm:text-lg">{"> " + text}</p>
        )
    }
    return (
        <div className="flex flex-row items-end justify-start space-x-2">
            <p className="pt-4 font-bold text-md sm:text-lg">&gt; <a className="underline" href={text}>{text}</a></p>
            {copy ?
                <RiClipboardFill className="h-6 w-6 sm:h-8 sm:w-8" onClick={() => {
                    navigator.clipboard.writeText(text);
                }} />
                :
                <RiClipboardLine className="h-6 w-6 sm:h-8 sm:w-8" onClick={() => {
                    navigator.clipboard.writeText(text);
                    setCopy(true);
                }} />
            }

        </div>

    )

}

export default ConsoleOut;