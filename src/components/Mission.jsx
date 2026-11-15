import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Droplets, ShieldCheck, FileCheck2, ArrowRight, BadgeCheck } from 'lucide-react'
import Reveal, { ImgReveal } from './Reveal.jsx'
import Words from './Words.jsx'
import { dryland, farmer, stepwell } from '../data/images.js'

const PILLARS = [
  [Droplets, 'Drought relief', 'Water, food and fodder where the need is most urgent.'],
  [ShieldCheck, 'Transparent water work', 'Funds go to approved vendors, against bills.'],
  [FileCheck2, 'Direct, documented support', 'Straight to Gram Panchayats, with photographs and reports.'],
]
export default function Mission() {
  return (
    <section className="mission"><div className="w sec mgrid">
      <div className="mcol">
        <ImgReveal className="m-main" src={dryland} alt="Cracked dry farmland under a blue sky" pos="50% 72%" />
        <ImgReveal className="m-sec" src={farmer} alt="A farmer holding dried crop on cracked earth" pos="72% 40%" delay={0.25} dir="left" />
        <Reveal className="m-round" from="zoom" delay={0.5}><img src={stepwell} alt="Women at the bottom of a deep stone stepwell" loading="lazy" /></Reveal>
        <motion.div className="m-badge" initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.7 }}>
          <svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="mc" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
            <text><textPath href="#mc" textLength="281" lengthAdjust="spacing">DROUGHT RELIEF • EVERY VOICE • </textPath></text></svg>
          <Droplets size={26} />
        </motion.div>
        <Reveal className="m-card" from="right" delay={0.6}><div><BadgeCheck size={20} /><span><b>Verified first</b>Registered is not the same as verified.</span></div></Reveal>
      </div>
      <div className="mtx">
        <Reveal><p className="eyebrow">Our Mission</p></Reveal>
        <Words text="Every Village Has a Story. Every Story Deserves to Be Heard." className="h2 mh" />
        <Reveal delay={0.15}><p className="lead">VoiceOfVillage is a digital humanitarian platform connecting verified drought-affected villages with supporters, built for drought relief, transparent water work and direct, documented support to Gram Panchayats across rural Maharashtra.</p></Reveal>
        <div className="mp">{PILLARS.map(([I, t, d], i) => (
          <Reveal key={t} from="right" delay={0.2 + i * 0.1}><div className="mpi"><span className="ib"><I size={22} /></span><div><b>{t}</b><span className="d">{d}</span></div></div></Reveal>))}</div>
        <Reveal delay={0.55}><div className="row"><Link to="/about" className="btn">Read More <ArrowRight size={16} /></Link><Link to="/register" className="btn ghost">Register Your Village</Link></div></Reveal>
      </div>
    </div></section>
  )
}
