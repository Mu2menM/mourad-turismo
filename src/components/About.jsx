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
    <section id="about" className="py-20 sm:py-28 bg-cream dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            {t.about.title}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
            MOURAD TURISMO
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-dark/60 dark:text-white/60 leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-surface rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-cream-dark/20 dark:border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-md">
                <card.icon size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-dark dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-dark/60 dark:text-white/60 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
