'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User } from "@supabase/auth-helpers-nextjs"

// components
import Header from "@/components/ui/header"
import RetroScreen from "@/components/retroscreen"
import NotAuthPopup from "@/components/notauthpopup"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import postLink from "@/lib/supabase/postLink"



export default function Home() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>(null);
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  useEffect(() => {
    const getUser = async () => {
      supabase.auth.getUser().then(({ data: { user } }) => {
        setUser(user);
      });
    }
    getUser();
  }, [])

  return (
    <div className="text-primary bg-gray-100 flex flex-col items-center justify-center pt-32 sm:pt-0">
      <div className="w-5/6 sm:w-1/2 flex flex-col items-start">
        <Header text="~linkr" />
        <RetroScreen />
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row space-x-0 sm:space-x-2 w-full items-center pt-4 sm:pt-6">
          <Input placeholder="$ enter url here:" onChange={(e) => setUrl(e.target.value)} />
          {user ?
            <Button
              onClick={() => {
                // post link to db
                postLink({ url, user }).then((res) => {
                  setErrorMessage(res);
                });
              }}
              className="w-full sm:w-1/6">shorten</Button>
            :
            <NotAuthPopup />
          }
        </div>
        <p className="pt-4 font-bold text-sm sm:text-lg">{errorMessage}</p>
      </div>
    </div >
  )
}
