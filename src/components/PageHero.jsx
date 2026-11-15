import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function PageHero({ title, sub, img, pos = '50% 50%' }) {
  return (
    <section className="phero">
      <img src={img} alt="" style={{ objectPosition: pos }} />
      <div className="w phi">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="crumb"><Link to="/">Home</Link> / {title}</p>
          <h1>{title}</h1><p className="lead">{sub}</p>
        </motion.div>
      </div>
    </section>
  )
}
