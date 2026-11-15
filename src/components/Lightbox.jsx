import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
export default function Lightbox({ items, index, onClose, onNav }) {
  const open = index != null
  useEffect(() => {
    if (!open) return
    const k = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onNav(1); if (e.key === 'ArrowLeft') onNav(-1) }
    window.addEventListener('keydown', k); const prev = document.body.style.overflow; document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = prev }
  }, [open, onClose, onNav])
  const it = open ? items[index] : null
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="lb" role="dialog" aria-modal="true" aria-label="Photograph viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <button className="lb-x" aria-label="Close" onClick={onClose}><X /></button>
          <button className="arr l" aria-label="Previous photograph" onClick={(e) => { e.stopPropagation(); onNav(-1) }}><ChevronLeft /></button>
          <button className="arr r" aria-label="Next photograph" onClick={(e) => { e.stopPropagation(); onNav(1) }}><ChevronRight /></button>
          <motion.figure key={index} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}>
            <img src={it.img} alt={it.alt} /><figcaption>{it.alt}<span>{index + 1} / {items.length}</span></figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
