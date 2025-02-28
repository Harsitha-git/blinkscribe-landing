import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src='/blinkscribe.png'
            alt="BlinkScribe Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="#about-us" className="transition-colors hover:text-blue-600">
            About Us
          </Link>
          <Link href="#why-blinkscribe" className="transition-colors hover:text-blue-600">
            Why blinkScribe
          </Link>
          <Link href="#faq" className="transition-colors hover:text-blue-600">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-blue-400 font-white hover:bg-blue-700 rounded-lg" asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

