import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
const FROM = { up: { y: 28 }, down: { y: -28 }, left: { x: -56 }, right: { x: 56 }, zoom: { scale: 0.9 } }
// Fade + slide/zoom into view once. `from` picks the direction.
export default function Reveal({ children, delay = 0, className, from = 'up' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, ...FROM[from] }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}
// Image that wipes open on scroll-in, with optional subtle parallax inside its frame.
export function ImgReveal({ src, alt, className = '', delay = 0, pos = '50% 50%', parallax = true, dir = 'up', radius = 28, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-7%', '7%'] : ['0%', '0%'])
  const hidden = { up: `inset(100% 0 0 0 round ${radius}px)`, down: `inset(0 0 100% 0 round ${radius}px)`, left: `inset(0 100% 0 0 round ${radius}px)`, right: `inset(0 0 0 100% round ${radius}px)` }[dir]
  return (
    <motion.div ref={ref} className={'imr ' + className} style={{ borderRadius: radius, ...style }} initial={{ clipPath: hidden }} whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius}px)` }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] }}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale: parallax ? 1.16 : 1, objectPosition: pos }} />
    </motion.div>
  )
}
