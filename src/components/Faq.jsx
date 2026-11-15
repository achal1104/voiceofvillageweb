import { Plus } from 'lucide-react'
import { FAQ } from '../data/faq.js'
export default function Faq({ pick }) {
  const items = pick ? pick.map((i) => FAQ[i]) : FAQ
  return <div className="faq">{items.map(([q, a]) => <details key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div>
}
