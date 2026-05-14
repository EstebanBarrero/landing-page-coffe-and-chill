import type { Transition } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

export const transition = (overrides?: Partial<Transition>): Transition => ({
  duration: 0.7,
  ease: EASE,
  ...overrides,
})
