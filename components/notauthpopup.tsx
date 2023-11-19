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
import Link from "next/link";

const NotAuthPopup = () => {
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
        <Button>Login with Provider 1</Button>
        <Button>Login with Provider 2</Button>
        <DialogFooter className="flex flex-col items-center">
          <Link href="/" className="underline text-sm">I&apos;ll pass...</Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotAuthPopup;