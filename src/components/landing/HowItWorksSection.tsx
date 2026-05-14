import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '@/data/content'

export function HowItWorksSection() {
  return (
    <section className="section" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 12px' }}>
            Sin complicaciones
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-espresso)', margin: 0, lineHeight: 1.15 }}
          >
            Funciona desde el{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>primer día</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 24, position: 'relative' }}>
          {/* Connector line (decorative, desktop) */}
          <div style={{ position: 'absolute', top: 60, left: '16.6%', right: '16.6%', height: 1, background: 'linear-gradient(to right, var(--color-blush), var(--color-lavender), var(--color-peach))', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} />

          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.1)`,
                  border: '3px solid rgba(255,255,255,0.6)',
                }}
              >
                <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                  {step.step}
                </span>
              </motion.div>

              <div className="glass-subtle" style={{ padding: '28px 28px 32px', borderRadius: 20, width: '100%' }}>
                <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-espresso)', margin: '0 0 12px', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '15px 36px' }}>
            <span>Empieza hoy — gratis 30 días</span>
            <span>→</span>
          </a>
          <p style={{ marginTop: 14, fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
            Sin tarjeta de crédito · Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  )
}
