import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Words from './Words.jsx'
// Full-bleed photo that drifts slower than the page, with a headline on top.
export default function ParallaxBand({ img, pos = '50% 50%', eyebrow, title, sub, cta }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-9%', '9%'])
  return (
    <section ref={ref} className="pband">
      <motion.img src={img} alt="" loading="lazy" style={{ y, objectPosition: pos }} />
      <div className="w pb-in">
        {eyebrow && <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>}
        <Words text={title} />
        {sub && <Reveal delay={0.25}><p className="lead">{sub}</p></Reveal>}
        {cta && <Reveal delay={0.4}><Link to={cta[0]} className="btn inv">{cta[1]} <ArrowRight size={16} /></Link></Reveal>}
      </div>
    </section>
  )
}
