import {
  QrCode, Zap, Package, Users, Palette, BarChart3,
  PenLine, Smartphone, CheckCircle2,
  Camera, Briefcase, MessageCircle,
  type LucideIcon,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Funciones', href: '#features' },
  { label: 'Talleres', href: '#workshops' },
  { label: 'Nosotros', href: '#team' },
  { label: 'Contacto', href: '#contact' },
]

export const TEAM = [
  {
    name: 'David Esteban Puente Barrero',
    role: 'Frontend Developer & QA',
    desc: 'David es un desarrollador web y mobile con más de 3 años de experiencia en el desarrollo de software.',
    photo: '',
    initials: 'DP',
    color: 'var(--color-blush)',
  },
  {
    name: 'Laura Vanessa Figueredo Martinez',
    role: 'Product Manager & Backend Developer',
    desc: 'Laura es una product manager y desarrolladora backend con más de 2 años de experiencia en el desarrollo de software.',
    photo: '',
    initials: 'LF',
    color: 'var(--color-lavender)',
  },
  {
    name: 'Cristian Andrés Basto Largo',
    role: 'Product Owner & Business Analyst',
    desc: 'Cristian es un product owner y business analyst con más de 2 años de experiencia en el desarrollo de software.',
    photo: '',
    initials: 'CB',
    color: 'var(--color-peach)',
  },
]

export interface Feature {
  Icon: LucideIcon
  title: string
  desc: string
  color: string
  stat: string
}

export const FEATURES: Feature[] = [
  {
    Icon: QrCode,
    title: 'Menú Digital en Vivo',
    desc: 'Tus clientes escanean un QR y piden desde la mesa. Ideal para el ritmo de cualquier café colombiano — sin impresiones, sin errores, sin demoras.',
    color: 'var(--color-peach)',
    stat: '3× más rápido',
  },
  {
    Icon: Zap,
    title: 'Pedidos en Tiempo Real',
    desc: 'Cada pedido llega al instante a cocina. Kanban visual para cafeterías, gastrobares y restaurantes: tu equipo sabe qué preparar, cuándo y para quién.',
    color: 'var(--color-lavender)',
    stat: '0 pedidos perdidos',
  },
  {
    Icon: Package,
    title: 'Inventario Inteligente',
    desc: 'Control de stock por ingrediente con alertas de quiebre. Perfecto para manejar los costos en ciudades como Medellín o Bucaramanga donde el margen importa.',
    color: 'var(--color-sage)',
    stat: '-40% merma',
  },
  {
    Icon: Users,
    title: 'Gestión de Equipo',
    desc: 'Roles diferenciados para admins y baristas. Pensado para el equipo real de un café colombiano — desde el dueño hasta el cajero.',
    color: 'var(--color-sky)',
    stat: 'Roles ADMIN / BARISTA',
  },
  {
    Icon: Palette,
    title: 'Talleres & Eventos',
    desc: 'Crea talleres de latte art, cata de café y más. Activa una nueva fuente de ingresos y fideliza clientes en tu ciudad.',
    color: 'var(--color-blush)',
    stat: '+30% ingresos',
  },
  {
    Icon: BarChart3,
    title: 'Analíticas & Reportes',
    desc: 'Dashboard en tiempo real: productos más vendidos, horarios pico e ingresos diarios. Toma decisiones con datos reales de tu negocio.',
    color: 'var(--color-peach)',
    stat: 'Decisiones con datos',
  },
]

export interface WorkshopFeature {
  Icon: LucideIcon
  title: string
  desc: string
  color: string
}

export const WORKSHOP_FEATURES: WorkshopFeature[] = [
  {
    Icon: PenLine,
    title: 'Crea talleres con cupos',
    desc: 'Define nombre, fecha, capacidad y precio. El sistema gestiona inscripciones — tú solo disfruta el evento.',
    color: 'var(--color-lavender)',
  },
  {
    Icon: Smartphone,
    title: 'Reservas desde el celular',
    desc: 'Tus clientes en Tunja, Bogotá o Bucaramanga ven los talleres y reservan en segundos. Sin llamadas, sin WhatsApp manual.',
    color: 'var(--color-peach)',
  },
  {
    Icon: CheckCircle2,
    title: 'Control de asistencia',
    desc: 'Registro de inscritos, confirmados y presentes — sin planillas de Excel ni cuadernos.',
    color: 'var(--color-sage)',
  },
]

export interface SocialLink {
  label: string
  href: string
  Icon: LucideIcon
}

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Acceso en 24 horas',
    desc: 'Registra tu café, gastrobar o restaurante, sube tu menú y configura tu equipo. Sin instalar nada, sin técnicos — funciona desde cualquier dispositivo en Colombia.',
    color: 'var(--color-blush)',
  },
  {
    step: '02',
    title: 'Tu equipo toma el control',
    desc: 'Tus baristas gestionan pedidos, cocina los ve en tiempo real y tus clientes piden por QR desde la mesa. Todo conectado, todo simple.',
    color: 'var(--color-lavender)',
  },
  {
    step: '03',
    title: 'Tú creces con datos',
    desc: 'Métricas del día, semana y mes. Sabe cuál producto vende más en tu ciudad, cuándo llega el pico y cómo reducir costos.',
    color: 'var(--color-peach)',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#', Icon: Camera        },
  { label: 'LinkedIn',  href: '#', Icon: Briefcase     },
  { label: 'WhatsApp',  href: '#', Icon: MessageCircle },
]

export const FOOTER_LINKS = {
  Producto: ['Funciones', 'Talleres', 'Nosotros', 'Contacto'],
}
