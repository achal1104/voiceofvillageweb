import { useState, useCallback } from 'react'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox.jsx'
import { GALLERY } from '../data/gallery.js'
// Two endless rows of photographs moving in opposite directions; click to enlarge.
export default function PhotoStrip() {
  const [i, setI] = useState(null)
  const nav = useCallback((d) => setI((x) => (x + d + GALLERY.length) % GALLERY.length), [])
  const rows = [GALLERY.map((g, k) => [g, k]), [...GALLERY].reverse().map((g) => [g, GALLERY.indexOf(g)])]
  return (
    <section className="strip" aria-label="Photograph strip">
      {rows.map((r, n) => (
        <div className="strip-clip" key={n}><div className={'strip-row' + (n ? ' rev' : '')}>
          {[...r, ...r].map(([g, k], j) => (
            <button key={j} className="strip-i" onClick={() => setI(k)} aria-label={'Enlarge: ' + g.alt} tabIndex={j < r.length ? 0 : -1}><img src={g.img} alt={j < r.length ? g.alt : ''} loading="lazy" style={{ objectPosition: g.pos }} /><span><Expand size={18} /></span></button>))}
        </div></div>))}
      <Lightbox items={GALLERY} index={i} onClose={() => setI(null)} onNav={nav} />
    </section>
  )
}
