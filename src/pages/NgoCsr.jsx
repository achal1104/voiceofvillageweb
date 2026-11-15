import { useState } from 'react'
import { Handshake, Building2, HandCoins, Hammer, FileText, Sprout } from 'lucide-react'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import { Droplets, Wheat, Hammer as Tool, Building, Landmark, Users2, Waves } from 'lucide-react'
import { waterscarity } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { FOOT } from '../data/footer.js'
import { field, well1 } from '../data/images.js'

const ITEMS = [[Handshake, 'NGO partnerships', 'Work alongside organisations already active in rural Maharashtra.'], [Building2, 'Corporate CSR initiatives', 'Direct your CSR commitment to verified village needs.'], [HandCoins, 'Project sponsorship', 'Sponsor a specific water, fodder or development project.'], [Hammer, 'Ground-level execution', 'Work is carried out locally with approved vendors.'], [FileText, 'Impact documentation', 'Photographs, bills and reports for every project.'], [Sprout, 'Long-term development', 'Move from drought relief to lasting resilience.']]
export default function NgoCsr() {
  const [sent, setSent] = useState(false)
  return (
    <main>
      <PageHero title="NGO & CSR Partnerships" sub="Turn your social responsibility into real village impact." img={field} pos="50% 40%" />
      <JumpNav items={[['main1', 'Partnerships'], ['who', 'Who can partner'], ['adopt', 'Adopt a Village'], ['how', 'How it works'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">How we can partner</p><h2 className="h2">Six ways to make it count.</h2></Reveal>
        <div className="grid3">{ITEMS.map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 0.07}><div className="card static"><I size={26} /><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>
      <section className="alt"><div className="w sec split">
        <Reveal><img className="pic" loading="lazy" src={well1} alt="Women gathered around a large dry well" style={{ aspectRatio: '4/3' }} />
          <p className="mut" style={{ marginTop: 16 }}>{FOOT.en.cText}</p></Reveal>
        <Reveal delay={0.1}><p className="eyebrow">Partner With Us</p><h2 className="h2">Start a conversation.</h2>
          {sent ? <div className="empty"><b>Demo only.</b> Nothing was saved. This form will connect to the backend later.</div> : (
            <div className="frm">
              <label>Organisation*<input placeholder="NGO / company name" /></label>
              <label>Contact email*<input type="email" placeholder="you@organisation.org" /></label>
              <label>Partnership type<select><option>NGO partnership</option><option>Corporate CSR</option><option>Project sponsorship</option></select></label>
              <label>Message<textarea rows="4" /></label>
              <button type="button" className="btn" onClick={() => setSent(true)}>Send enquiry</button>
            </div>)}
        </Reveal>
      </div></section>
      <section id="who" className="w sec">
        <Reveal><p className="eyebrow">Who can partner</p><h2 className="h2">People, organisations and institutions.</h2></Reveal>
        <div className="grid4">{[[Handshake, 'NGOs', 'Organisations working for rural communities.'], [Building, 'Corporates', 'Teams planning CSR spending.'], [Landmark, 'Institutions', 'Trusts, foundations and academic bodies.'], [Users2, 'Community groups', 'Networks ready to rebuild together.']].map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>
      <section id="adopt" className="alt"><div className="w sec split">
        <Reveal><img className="pic" loading="lazy" src={waterscarity} alt="Women carrying water pots" /></Reveal>
        <Reveal delay={0.1}><p className="eyebrow">Adopt a Village</p><h2 className="h2">One village. One partnership. A lasting difference.</h2>
          <ul className="ticks one">{[[Users2, 'Sponsor a village'], [Droplets, 'Support monthly water requirements'], [Wheat, 'Sponsor cattle fodder'], [Tool, 'Sponsor village development'], [Waves, 'Support sustainable water projects']].map(([I, t]) => <li key={t} className="tk"><I size={20} />{t}</li>)}</ul></Reveal>
      </div></section>
      <section id="how" className="w sec">
        <Reveal><p className="eyebrow">How a partnership works</p><h2 className="h2">From first conversation to documented impact.</h2></Reveal>
        <ol className="tl five">{['Share your interest', 'Choose a village need or project', 'Ground-level execution', 'Impact documentation', 'Long-term development'].map((t, i) => <Reveal key={t} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{t}</b></li></Reveal>)}</ol>
      </section>
      <section id="faq" className="alt"><div className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">CSR and compliance questions.</h2><Faq pick={[1, 2, 3, 5]} /></Reveal></div></section>
    </main>
  )
}
