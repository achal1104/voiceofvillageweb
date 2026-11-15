import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { stepwell, farmer, cattlecamp, lakebed, waterscarity } from '../data/images.js'

const ITEMS = [
  ['Water', stepwell, '50% 50%', 'When wells run low, the search for water takes over a family’s day.'],
  ['Farmers', farmer, '72% 40%', 'A failed crop is a whole season of income lost.'],
  ['Livestock', cattlecamp, '50% 50%', 'Cattle and sheep need fodder and water too, and are often first to suffer.'],
  ['Land', lakebed, '50% 50%', 'Dry lakebeds and cracked fields mark where water used to be.'],
  ['Women', waterscarity, '50% 50%', 'Fetching water often falls to women and girls, every single day.'],
]
export default function Panels() {
  const [on, setOn] = useState(0)
  return (
    <Reveal><div className="pn" onMouseLeave={() => {}}>
      {ITEMS.map(([t, im, pos, d], i) => (
        <article key={t} className={'pn-i' + (on === i ? ' on' : '')} onMouseEnter={() => setOn(i)}>
          <img src={im} alt="" loading="lazy" style={{ objectPosition: pos }} />
          <button className="pn-hit" aria-expanded={on === i} aria-label={t} onClick={() => setOn(i)} onFocus={() => setOn(i)} />
          <div className="pn-lab"><i>0{i + 1}</i><span>{t}</span></div>
          <div className="pn-body"><i>0{i + 1}</i><h3>{t}</h3><p>{d}</p><Link to="/ground-reality" tabIndex={on === i ? 0 : -1}>See ground reality <ArrowRight size={15} /></Link></div>
        </article>))}
    </div></Reveal>
  )
}
