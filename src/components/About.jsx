import { Award, Heart, Shield } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()

  const cards = [
    { icon: Award, title: t.about.card1Title, text: t.about.card1Text },
    { icon: Heart, title: t.about.card2Title, text: t.about.card2Text },
    { icon: Shield, title: t.about.card3Title, text: t.about.card3Text },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-dark/60 leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <card.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                {card.title}
              </h3>
              <p className="text-dark/60 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
