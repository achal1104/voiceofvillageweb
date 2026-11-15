import { useState } from 'react'
import { Mail, FileText, ShieldAlert, Handshake, BookOpen, HeartHandshake, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import ParallaxBand from '../components/ParallaxBand.jsx'
import { ImgReveal } from '../components/Reveal.jsx'
import { farmer, stepwell, lakebed } from '../data/images.js'

const ROLES = ['Supporter', 'Gram Panchayat representative', 'NGO / CSR partner', 'Volunteer', 'Media', 'Other']
const CHANNELS = [
  [FileText, 'Gram Panchayat Desk', 'Help with registration and documents.', '/register', 'Register a village'],
  [ShieldAlert, 'Grievance & Compliance', 'Report a concern about any listing, campaign or payment.', null],
  [Handshake, 'NGO & CSR partnerships', 'Partner on projects and village adoption.', '/ngo-csr', 'View partnerships'],
  [BookOpen, 'Share a story', 'Farmers, women and families: tell us what is happening in your village.', '/ground-reality', 'Ground Reality'],
  [HeartHandshake, 'Volunteer', 'Offer your time and skills for village work.', '/volunteer', 'Volunteer'],
]
const blank = { name: '', email: '', role: ROLES[0], village: '', subject: '', message: '', consent: false }

export default function Contact() {
  const [v, setV] = useState(blank); const [err, setErr] = useState({}); const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (v.name.trim().length < 2) x.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Please enter a valid email address.'
    if (v.subject.trim().length < 3) x.subject = 'Please add a short subject.'
    if (v.message.trim().length < 10) x.message = 'Please write at least 10 characters.'
    if (!v.consent) x.consent = 'Please agree so we may respond to you.'
    setErr(x); if (!Object.keys(x).length) setSent(true)
  }
  const f = (k, label, props = {}, tag = 'input') => {
    const T = tag
    return <label className="fld">{label}<T value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} {...props} />{err[k] && <span className="err" role="alert">{err[k]}</span>}</label>
  }
  return (
    <main>
      <PageHero title="Contact Us" sub="Questions, concerns, partnerships or a story to share: we are here to listen." img={farmer} pos="50% 14%" />
      <JumpNav items={[['main1', 'Get in touch'], ['channels', 'Who to reach'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec cgrid">
        <Reveal>
          <p className="eyebrow">Get in touch</p><h2 className="h2">Write to us.</h2>
          <p className="lead">Tell us who you are and how we can help. Whether you are a supporter, a Gram Panchayat, an organisation or a volunteer, your message will reach the right desk.</p>
          <div className="cinfo"><div className="tk"><Mail size={20} /><span><b>Email</b><br />Contact details will be published after registration.</span></div>
            <div className="tk"><MapPin size={20} /><span><b>Where we work</b><br />Maharashtra, India</span></div></div>
          <div className="cimg-w"><ImgReveal className="cimg" src={stepwell} alt="Women collecting water at the bottom of a deep stone stepwell" delay={0.2} radius={24} />
            <div className="cap">Water is where every conversation starts.<small>Tell us what your village needs.</small></div></div>
        </Reveal>
        <Reveal delay={0.1}>
          {sent ? (
            <div className="xnote"><h3>Thank you, {v.name.split(' ')[0]}.</h3><p><b>Demo only.</b> Your message was not sent or saved, because the backend is not connected yet. Once it is, this form will deliver your message to our team.</p>
              <button className="btn ghost" onClick={() => { setV(blank); setSent(false) }}>Write another message</button></div>
          ) : (
            <form className="frm cf" onSubmit={submit} noValidate>
              <div className="two2">{f('name', 'Name*', { placeholder: 'Your full name', autoComplete: 'name' })}{f('email', 'Email*', { type: 'email', placeholder: 'you@example.com', autoComplete: 'email' })}</div>
              <div className="two2">
                <label className="fld">I am a<select value={v.role} onChange={set('role')}>{ROLES.map((r) => <option key={r}>{r}</option>)}</select></label>
                {f('village', 'Village / district (optional)', { placeholder: 'e.g. village, taluka, district' })}
              </div>
              {f('subject', 'Subject*', { placeholder: 'How can we help?' })}
              {f('message', 'Message*', { rows: 5, placeholder: 'Write your message here' }, 'textarea')}
              <label className="chk"><input type="checkbox" checked={v.consent} onChange={set('consent')} /> I agree that the VoiceOfVillage team may contact me about this message.</label>
              {err.consent && <span className="err" role="alert">{err.consent}</span>}
              <button className="btn" type="submit">Send message</button>
              <p className="mut">Demo form: nothing is saved until the backend is connected.</p>
            </form>)}
        </Reveal>
      </section>
      <section id="channels" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Who to reach</p><h2 className="h2">Pick the right desk.</h2></Reveal>
        <div className="grid3">{CHANNELS.map(([I, t, d, to, cta], i) => <Reveal key={t} delay={(i % 3) * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p>{to && <Link to={to} className="rm" style={{ marginTop: 12 }}>{cta} →</Link>}</div></Reveal>)}</div>
      </div></section>
      <ParallaxBand img={lakebed} pos="50% 55%" eyebrow="We are listening" title="Your message could be the first step for a village." sub="Share a concern, a partnership idea or a story from the ground." cta={['/ground-reality', 'Share a Story']} />
      <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Quick answers.</h2><Faq pick={[0, 1, 4, 5]} /></Reveal></section>
    </main>
  )
}
