import { LineChart, Shield, Laptop2, Users2 } from "lucide-react"

const benefits = [
  {
    icon: LineChart,
    title: "The Most Accurate AI Scribe Ever",
    description:
      "Industry-leading accuracy at your fingertips. A complete, comprehensive record without the need for do-overs.",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Precision",
    description:
      "With over 20 years in healthcare, we understand the domain as well as we do the tech. Compliance at every step.",
  },
  {
    icon: Laptop2,
    title: "Seamless EHR integration",
    description:
      "blinkScribe is designed to be a natural part of your workflow. You don't miss a beat with seamless integration with EHRs.",
  },
  {
    icon: Users2,
    title: "Your Documentation, Your Way",
    description:
      "When you have your own template for patient care, why settle for someone else's for documentation? Do it your way, all the way.",
  },
]

export function BenefitsSection() {
  return (
    <section className="container py-24" id="benefits">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Benefits</h2>
        <p className="text-gray-600 text-lg">Your focus is precious. It belongs with patients, not paperwork</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-blue-50 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-6 shadow-sm">
              <benefit.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-semibold mb-4 text-lg">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

