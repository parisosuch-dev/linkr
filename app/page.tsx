import Input from "@/components/Input"

export default function Home() {
  return (
    <div className="text-black min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="font-black text-9xl">linkr</h1>
        <div className="flex flex-col font-medium text-5xl border-4 rounded-sm border-black">
          <p>./create tiny urls.</p>
          <p>./keep them forever.</p>
          <p>./thats it.</p>
        </div>
      </div>
    </div>
  )
}
