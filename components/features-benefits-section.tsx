"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Record patient visits with just a few clicks",
    description:
      "Start recording with one tap. BlinkScribe automatically transcribes and formats your conversation into clinical notes.",
  },
  {
    title: "Sync recordings with your documentation",
    description:
      "All your recordings are automatically synced and organized by patient visit, making it easy to review and edit your notes.",
  },
  {
    title: "Available in all 50 states",
    description: "BlinkScribe is HIPAA-compliant and available for healthcare providers across the United States.",
  },
]

export function FeaturesBenefitsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Capture clinical details in minutes with smart technology
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 last:border-none">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full py-4 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                  >
                    <span className="text-lg font-medium">{feature.title}</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${expandedIndex === index ? "rotate-90" : ""}`}
                    />
                  </button>
                  {expandedIndex === index && <div className="pb-4 text-gray-600">{feature.description}</div>}
                </div>
              ))}
            </div>

            <div className="inline-block">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="font-semibold">Why BlinkScribe</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[300px] lg:max-w-none">
            <div className="relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone-HRYORiBKvf3lVXadAaSruRT1iGGPFG.png"
                alt="BlinkScribe mobile app interface"
                width={300}
                height={650}
                className="w-full max-w-[300px] mx-auto"
                priority
              />
            </div>
            <div className="absolute inset-y-1/4 -inset-x-4 bg-blue-100/50 blur-3xl -z-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

