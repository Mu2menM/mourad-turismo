import { MapPin, Phone, Mail } from 'lucide-react'

function InstagramIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
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
            <a href="https://www.instagram.com/mourad.turismo/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 hover:text-white transition-colors">
              <InstagramIcon size={13} />
              @mourad.turismo
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
