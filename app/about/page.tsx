import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Zap, Brain, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const values = [
  {
    icon: Users,
    title: "Empowering Healthcare Workers",
    description: "We support nurses and frontline staff with cutting-edge AI technology.",
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    description: "Our solutions prioritize patient outcomes and experiences.",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "We continuously push the boundaries of what's possible in healthcare AI.",
  },
  {
    icon: Brain,
    title: "Ethical AI Development",
    description: "We're committed to responsible and transparent AI practices.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-24">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-center">About BrainyMed</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Revolutionizing healthcare access through AI-powered solutions for rural and semi-urban communities.
          </p>
        </section>

        <section className="mb-16">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="mb-4">
                  At BrainyMed, we recognize the critical shortage of primary care providers in rural and semi-urban
                  communities. Millions of patients struggle to access timely medical care due to geographic and
                  resource constraints.
                </p>
                <p className="mb-4">
                  Our vision is to bridge this gap by developing the AI Doctor—an intelligent, adaptive model designed
                  to empower nurses and frontline healthcare workers to triage and diagnose patients efficiently when
                  higher-level providers are unavailable or difficult to reach.
                </p>
                <Button className="mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare professionals using blinkScribe AI"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button type="submit">Send Message</Button>
              </form>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  <span>info@brainymed.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span>123 AI Boulevard, Tech City, TC 12345</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <Card className="bg-blue-50 p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Join Us in Revolutionizing Healthcare</h2>
            <p className="text-xl mb-6">
              Be part of our mission to bring quality healthcare to every corner of the world.
            </p>
            <Button size="lg">
              Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </section>
      </main>
    </div>
  )
}

