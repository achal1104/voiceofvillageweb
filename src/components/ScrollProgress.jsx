import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll()
  const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })
  const [show, setShow] = useState(false)
  useEffect(() => scrollY.on('change', (v) => setShow(v > 700)), [scrollY])
  return (
    <>
      <motion.div className="sprog" style={{ scaleX: sx }} />
      <AnimatePresence>
        {show && <motion.button className="totop" aria-label="Back to top" initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -3 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={20} /></motion.button>}
      </AnimatePresence>
    </>
  )
}
