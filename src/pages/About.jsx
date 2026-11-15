import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { FOOT } from '../data/footer.js'
import { PROGRAMMES } from '../data/content.js'
import Panels from '../components/Panels.jsx'
import Words from '../components/Words.jsx'
import { droughtcondition, well1, lakebed } from '../data/images.js'
const X = FOOT.en
export default function About() {
  return (
    <main>
      <PageHero title="About Us" sub="A Voice for Every Village. A Hope for Every Life." img={lakebed} pos="50% 55%" />
      <section className="w sec split">
        <Reveal><img className="pic" loading="lazy" src={droughtcondition} alt="Aerial view of a dry village" /></Reveal>
        <Reveal delay={0.1}><p className="eyebrow">Who we are</p><h2 className="h2">Every Village Has a Story. Every Story Deserves to Be Heard.</h2>
          <p className="lead">{X.desc}</p><span className="bdg">{X.badge}</span></Reveal>
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">{X.pTitle}</p><h2 className="h2">What we stand on</h2></Reveal>
        <div className="pillars">{X.pillars.map((p, i) => <Reveal key={p} delay={i * 0.06} className="pil"><b>0{i + 1}</b><span>{p}</span></Reveal>)}</div>
      </div></section>
      <section className="w sec">
        <Reveal><p className="eyebrow">Why we exist</p><Words text="Drought touches every part of village life." className="h2" /><p className="lead">Hover or tap a panel to see what we document.</p></Reveal>
        <Panels />
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Our Vision</p><h2 className="h2">From Drought Relief to Drought Resilience.</h2></Reveal>
        <div className="grid3">{PROGRAMMES.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="card static"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>
      <section className="band"><div className="w sec split">
        <Reveal><p className="eyebrow">{X.cTitle}</p><h2 className="h2">Trust is built in the open.</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{X.cText}</p><p className="lead" style={{ fontSize: 14, opacity: .8 }}>{X.copy}</p></Reveal>
      </div></section>
      <section className="w sec split">
        <Reveal><p className="eyebrow">Get involved</p><h2 className="h2">When a village raises its voice, the world should listen.</h2>
          <div className="row"><Link to="/support" className="btn">Support a Village</Link><Link to="/volunteer" className="btn ghost">Become a Volunteer</Link></div></Reveal>
        <Reveal delay={0.1}><img className="pic" loading="lazy" src={well1} alt="Women gathered around a large dry well" style={{ aspectRatio: '4/3' }} /></Reveal>
      </section>
    </main>
  )
}
