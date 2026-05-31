import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Header() {
  const { lang, t, toggleLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="font-heading text-xl sm:text-2xl font-bold text-accent tracking-tight">
            MOURAD TURISMO
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-medium text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent hover:text-white transition-all cursor-pointer"
            >
              <Globe size={14} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-medium text-accent border border-accent/30 rounded-full px-2.5 py-1 cursor-pointer"
            >
              <Globe size={12} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-dark cursor-pointer">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream/95 backdrop-blur-md border-t border-cream-dark/50 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-dark/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
