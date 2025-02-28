import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "BlinkScribe has revolutionized our practice. The time saved on documentation allows us to focus more on patient care. It's an indispensable tool for modern healthcare.",
    author: "Dr. Lee",
    role: "Healthcare Professional",
  },
  {
    quote:
      "The accuracy of BlinkScribe's AI transcription is impressive. It understands medical terminology and context, significantly reducing errors in our documentation.",
    author: "Dr. Madhu",
    role: "Healthcare Professional",
  },
  {
    quote:
      "Good morning. The Blink is fantastic and so much better than any other AI based transcription. We still haven't figured out how to transfer the transcribed document from our iPhone to a desktop created note. But that is because we are technically inept:)",
    author: "Dr. Dar",
    role: "Healthcare Professional",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24" id="testimonials">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 left-4 text-blue-100 w-8 h-8" />
                <blockquote className="space-y-4">
                  <p className="text-gray-700 leading-relaxed relative z-10">"{testimonial.quote}"</p>
                  <footer className="mt-6">
                    <div className="text-blue-600 font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

