import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const STATS = [
  { value: '6',    label: 'Módulos integrados' },
  { value: '100%', label: 'En la nube' },
  { value: '24h',  label: 'Para empezar' },
  { value: '0',    label: 'Instalaciones' },
]

export function HeroSection() {
  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 15vw, 120px) clamp(16px, 5vw, 24px) clamp(60px, 10vw, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs — hidden on mobile to avoid overflow */}
      <div className="blob" style={{ width: 500, height: 500, background: 'var(--color-blush)', top: '5%', left: '-12%' }} />
      <div className="blob" style={{ width: 400, height: 400, background: 'var(--color-lavender)', bottom: '10%', right: '-8%' }} />
      <div className="blob" style={{ width: 280, height: 280, background: 'var(--color-peach)', top: '45%', right: '18%' }} />

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 680, height: 680, border: '1px dashed rgba(155,130,200,0.18)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 900, height: 900, border: '1px dashed rgba(249,213,200,0.15)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ maxWidth: 820, width: '100%', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <motion.div variants={item} style={{ marginBottom: 28 }}>
          <div
            className="glass-subtle hero-badge"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 4, padding: '8px 16px', maxWidth: '90vw' }}
          >
            <span style={{ fontSize: 'clamp(0.65rem, 2vw, 0.78rem)', fontWeight: 600, color: 'var(--color-caramel)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.5 }}>
              Cafeterías · Gastrobares · Restaurantes Chill · Colombia
            </span>
          </div>
        </motion.div>

        {/* Headline — single h1 for SEO */}
        <motion.h1
          variants={item}
          className="font-display"
          style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', margin: '0 0 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1em' }}
        >
          <span style={{ color: 'var(--color-espresso)' }}>El café colombiano,</span>
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>sin el caos.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 44px', fontWeight: 400 }}
        >
          El sistema de gestión para cafeterías, gastrobares y restaurantes chill de Colombia.
          Diseñado en Tunja para los negocios de Bogotá, Medellín, Bucaramanga y toda la región.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
        >
          <a href="#contact" className="btn-primary" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', padding: '14px 28px' }}>
            <span>Empezar gratis 30 días</span>
            <span>→</span>
          </a>
          <a href="#features" className="btn-ghost" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', padding: '14px 28px' }}>
            <span>Ver cómo funciona</span>
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={item}
          className="glass stats-bar"
          style={{ display: 'inline-flex', gap: 0, borderRadius: 20, overflow: 'hidden', flexWrap: 'wrap', width: '100%', maxWidth: 560, justifyContent: 'center' }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: 'clamp(14px, 3vw, 20px) clamp(16px, 4vw, 32px)',
                textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.4)' : 'none',
                minWidth: 'clamp(80px, 22vw, 110px)',
                flex: '1 1 auto',
              }}
            >
              <p className="font-display" style={{ margin: '0 0 4px', fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 700, color: 'var(--color-espresso)', letterSpacing: '-0.02em' }}>
                {s.value}
              </p>
              <p style={{ margin: 0, fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1.5, height: 36, background: 'linear-gradient(to bottom, var(--color-caramel), transparent)', borderRadius: 2 }}
        />
      </motion.div>
    </section>
  )
}
