import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="bg-cream dark:bg-dark">
      {/* Contact content */}
      <div className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              {t.contact.title}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              {t.contact.subtitle}
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Contact info — left side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <a href="tel:+5548996711117" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 dark:text-white/40 uppercase tracking-wider font-medium mb-0.5">Telefone</p>
                  <p className="font-semibold text-dark dark:text-white">{t.contact.phone}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/5548996711117" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 dark:text-white/40 uppercase tracking-wider font-medium mb-0.5">WhatsApp</p>
                  <p className="font-semibold text-dark dark:text-white">{t.contact.whatsapp}</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:mourad@jorelo.com.br" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 dark:text-white/40 uppercase tracking-wider font-medium mb-0.5">E-mail</p>
                  <p className="font-semibold text-dark dark:text-white text-sm">{t.contact.email}</p>
                  <p className="text-dark/50 dark:text-white/40 text-sm">{t.contact.email2}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 dark:text-white/40 uppercase tracking-wider font-medium mb-0.5">Local</p>
                  <p className="font-semibold text-dark dark:text-white">{t.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Contact form — right side */}
            <form
              className="lg:col-span-3 bg-white dark:bg-surface rounded-3xl p-8 sm:p-10 shadow-lg border border-cream-dark/20 dark:border-white/10 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={t.contact.formName}
                  className="w-full px-5 py-3.5 rounded-xl border border-cream-dark dark:border-white/15 bg-cream/30 dark:bg-white/5 text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
                <input
                  type="email"
                  placeholder={t.contact.formEmail}
                  className="w-full px-5 py-3.5 rounded-xl border border-cream-dark dark:border-white/15 bg-cream/30 dark:bg-white/5 text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
              <textarea
                rows={5}
                placeholder={t.contact.formMessage}
                className="w-full px-5 py-3.5 rounded-xl border border-cream-dark dark:border-white/15 bg-cream/30 dark:bg-white/5 text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md cursor-pointer text-lg"
              >
                {t.contact.formSend}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Full-width map */}
      <div className="relative w-full">
        <iframe
          title="Mourad Turismo - Florianópolis"
          src="https://maps.google.com/maps?q=Florianópolis,+SC,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
