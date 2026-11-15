import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import { Wallet, Receipt, CheckCheck, Users, ClipboardList, Megaphone, Mail } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { STATS } from '../data/content.js'
import { FOOT } from '../data/footer.js'
import { stepwell } from '../data/images.js'

const APPROVALS = [['Registration', 'A Gram Panchayat submits its village details and documents.'], ['Verification', 'Requirements and documents are checked before a village is marked verified.'], ['Fundraising', 'Only authorised campaigns can receive contributions.']]
const FLOW = ['Contribution goes to a legally authorised entity', 'Funds are released to approved vendors', 'Payment is made against bills', 'Utilisation is documented and reported']
export default function Impact() {
  return (
    <main>
      <PageHero title="Our Impact" sub="Impact and transparency, reported honestly." img={stepwell} pos="50% 50%" />
      <JumpNav items={[['main1', 'Numbers'], ['rep', 'What we report'], ['com', 'Commitments'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">Impact so far</p><h2 className="h2">Numbers appear only when they are real.</h2></Reveal>
        <div className="stats">{STATS.map((s, i) => <Reveal key={s} delay={i * 0.06} className="stat"><strong><Counter value={null} /></strong><span>{s}</span></Reveal>)}</div>
        <p className="mut">Live figures will be loaded from the backend. Until then we show a dash instead of invented numbers.</p>
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Three separate approvals</p><h2 className="h2">Registered is not the same as verified.</h2></Reveal>
        <div className="grid3">{APPROVALS.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="card static"><b className="n">0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>
      <section className="w sec split">
        <Reveal><p className="eyebrow">Where contributions go</p><h2 className="h2">From supporter to village, step by step.</h2>
          <ol className="flow">{FLOW.map((f, i) => <li key={f}><b>{i + 1}</b>{f}</li>)}</ol></Reveal>
        <Reveal delay={0.1}><div className="xnote"><h3>{FOOT.en.cTitle}</h3><p>{FOOT.en.cText}</p></div></Reveal>
      </section>
      <section className="alt"><div className="w sec"><Reveal><p className="eyebrow">Reports</p><h2 className="h2">Impact reports</h2>
        <div className="empty">Published utilisation and impact reports will appear here once projects are completed.</div></Reveal></div></section>
      <section id="rep" className="w sec">
        <Reveal><p className="eyebrow">What we will report</p><h2 className="h2">Six things you will be able to check.</h2></Reveal>
        <div className="grid3">{[[Wallet, 'Contributions received', 'Funds received per campaign.'], [Receipt, 'Funds utilised', 'Spending against approved bills.'], [CheckCheck, 'Projects completed', 'Finished work with documentation.'], [Users, 'Families reached', 'Households benefiting from each project.'], [ClipboardList, 'Field reports', 'Ground-level observations from the village.'], [Megaphone, 'Project updates', 'Progress shared as work moves ahead.']].map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>
      <section id="com" className="band"><div className="w sec">
        <Reveal><p className="eyebrow">Our commitments</p><h2 className="h2">Compliance, stated plainly.</h2></Reveal>
        <div className="grid4">{[['Authorised entity', 'Contributions go to a legally authorised entity.'], ['Approved vendors', 'Funds are released to approved vendors against bills.'], ['80G only where valid', 'Tax benefits apply only where the receiving entity holds valid registration, stated on each campaign.'], ['FCRA for foreign funds', 'Foreign contributions need FCRA registration or permission.']].map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="dk"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>
      <section className="w sec">
        <Reveal><p className="eyebrow">Help and support</p><h2 className="h2">Raise a concern or ask for help.</h2></Reveal>
        <div className="grid3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>{[['Gram Panchayat Desk', 'Help with registration and documents.'], ['Grievance & Compliance', 'Report a concern about any listing, campaign or payment.']].map(([t, d]) => <Reveal key={t}><div className="card static"><span className="ib"><Mail size={22} /></span><h3>{t}</h3><p>{d}</p><p className="mut">Contact details will be published after registration.</p></div></Reveal>)}</div>
      </section>
      <section id="faq" className="alt"><div className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Transparency questions, answered.</h2><Faq /></Reveal></div></section>
    </main>
  )
}
