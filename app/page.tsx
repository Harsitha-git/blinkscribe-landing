import { HeroSection } from "@/components/hero-section"
import { FeaturesBenefitsSection } from "@/components/features-benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesBenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

