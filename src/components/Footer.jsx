import { MapPin, Phone, Mail } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-dark dark:bg-surface border-t border-white/10 text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold text-white mb-2">MOURAD TURISMO</p>
            <p className="text-sm flex items-center gap-1.5">
              <MapPin size={13} />
              {t.footer.location}
            </p>
          </div>

          {/* Quick contact */}
          <div className="space-y-2">
            <a href="tel:+5548996711117" className="text-sm flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={13} />
              {t.contact.phone}
            </a>
            <a href="mailto:mourad@jorelo.com.br" className="text-sm flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={13} />
              {t.contact.email}
            </a>
          </div>

          {/* Copyright */}
          <div className="sm:text-right">
            <p className="text-sm">{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
