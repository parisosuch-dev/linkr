'use client'

import Linkr from "@/lib/supabase/Linkr";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LinkControl({ link }: { link: Linkr }) {
    const date = new Date(link.created_at);
    const timestamp = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const supabase = createClientComponentClient();

    const deleteLink = async () => {
        // delete link for user
        const { error } = await supabase.from('link').delete().eq('id', link.id);

        if (error) {
            return false;
        }
        return true
    }
    return (
        <div className="sm:grid sm:grid-cols-3 sm:justify-items-center sm:items-center p-4 space-y-4 border-4 rounded-md sm:gap-8">
            <div className="w-full">
                <a className="underline font-bold text-lg sm:text-2xl p-2" href={window.location.origin + "/l/" + link.id}>{link.url}</a>
                <p className="border-4 bg-gray-200 rounded-full w-max px-0.5 sm:px-2 text-xs sm:text-lg">{timestamp}</p>
            </div>
            <Button className="w-full" onClick={() => navigator.clipboard.writeText(window.location.origin + "/l/" + link.id)}>copy to clipboard</Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full">delete</Button>
                </DialogTrigger>
                <DialogContent className="sm:w-full shadow-[5px_5px_0_0] border-2 sm:border-4 border-primary">
                    <DialogHeader>
                        <DialogTitle className="text-xl sm:text-5xl font-medium text-center pt-2">Are you sure you want to delete your link?</DialogTitle>
                        <DialogDescription className="text-sm sm:text-lg text-center">
                            This will permanently delete your short link: {`${link.url}`}
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => {
                        deleteLink();
                        <DialogClose />
                    }}>Delete the link</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}