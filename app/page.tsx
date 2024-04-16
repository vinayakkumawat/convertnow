import Droparea from "@/components/Droparea"

export default function Home() {
  return (
    <div className="space-y-16 pb-8">

      {/* Title & Description */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Free Unlimited File <span className="underline decoration-primary">Converter</span></h1>
        <p className="text-foreground/60 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">Looking for a reliable file format converter? ConvertNow is your go-to solution. Convert images, videos, and audio files effortlessly, and it won't cost you a thing. Say goodbye to file compatibility issues. ConvertNow is your one-stop destination for file format conversion.</p>
      </div>

      {/* Dropbox Area */}
      <Droparea />
    </div>
  )
}
