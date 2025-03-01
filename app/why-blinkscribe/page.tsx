import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Globe, Zap, Laptop, Brain, FileText, Stethoscope, Clock, Shield } from "lucide-react"

export default function WhyBlinkScribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container py-16 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Why Choose blinkScribe?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing medical documentation with AI-powered technology for efficient, accurate, and seamless
            healthcare experiences.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-blue-800">Seamless EHR Integration</h2>
              <p className="text-lg mb-6 text-gray-700">
                blinkScribe effortlessly integrates with leading EHR systems, ensuring a smooth and efficient
                documentation process.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time data access to patient information",
                  "Instant note syncing with Athena",
                  "Customizable templates for all specialties",
                  "Rapid onboarding with risk-free 30-day trial",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="EHR Integration Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">Cutting-Edge AI & Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Large Language Models",
                description: "Advanced AI models for natural language understanding and generation",
              },
              {
                icon: Stethoscope,
                title: "Medical NLP",
                description: "Specialized natural language processing for healthcare terminology",
              },
              {
                icon: Brain,
                title: "Adaptive Learning",
                description: "Continuous improvement through each interaction",
              },
              {
                icon: Clock,
                title: "Real-Time Processing",
                description: "Instant analysis and transcription of medical conversations",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-500 mb-2" />
                  <CardTitle className="text-xl font-semibold text-blue-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-6">Effortless Usability</h2>
            <p className="text-xl mb-8">
              blinkScribe is designed for intuitive use, accessibility, and efficiency, ensuring a seamless experience
              for physicians.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Multilingual Support", description: "28+ languages for global accessibility" },
                { icon: Zap, title: "Customizable Templates", description: "Tailor documentation to your specialty" },
                { icon: Laptop, title: "Streamlined Dashboard", description: "Effortless appointment management" },
                { icon: Shield, title: "HIPAA Compliant", description: "Ensuring data security and privacy" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="h-8 w-8 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Join thousands of healthcare professionals who have revolutionized their documentation process with
            blinkScribe.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full">
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>
    </div>
  )
}

