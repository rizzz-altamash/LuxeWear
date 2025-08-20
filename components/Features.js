// app/components/Features.js
import { RotateCcw, Globe, Users } from 'lucide-react'

const features = [
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "and Refunds",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-700"
  },
  {
    icon: Globe,
    title: "Global Fashion",
    subtitle: "Made in India",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-700"
  },
  {
    icon: Users,
    title: "Trusted by",
    subtitle: "50 Lakh+ Customers",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-700"
  }
]

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className={`${feature.bgColor} rounded-2xl p-8 mx-auto mb-4 max-w-sm hover:shadow-lg transition-all duration-300`}>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      <IconComponent size={32} className={feature.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-700 font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}