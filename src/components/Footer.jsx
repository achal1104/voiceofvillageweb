import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import Logo from './Logo.jsx'
import { FOOT } from '../data/footer.js'

export default function Footer({ lang }) {
  const x = FOOT[lang] || FOOT.en
  return (
    <footer className="ft">
      <div className="w">
        <div className="fg">
          <div>
            <Link to="/" className="brand"><Logo size={44} /><b>Voice<i>Of</i>Village</b></Link>
            <p>{x.desc}</p>
            <span className="bdg"><ShieldCheck size={14} /> {x.badge}</span>
          </div>
          <div><h5>{x.pTitle}</h5><ol>{x.pillars.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div>
          <div><h5>{x.dTitle}</h5><p>{x.dDesc}</p><p className="mut">Districts will appear here once villages are listed.</p></div>
          <div>
            <h5>{x.hTitle}</h5>
            <p><b>{x.gp}</b><br />{x.gpd}</p>
            <p><b>{x.gr}</b><br />{x.grd}</p>
            <p>{x.mail}</p>
          </div>
        </div>
        <div className="cmp"><h5>{x.cTitle}</h5><p>{x.cText}</p></div>
        <div className="bot"><span>{x.copy}</span><span>{x.links.map((l) => <a key={l} href="#/">{l}</a>)}</span></div>
      </div>
    </footer>
  )
}
