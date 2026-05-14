import { motion } from 'framer-motion'
import { FEATURES } from '@/data/content'

export function FeaturesSection() {
  return (
    <section id="features" className="section" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: 'rgba(250,243,232,0.35)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 12px' }}>
            Todo lo que necesitas
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-espresso)', margin: '0 0 16px', lineHeight: 1.15 }}
          >
            Hecho para cafeterías —{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>y gastrobares</em>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            No es un software genérico. Nació en una cafetería de Tunja y hoy sirve también a gastrobares y restaurantes chill que comparten la misma filosofía: experiencia primero.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: 20 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
              className="glass"
              style={{ padding: 32, position: 'relative', overflow: 'hidden' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div style={{ position: 'absolute', top: -30, right: -30, width: 110, height: 110, borderRadius: '50%', background: feature.color, opacity: 0.5, filter: 'blur(35px)' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Stat badge */}
                <div style={{ display: 'inline-flex', marginBottom: 16 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-espresso)', background: feature.color, padding: '4px 12px', borderRadius: 100, letterSpacing: '0.04em' }}>
                    {feature.stat}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: feature.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.07)' }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-espresso)', margin: 0, lineHeight: 1.3 }}>
                    {feature.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
