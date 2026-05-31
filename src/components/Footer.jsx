import { MapPin } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-dark text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-bold text-white">MOURAD TURISMO</p>
            <p className="text-sm mt-1 flex items-center gap-1.5">
              <MapPin size={12} />
              {t.footer.location}
            </p>
          </div>
          <p className="text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
