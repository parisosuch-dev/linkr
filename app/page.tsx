import Header from "@/components/ui/header"
import RetroScreen from "@/components/retroscreen"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useState } from "react"

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="text-primary bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="sm:w-1/2 flex flex-col items-start">
        <Header text="~linkr" />
        <RetroScreen />
        <div className="flex flex-row space-x-2 w-full items-center pt-4 sm:pt-6">
          <Input placeholder="$ enter url here:" />
          <Button>shorten</Button>
        </div>
      </div>
    </div >
  )
}
