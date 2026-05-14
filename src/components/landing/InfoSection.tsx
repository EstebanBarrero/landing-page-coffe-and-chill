import { motion } from 'framer-motion'

export function InfoSection() {
  return (
    <section id="contact" className="section" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Demo CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="glass-dark"
          style={{ padding: '64px 56px', borderRadius: 32, textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 24 }}
        >
          <div className="blob" style={{ width: 300, height: 300, background: 'var(--color-lavender)', top: -100, left: -80, opacity: 0.15 }} />
          <div className="blob" style={{ width: 250, height: 250, background: 'var(--color-caramel)', bottom: -80, right: -60, opacity: 0.15 }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 16px' }}>
              ¿Lista tu cafetería, gastrobar o restaurante?
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--color-cream)', margin: '0 0 16px', lineHeight: 1.1 }}
            >
              Empieza hoy,{' '}
              <em style={{ color: 'var(--color-caramel)', fontStyle: 'italic' }}>gratis por 30 días</em>
            </h2>
            <p style={{ color: 'rgba(255,248,240,0.65)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Sin tarjeta de crédito. Sin contrato. Onboarding incluido.
              En 24 horas tu equipo ya está usando Coffee & Chill.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <a href="mailto:coffeeandchillsas@gmail.com" className="btn-primary" style={{ background: 'var(--color-caramel)', fontSize: '0.95rem', padding: '16px 36px' }}>
                <span>Crear cuenta gratis</span>
                <span>→</span>
              </a>
              <a
                href="mailto:coffeeandchillsas@gmail.com"
                className="btn-ghost"
                style={{ borderColor: 'rgba(255,248,240,0.25)', color: 'var(--color-cream)', fontSize: '0.95rem', padding: '16px 36px' }}
              >
                Pedir demo
              </a>
            </div>

            <p style={{ color: 'rgba(255,248,240,0.35)', fontSize: '0.78rem' }}>
              ¿Tienes dudas? Escríbenos a{' '}
              <a href="mailto:coffeeandchillsas@gmail.com" style={{ color: 'var(--color-caramel)', textDecoration: 'none' }}>
              coffeeandchillsas@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
