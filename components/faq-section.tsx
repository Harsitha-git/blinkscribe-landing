"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is BlinkScribe?",
    answer:
      "BlinkScribe is an AI-powered medical transcription tool that automatically generates notes from patient conversations, helping healthcare providers save time and improve documentation accuracy.",
  },
  {
    question: "How does BlinkScribe work?",
    answer:
      "BlinkScribe uses advanced speech recognition and natural language processing to listen to patient-doctor conversations and automatically generate detailed, accurate medical notes in real-time.",
  },
  {
    question: "Is BlinkScribe HIPAA compliant?",
    answer:
      "Yes, BlinkScribe is fully HIPAA compliant. We take data security and patient privacy very seriously, implementing industry-standard encryption and security measures to protect all sensitive information.",
  },
  {
    question: "Can BlinkScribe integrate with my existing EMR system?",
    answer:
      "Yes, BlinkScribe offers EMR integration with our Pro and Enterprise plans. This allows for seamless incorporation of generated notes into your existing electronic medical record system.",
  },
  {
    question: "What languages does BlinkScribe support?",
    answer:
      "BlinkScribe supports over 30 languages, making it versatile for diverse healthcare settings and patient populations.",
  },
  {
    question: "How accurate is BlinkScribe's transcription?",
    answer:
      "BlinkScribe boasts industry-leading accuracy. Our AI is continuously trained on medical terminology and context, resulting in highly accurate transcriptions and note generation.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free Basic plan that includes 50 visit minutes. This allows you to experience BlinkScribe's capabilities before committing to a paid plan.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full text-left py-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 hover:text-blue-600"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pb-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



