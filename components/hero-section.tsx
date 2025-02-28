import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container pt-16 pb-32 md:pt-24 md:pb-40 lg:pt-32 lg:pb-48">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-blue-600">blinkScribe</span> captures every clinical detail during weekday visits,
                so your Saturday stays yours.
              </h1>
            </div>
            <div className="relative mx-auto w-full max-w-3xl lg:mx-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroimg-xCenl8K0RBQxBbtgxQrRKat25i3XC0.png"
                alt="BlinkScribe App Interface on Multiple Devices"
                width={800}
                height={600}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 mt-8 md:mt-12 lg:mt-16 text-center">
        <div className="space-y-4">
          <p className="text-lg font-medium">Download blinkScribe Today</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://apps.apple.com/app/blinkscribe" className="transition-transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Link%20%E2%86%92%20apple_store_btn.png-iDgSzHY8Pbsp4SeJnvKOorLiQIDS6M.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-[45px] w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.blinkscribe"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Link%20%E2%86%92%20google_playstore_btn.png-bvZAAiszPQbSdSMShgU88jTMFx02UQ.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-[45px] w-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

