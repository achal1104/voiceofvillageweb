import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { waterscarity } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { VILLAGES, STATUSES } from '../data/villages.js'
import { NEEDS } from '../data/content.js'
import { droughtcondition, dryland } from '../data/images.js'

export default function Villages() {
  const [f, setF] = useState({ q: '', district: '', need: '', status: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const districts = [...new Set(VILLAGES.map((v) => v.district))]
  const list = VILLAGES.filter((v) => (!f.q || (v.name + v.taluka).toLowerCase().includes(f.q.toLowerCase())) && (!f.district || v.district === f.district) && (!f.need || v.needs.includes(f.need)) && (!f.status || v.status === f.status))
  return (
    <main>
      <PageHero title="Explore Villages" sub="Discover villages that need your support." img={dryland} pos="50% 75%" />
      <JumpNav items={[['main1', 'Browse'], ['profile', 'Village profile'], ['gp', 'For Gram Panchayats'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <div className="filters">
          <label className="srch"><Search size={16} /><input aria-label="Search villages" placeholder="Search village or taluka" value={f.q} onChange={set('q')} /></label>
          <select aria-label="District" value={f.district} onChange={set('district')}><option value="">All districts</option>{districts.map((d) => <option key={d}>{d}</option>)}</select>
          <select aria-label="Need" value={f.need} onChange={set('need')}><option value="">All needs</option>{NEEDS.map((n) => <option key={n}>{n}</option>)}</select>
          <select aria-label="Verification" value={f.status} onChange={set('status')}><option value="">Any status</option>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select>
        </div>
        <div className="chips" aria-label="Browse by need">{NEEDS.map((n) => <button key={n} className={f.need === n ? 'on' : ''} onClick={() => setF({ ...f, need: f.need === n ? '' : n })}>{n}</button>)}</div>
        {list.length ? (
          <div className="grid3">{list.map((v) => (
            <Reveal key={v.id}><Link to={'/villages/' + v.id} className="card vc"><img src={v.image} alt={v.name} /><span className="tagb">{v.status}</span><h3>{v.name}</h3><p>{v.taluka}, {v.district}</p></Link></Reveal>))}</div>
        ) : (
          <Reveal><div className="xempty">
            <img src={droughtcondition} alt="Aerial view of a dry village" loading="lazy" />
            <div><h2 className="h3">No villages published yet.</h2>
              <p>Approved villages will appear here with their district, taluka, urgent needs and verification status. Registration, verification and fundraising approval are separate steps: a registered village is not automatically verified.</p>
              <div className="row"><Link to="/register" className="btn">Register Your Village</Link><Link to="/support" className="btn ghost">Support a Village</Link></div></div>
          </div></Reveal>)}
      </section>
      <section id="profile" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Village profile</p><h2 className="h2">What every approved village page includes.</h2></Reveal>
        <div className="ticks">{['Cover image and ground-reality gallery', 'Village name, district and taluka', 'Verification status', 'Village description', 'Population and affected families', 'Urgent requirements', 'Project information', 'Funding details, if authorised', 'Progress updates and impact reports'].map((t, i) => <Reveal key={t} delay={(i % 3) * 0.05} className="tk"><CheckCircle2 size={20} />{t}</Reveal>)}</div>
      </div></section>
      <section id="gp" className="w sec split">
        <Reveal><p className="eyebrow">For Gram Panchayats</p><h2 className="h2">Register your village in seven steps.</h2>
          <ol className="flow">{['Basic village information', 'Official representatives', 'Bank details', 'Drought situation', 'Village requirements', 'Documents upload', 'Declaration and submission'].map((t, i) => <li key={t}><b>{i + 1}</b>{t}</li>)}</ol>
          <p className="xnote" style={{ marginTop: 20 }}><ShieldCheck size={16} style={{ verticalAlign: '-3px' }} /> Private documents and full bank details are never shown publicly.</p>
          <div className="row"><Link to="/register" className="btn">Register Your Village</Link></div></Reveal>
        <Reveal delay={0.1}><img className="pic" loading="lazy" src={waterscarity} alt="Women carrying metal water pots along a dirt path" /></Reveal>
      </section>
      <section id="faq" className="alt"><div className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Good to know before you support a village.</h2><Faq pick={[0, 1, 4]} /></Reveal></div></section>
    </main>
  )
}
