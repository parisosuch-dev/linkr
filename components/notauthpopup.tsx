import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import supabaseServer from "@/lib/supabase/supabase-server";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link";
import { useState } from "react";
import postLink from "@/lib/supabase/postLink";
import ConsoleOut from "./consoleout";

const NotAuthPopup = ({ url, user }: { url: string, user: User | null }) => {
  const supabase = createClientComponentClient();
  const [link, setLink] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-1/6" onClick={() => {
          console.log("click!")
        }}>shorten</Button>
      </DialogTrigger>
      <DialogContent className="sm:w-full shadow-[5px_5px_0_0] border-2 sm:border-4 border-primary">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-5xl font-medium">You aren&apos;t signed in to linkr!</DialogTitle>
          <DialogDescription className="text-sm sm:text-lg">
            If you want to keep your links, you need to sign in or create an account.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={() => {
          supabase.auth.signInWithOAuth({
            provider: 'google'
          });
        }}>Login with Google</Button>
        <DialogFooter className="flex flex-col items-center">
          {
            link ?
              <ConsoleOut text={link} />
              :
              <button className="underline"
                onClick={() => {
                  // post link to db
                  postLink({ url, user }).then(({ data, error }) => {
                    if (error) {
                      setErrorMessage(error.message);
                      setLink(null);
                    } else {
                      setErrorMessage(undefined);
                      data ? setLink(window.location.origin + "/l/" + data[0].id) : setLink(null);
                    }
                  });
                }}>I&apos;ll pass...</button>
          }
          {errorMessage ? <p className="font-bold text-rose-500">{errorMessage}</p> : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotAuthPopup;