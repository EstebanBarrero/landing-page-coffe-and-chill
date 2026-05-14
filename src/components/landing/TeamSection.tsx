import { useState } from 'react'
import { motion } from 'framer-motion'
import { TEAM } from '@/data/content'

export function TeamSection() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  return (
    <section id="team" className="section" style={{ padding: 'clamp(64px, 10vw, 100px) clamp(16px, 5vw, 24px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-caramel)', fontWeight: 600, margin: '0 0 12px' }}>
            El equipo
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-espresso)', margin: '0 0 16px', lineHeight: 1.15 }}
          >
            Las personas detrás de{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Coffee & Chill</em>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Construimos el software que nos hubiera gustado tener cuando trabajamos en cafeterías.
          </p>
        </motion.div>

        {/* Team cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
              }}
              className="glass"
              style={{ padding: '36px 32px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* BG blob */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 160, height: 160, borderRadius: '50%', background: member.color, opacity: 0.45, filter: 'blur(50px)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, borderRadius: '50%', background: member.color, opacity: 0.25, filter: 'blur(35px)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Photo / Avatar */}
                <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  {member.photo && !imgErrors[i] ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                      style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${member.color}`, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                    />
                  ) : (
                    <motion.div
                      animate={{ rotate: [0, 1, -1, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: member.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid rgba(255,255,255,0.7)',
                        boxShadow: `0 8px 32px rgba(0,0,0,0.1), 0 0 0 6px ${member.color}44`,
                      }}
                    >
                      <span
                        className="font-display"
                        style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-espresso)', letterSpacing: '-0.02em' }}
                      >
                        {member.initials}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Name & role */}
                <h3
                  className="font-display"
                  style={{ margin: '0 0 6px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-espresso)' }}
                >
                  {member.name}
                </h3>

                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    background: member.color,
                    color: 'var(--color-espresso)',
                    padding: '4px 14px',
                    borderRadius: 100,
                    marginBottom: 16,
                  }}
                >
                  {member.role}
                </span>

                {/* Description */}
                <p
                  style={{
                    margin: '0 0 24px',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.75,
                  }}
                >
                  {member.desc}
                </p>

                {/* Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(155,130,200,0.1)',
                        border: '1px solid rgba(155,130,200,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        color: 'var(--color-text-secondary)',
                      }}
                      title="LinkedIn"
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = member.color
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = 'rgba(155,130,200,0.1)'
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      }}
                    >
                      💼
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(155,130,200,0.1)',
                        border: '1px solid rgba(155,130,200,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        color: 'var(--color-text-secondary)',
                      }}
                      title="GitHub"
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = member.color
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = 'rgba(155,130,200,0.1)'
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      }}
                    >
                      🐙
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
