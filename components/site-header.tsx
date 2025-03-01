"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blinkscribe%202-4BjL50PhNL1ViWRLeoEInpzkvSeYeL.png"
            alt="blinkScribe Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} absolute top-16 left-0 right-0 flex-col items-center space-y-4 bg-white p-4 md:relative md:top-0 md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:p-0`}
        >
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">
            About Us
          </Link>
          <Link href="/why-blinkscribe" className="transition-colors hover:text-blue-600">
            Why blinkScribe
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-blue-600">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild className="hidden md:inline-flex font-bold text-lg">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-blue-300 hover:bg-blue-500 rounded-full text-white text-lg font-bold hidden md:inline-flex" asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

