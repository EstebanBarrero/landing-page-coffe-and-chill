import { motion } from 'framer-motion'
import { SOCIAL_LINKS, FOOTER_LINKS } from '@/data/content'

export function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="section" style={{ padding: 'clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px) 40px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr repeat(3, 1fr)', gap: 48, marginBottom: 56 }}
        >
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src="/logo.jpeg" alt="Coffee & Chill" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
              <span className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-espresso)', letterSpacing: '-0.02em' }}>
                Coffee<span style={{ color: 'var(--color-accent)' }}>&</span>Chill
              </span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.86rem', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 220 }}>
              El software de gestión para cafeterías y restaurantes chill de Latinoamérica.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(155,130,200,0.1)', border: '1px solid rgba(155,130,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, textDecoration: 'none', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'var(--color-accent)'; ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'rgba(155,130,200,0.1)'; ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', fontWeight: 600, margin: '0 0 18px' }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.86rem', fontWeight: 500, transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-secondary)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(61,44,44,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
            © {year} Coffee & Chill. Hecho con en Colombia.
          </p>
        </div>
      </div>
    </footer>
  )
}
