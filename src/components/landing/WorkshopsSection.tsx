import { motion } from 'framer-motion'
import { WORKSHOP_FEATURES } from '@/data/content'

export function WorkshopsSection() {
  return (
    <section id="workshops" className="section" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(32px, 6vw, 64px)', alignItems: 'center' }}>
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 12px' }}>
              Módulo de Talleres
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--color-espresso)', margin: '0 0 16px', lineHeight: 1.15 }}
            >
              Convierte tu cafetería en un{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>espacio de experiencias</em>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 36px' }}>
              Los talleres son la forma más poderosa de fidelizar clientes y generar ingresos adicionales.
              Con Coffee & Chill los gestionas en minutos, no en horas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {WORKSHOP_FEATURES.map((f) => (
                <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                    {f.emoji}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                      {f.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ position: 'relative', paddingBottom: 52 }}
          >
            {/* Mockup card — upcoming workshops UI */}
            <div className="glass" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div className="blob" style={{ width: 180, height: 180, background: 'var(--color-lavender)', top: -40, right: -40 }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h4 className="font-display" style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                    Próximos Talleres
                  </h4>
                  <span style={{ fontSize: '0.72rem', background: 'var(--color-sage)', padding: '4px 12px', borderRadius: 100, fontWeight: 600, color: 'var(--color-espresso)' }}>
                    3 activos
                  </span>
                </div>

                {/* Fake workshop rows */}
                {[
                  { name: 'Latte Art', date: '24 Mayo', spots: 4, color: 'var(--color-peach)', emoji: '☕' },
                  { name: 'Acuarela & Café', date: '31 Mayo', spots: 6, color: 'var(--color-lavender)', emoji: '🎨' },
                  { name: 'Escultura en Arcilla', date: '7 Jun', spots: 3, color: 'var(--color-sage)', emoji: '🏺' },
                ].map((w, i) => (
                  <motion.div
                    key={w.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.4)' : 'none' }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: w.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                      {w.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 2px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-espresso)' }}>{w.name}</p>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{w.date} · {w.spots} cupos</p>
                    </div>
                    <button style={{ background: 'var(--color-espresso)', color: 'var(--color-cream)', border: 'none', borderRadius: 100, padding: '6px 14px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}>
                      Editar
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass"
              style={{ position: 'absolute', bottom: -22, left: -16, padding: '14px 20px', borderRadius: 16, zIndex: 2 }}
            >
              <p style={{ margin: '0 0 2px', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-espresso)', fontFamily: 'var(--font-display)' }}>+30%</p>
              <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>ingresos con talleres</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
