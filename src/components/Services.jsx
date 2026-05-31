import { Plane, MapPin, Hotel, Compass } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLang()

  const services = [
    { icon: MapPin, title: t.services.item1Title, text: t.services.item1Text, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
    { icon: Plane, title: t.services.item2Title, text: t.services.item2Text, image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80' },
    { icon: Hotel, title: t.services.item3Title, text: t.services.item3Text, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80' },
    { icon: Compass, title: t.services.item4Title, text: t.services.item4Text, image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80' },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-dark/60">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-cream-dark/30"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
