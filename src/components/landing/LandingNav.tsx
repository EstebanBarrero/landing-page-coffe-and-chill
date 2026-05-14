import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/data/content'

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <motion.nav
        aria-label="Navegación principal"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: scrolled ? '12px 24px' : '20px 24px', transition: 'padding 0.3s ease' }}
      >
        <div
          className={scrolled ? 'glass' : 'glass-subtle'}
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
            borderRadius: 100,
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.jpeg" alt="Coffee & Chill" style={{ width: 36, height: 36, borderRadius: 10, objectFit: 'cover' }} />
            <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-espresso)', letterSpacing: '-0.02em' }}>
              Coffee<span style={{ color: 'var(--color-accent)' }}>&</span>Chill
            </span>
          </a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: 100,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.background = 'rgba(155, 130, 200, 0.12)'
                    ;(e.target as HTMLElement).style.color = 'var(--color-text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.background = 'transparent'
                    ;(e.target as HTMLElement).style.color = 'var(--color-text-secondary)'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
              Empezar gratis 30 días
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
              className="show-mobile"
              aria-label="Menú"
            >
              <div style={{ width: 22, height: 2, background: 'var(--color-espresso)', marginBottom: 5, borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <div style={{ width: 22, height: 2, background: 'var(--color-espresso)', marginBottom: 5, borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: 22, height: 2, background: 'var(--color-espresso)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{ position: 'fixed', top: 90, left: 16, right: 16, zIndex: 49, padding: 24, borderRadius: 24 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 0', color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.3)' }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
              Empezar gratis 30 días
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
