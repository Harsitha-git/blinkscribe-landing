import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "BASIC",
    price: "Free",
    features: [
      "50 Free Visit Minutes",
      "Fully HIPAA Compliant",
      "Real-time Transcription",
      "Dictation Transcription",
      "Automated Chart Note Generation",
      "Context-Aware AI",
      "Supports 30+ languages",
      "30-Day Document Archive",
    ],
  },
  {
    name: "PLUS",
    price: "$59.99",
    interval: "/month",
    features: [
      "All BlinkScribe BASIC Features",
      "Unlimited Visits",
      "Document Archive",
      "Custom Templates",
      "White Labeling",
    ],
  },
  {
    name: "PRO",
    price: "$199.99",
    interval: "/month",
    features: ["All BlinkScribe PLUS Features", "EMR Integration", "24/7 Customer Support"],
  },
  {
    name: "Enterprise",
    price: "Request a Quote",
    features: [
      "BlinkScribe PRO",
      "EHR",
      "Patient Scheduler",
      "ACO Goal Tracking",
      "Encrypted Messaging",
      "ZDocsConnect - Multi-EMR Interface",
      "Code Complete",
      "Native App for Patients (iOS and Android)",
      "Practice Analytics Dashboard",
      "Clinical Order/Decision Support",
      "Team Collaboration Tools",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="container py-24" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.interval && <span className="text-muted-foreground">{plan.interval}</span>}
              </div>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.name === "PRO" ? "default" : "outline"}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

