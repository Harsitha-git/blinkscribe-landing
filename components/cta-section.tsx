import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
          Sign up for a free account first. No contract or credit card required.
        </p>
        <Button size="lg" className="mt-8">
          Get Started
        </Button>
      </div>
    </section>
  )
}

