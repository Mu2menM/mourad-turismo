import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-dark/60">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-dark">{t.contact.phone}</p>
                <a
                  href="https://wa.me/5548996711117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-800 mt-1"
                >
                  <MessageCircle size={14} />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-dark">{t.contact.email}</p>
                <p className="text-sm text-dark/60 mt-0.5">{t.contact.email2}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-dark">{t.contact.location}</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5548996711117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:scale-105 shadow-md mt-4"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <form
            className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark/30 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder={t.contact.formName}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.contact.formEmail}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder={t.contact.formMessage}
                className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-md cursor-pointer"
            >
              {t.contact.formSend}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
