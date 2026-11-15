import { Fragment } from 'react'
import { motion } from 'framer-motion'
// Headline whose words rise out of a mask one by one.
export default function Words({ text, as = 'h2', className, delay = 0, style }) {
  const Tag = motion[as]
  return (
    <Tag className={className} style={style} initial="h" whileInView="s" viewport={{ once: true, margin: '-80px' }} transition={{ staggerChildren: 0.055, delayChildren: delay }} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <Fragment key={i}><span className="wm" aria-hidden="true"><motion.span variants={{ h: { y: '115%', rotate: 4 }, s: { y: 0, rotate: 0 } }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span></span>{' '}</Fragment>
      ))}
    </Tag>
  )
}
