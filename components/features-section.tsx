import { Smartphone, Clock, Shield, Users, FolderOpen } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Access your notes anywhere",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Focus more on patient care",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "HIPAA compliant protection",
  },
  {
    icon: Users,
    title: "User Friendly",
    description: "Intuitive interface",
  },
  {
    icon: FolderOpen,
    title: "Stay Organized",
    description: "All your notes in one place",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

