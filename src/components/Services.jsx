import { Plane, MapPin, Hotel, Compass } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import toursImg from '../assets/images/tours.jpg'
import flightsImg from '../assets/images/flights.jpg'
import hotelImg from '../assets/images/hotel.jpg'
import consultingImg from '../assets/images/consulting.jpg'

export default function Services() {
  const { t } = useLang()

  const services = [
    { icon: MapPin, title: t.services.item1Title, text: t.services.item1Text, image: toursImg },
    { icon: Plane, title: t.services.item2Title, text: t.services.item2Text, image: flightsImg },
    { icon: Hotel, title: t.services.item3Title, text: t.services.item3Text, image: hotelImg },
    { icon: Compass, title: t.services.item4Title, text: t.services.item4Text, image: consultingImg },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            {t.services.title}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.subtitle}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 bg-gold/90 rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon size={20} className="text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/10 border-t-0 rounded-b-3xl">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
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
