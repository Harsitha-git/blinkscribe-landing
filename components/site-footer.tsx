import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-center space-y-4">
        <Image src="/brainmed-logo.svg" alt="BrainyMed Logo" width={120} height={30} className="h-8 w-auto" />
        <p className="text-sm text-muted-foreground">© BrainyMed. All rights reserved.</p>
      </div>
    </footer>
  )
}

