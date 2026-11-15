import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
// Animates a real number. value=null renders an honest "awaiting data" state (never a fake figure).
export default function Counter({ value }) {
  const ref = useRef(null); const seen = useInView(ref, { once: true })
  useEffect(() => {
    if (value == null || !seen) return
    const c = animate(0, value, { duration: 1.4, onUpdate: (v) => { ref.current.textContent = Math.round(v).toLocaleString('en-IN') } })
    return () => c.stop()
  }, [seen, value])
  if (value == null) return <span ref={ref} className="na"><i />Awaiting data</span>
  return <span ref={ref}>0</span>
}
