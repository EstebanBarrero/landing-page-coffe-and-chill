import { motion } from 'framer-motion'

const DASHBOARD_ITEMS = [
  { label: 'Ingresos hoy', value: '$284.500', change: '+18%', color: 'var(--color-sage)', positive: true },
  { label: 'Pedidos activos', value: '12', change: 'en tiempo real', color: 'var(--color-peach)', positive: true },
  { label: 'Producto top', value: 'Flat White', change: '34 vendidos', color: 'var(--color-lavender)', positive: true },
  { label: 'Stock crítico', value: 'Leche oat', change: '⚠ Reponer pronto', color: 'var(--color-blush)', positive: false },
]

const ORDER_COLS = [
  { title: 'Pendiente', color: 'var(--color-blush)', orders: ['Mesa 3 · Flat White', 'Mesa 7 · Matcha'], count: 2 },
  { title: 'Preparando', color: 'var(--color-peach)', orders: ['Mesa 1 · Cold Brew', 'Barra · Croissant'], count: 2 },
  { title: 'Listo', color: 'var(--color-sage)', orders: ['Mesa 5 · Lavender Latte'], count: 1 },
]

export function AtmosphereSection() {
  return (
    <section id="dashboard" className="section" aria-label="Vista previa del panel" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 12px' }}>
            Vista previa del panel · Datos de ejemplo
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-espresso)', margin: 0, lineHeight: 1.15 }}
          >
            Tu negocio,{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>siempre bajo control</em>
          </h2>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="glass"
          style={{ padding: 28, marginBottom: 20, position: 'relative', overflow: 'hidden' }}
        >
          <div className="blob" style={{ width: 250, height: 250, background: 'var(--color-lavender)', top: -80, right: -80 }} />

          {/* Nav bar mockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 16, position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: 16 }}>☕</span>
            <span className="font-display" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-espresso)' }}>Tu Cafetería</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              {['Dashboard', 'Pedidos', 'Inventario', 'Talleres', 'Analíticas'].map((t) => (
                <span key={t} style={{ fontSize: '0.72rem', padding: '5px 12px', borderRadius: 100, background: t === 'Dashboard' ? 'var(--color-espresso)' : 'transparent', color: t === 'Dashboard' ? 'var(--color-cream)' : 'var(--color-text-secondary)', fontWeight: t === 'Dashboard' ? 600 : 400, cursor: 'pointer', display: window.innerWidth < 600 ? 'none' : undefined }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 20, position: 'relative', zIndex: 1 }}>
            {DASHBOARD_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                style={{ padding: '16px 18px', borderRadius: 16, background: `${item.color}55`, border: `1px solid ${item.color}99` }}
              >
                <p style={{ margin: '0 0 4px', fontSize: '0.72rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {item.label}
                </p>
                <p className="font-display" style={{ margin: '0 0 4px', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-espresso)' }}>
                  {item.value}
                </p>
                <p style={{ margin: 0, fontSize: '0.72rem', color: item.positive ? '#4a9e5c' : '#d06040', fontWeight: 600 }}>
                  {item.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Kanban pedidos */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ margin: '0 0 12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-espresso)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Pedidos en vivo
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {ORDER_COLS.map((col) => (
                <div key={col.title} style={{ borderRadius: 14, padding: '12px', background: `${col.color}44`, border: `1px solid ${col.color}88` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-espresso)' }}>{col.title}</span>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: col.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-espresso)' }}>{col.count}</span>
                  </div>
                  {col.orders.map((o) => (
                    <div key={o} style={{ padding: '8px 10px', background: 'rgba(255,252,248,0.7)', borderRadius: 8, marginBottom: 6, fontSize: '0.75rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                      {o}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom features row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
          {[
            { emoji: '📱', text: 'Acceso desde cualquier dispositivo' },
            { emoji: '🔒', text: 'Datos seguros con cifrado SSL' },
            { emoji: '🔄', text: 'Actualizaciones automáticas' },
            { emoji: '🌐', text: '100% en la nube · Sin instalaciones' },
          ].map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-subtle"
              style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <span style={{ fontSize: 20 }}>{f.emoji}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.4 }}>{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
