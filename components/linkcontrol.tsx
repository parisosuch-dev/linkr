import Link from "@/lib/supabase/Link";
import { Button } from "./ui/button";

export default function LinkControl({ link }: { link: Link }) {
    const date = new Date(link.created_at);
    const timestamp = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    return (
        <div className="grid grid-cols-2 justify-items-center items-center">
            <div className="w-1/2">
                <a className="underline font-bold text-lg sm:text-2xl p-2" href={link.url}>{link.url}</a>
                <p className="border-4 bg-gray-200 rounded-full w-max sm:px-2 text-xs sm:text-lg">{timestamp}</p>
            </div>
            <Button className="w-1/2">delete</Button>
        </div>
    );
}