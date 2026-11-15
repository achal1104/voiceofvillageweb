import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Droplets, Wheat, HeartPulse, GraduationCap, Sprout, Briefcase, Stethoscope, ChevronDown, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import well1 from '../assets/well1.jpg'
import field from '../assets/field.jpg'
import waterscarity from '../assets/waterscarity.jpg'
import dryland from '../assets/dryland.jpg'
import droughtcondition from '../assets/droughtcondition.jpg'
import well from '../assets/well.jpg'
import tanker from '../assets/tanker.jpg'
import { farmer, lakebed, stepwell, shepherd, cattlecamp } from '../data/images.js'
import { GALLERY } from '../data/gallery.js'
import Mission from '../components/Mission.jsx'
import Panels from '../components/Panels.jsx'
import ParallaxBand from '../components/ParallaxBand.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Words from '../components/Words.jsx'
import { ImgReveal } from '../components/Reveal.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { STATS, NEEDS, STEPS, PROGRAMMES } from '../data/content.js'

const ICONS = [Droplets, Wheat, Sprout, Sprout, Stethoscope, GraduationCap, Droplets, Briefcase]

export default function Home() {
  const { scrollY } = useScroll(); const reduce = useReducedMotion()
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90])
  return (
    <main>
      <Banner />
      <div className="marq" aria-hidden="true"><div>{[...NEEDS, ...NEEDS].map((n, i) => <span key={i}>{n}<i>✦</i></span>)}</div></div>

      <section id="stats" className="w sec">
        <Reveal className="motto"><p className="eyebrow">Trust &amp; Impact</p><h2>Our highest privilege is the chance to serve, <span>one village at a time.</span></h2></Reveal>
        <div className="stats3">{['Villages Heard', 'Verified Villages', 'Families Reached'].map((t, i) => <Reveal key={t} delay={i * 0.08} className="sc3"><strong><Counter value={null} /></strong><span>{t}</span></Reveal>)}</div>
        <p className="mut center">Live figures load from the backend. Until real data exists we show no numbers.</p>
      </section>

      <Mission />

      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Faces of Drought</p><Words text="Drought touches every part of village life." className="h2" /><p className="lead">Water, crops, cattle, land and the women who carry the load. Hover or tap a panel to see each story.</p></Reveal>
        <Panels />
      </div></section>

      <ParallaxBand img={lakebed} pos="50% 55%" eyebrow="Ground Reality" title="Where water once stood, only cracks remain." sub="VoiceOfVillage exists so these places are seen, documented and helped." cta={['/ground-reality', 'See Ground Reality']} />

      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Explore Villages</p><h2 className="h2">Discover Villages That Need Your Support.</h2></Reveal>
        <Reveal><div className="xempty"><img src={well} alt="Villagers crowding around a stone well" loading="lazy" /><div><div className="chips off">{['District', 'Taluka', 'Need', 'Verification'].map((c) => <span key={c}>{c}</span>)}</div><h3 className="h3">No villages published yet.</h3><p>Approved, verified villages will appear here with search and filters.</p><div className="row"><Link to="/villages" className="btn">Open Explore Villages</Link><Link to="/register" className="btn ghost">Register Your Village</Link></div></div></div></Reveal>
      </div></section>

      <section className="w sec">
        <Reveal><p className="eyebrow">Emergency Needs</p><h2 className="h2">Where help is needed most</h2></Reveal>
        <div className="bento">
          {NEEDS.map((n, i) => { const I = ICONS[i]; const ph = { 0: stepwell, 2: cattlecamp, 3: farmer, 6: lakebed }[i]; return (
            <Reveal key={n} delay={(i % 4) * 0.05} className={'bt b' + i + (ph ? ' ph1' : '')}><Link to="/emergency">{ph ? <img src={ph} alt="" loading="lazy" /> : <span className="ib"><I size={22} /></span>}<h3>{n}</h3><ArrowRight size={16} className="ar" /></Link></Reveal>) })}
        </div>
      </section>

      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">How It Works</p><h2 className="h2">How VoiceOfVillage Works</h2></Reveal>
        <ol className="tl">{STEPS.map((s, i) => <Reveal key={s} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{s}</b></li></Reveal>)}</ol>
      </div></section>

      <GroundReality />

      <Livestock />

      <Photographs />

      <ShareStory />

      <section className="band"><div className="w sec split">
        <Reveal><p className="eyebrow">Adopt a Village</p><h2 className="h2">One Village. One Partnership. A Lasting Difference.</h2><Link to="/adopt" className="btn inv">Learn About Adoption</Link></Reveal>
        <Reveal delay={0.1}><p className="lead">Long-term partnership: sponsor monthly water requirements, cattle fodder, village development and sustainable water projects.</p></Reveal>
      </div></section>

      <section className="w sec split">
        <Reveal><p className="eyebrow">NGO &amp; CSR</p><h2 className="h2">Turn Your Social Responsibility Into Real Village Impact.</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">Project sponsorship, ground-level execution, impact documentation and long-term development, with funds released to approved vendors against bills.</p><Link to="/ngo-csr" className="btn">Partner With Us</Link></Reveal>
      </section>

      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Our Vision</p><h2 className="h2">From Drought Relief to Drought Resilience.</h2></Reveal>
        <div className="grid3">{PROGRAMMES.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="card static"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>

      <section className="cta"><img src={field} alt="" loading="lazy" /><div className="w sec center"><Reveal><h2 className="h2">You Don&apos;t Have to Be Rich to Make a Difference.</h2>
          <p className="lead">Your contribution, your network, your organisation or even one shared story can help a village get noticed.</p>
          <div className="row c"><Link to="/support" className="btn inv">Support a Village</Link><Link to="/volunteer" className="btn wh">Become a Volunteer</Link><Link to="/ground-reality" className="btn wh">Share a Story</Link></div>
          <p className="close">When a village raises its voice, the world should listen.</p></Reveal></div></section>

      <PhotoStrip />

      <Newsletter />
    </main>
  )
}

const SLIDES = [
  [lakebed, '50% 50%', 'Where Water Once Stood.', 'Dry lakebeds and cracked fields tell the story of drought. We document them so help can find the villages that live with them.', '/ground-reality', 'See Ground Reality', 'Two men digging in a cracked, dried-up lakebed'],
  [well1, '50% 60%', 'A Village Should Never Be Forgotten.', 'When a village struggles for water, food and survival, the world should know. VoiceOfVillage connects drought-affected communities with people and organisations that can make a difference.', '/villages', 'Explore Villages', 'Women gathered around a large dry well with pots and ropes'],
  [farmer, '70% 35%', 'Every Village Has a Story.', 'A Voice for Every Village. A Hope for Every Life. Documented, verified and shared with those who can help.', '/register', 'Register Your Village', 'A farmer holding dried crop on cracked earth'],
  [waterscarity, '50% 55%', 'A Story Worth Hearing.', 'Farmers, women and families living with water scarcity across rural Maharashtra.', '/ground-reality', 'Ground Reality', 'Women carrying metal water pots along a dirt path'],
  [dryland, '50% 70%', 'From Relief to Resilience.', 'Relief today, development tomorrow, and stories that keep every village in view.', '/support', 'Support a Village', 'Cracked dry farmland under a blue sky'],
]
function Banner() {
  const [i, setI] = useState(0); const [hold, setHold] = useState(false)
  useEffect(() => { if (hold) return; const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 7000); return () => clearInterval(t) }, [hold])
  const go = (d) => setI((x) => (x + d + SLIDES.length) % SLIDES.length)
  const [img, pos, h, d, to, cta, alt] = SLIDES[i]
  return (
    <section className="ban" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} aria-roledescription="carousel">
      <AnimatePresence mode="sync">
        <motion.img key={i} src={img} alt={alt} style={{ objectPosition: pos }} initial={{ opacity: 0, scale: 1.14 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 1.1 }, scale: { duration: 9, ease: 'linear' } }} />
      </AnimatePresence>
      <div className="ban-in w">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5 }}>
            <h1>{h}</h1><p className="lead">{d}</p>
            <Link to={to} className="btn inv">{cta} <ArrowRight size={16} /></Link>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="sbox"><h4>VILLAGES HEARD</h4><strong>—</strong><p>Real numbers appear once the backend is connected. Amplifying village voices through documented stories.</p></div>
      <button className="arr l" aria-label="Previous" onClick={() => go(-1)}><ChevronLeft /></button>
      <button className="arr r" aria-label="Next" onClick={() => go(1)}><ChevronRight /></button>
      <div className="dots">{SLIDES.map((_, k) => <button key={k} aria-label={'Slide ' + (k + 1)} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}</div>
    </section>
  )
}

function ShareStory() {
  const [sent, setSent] = useState(false)
  return (
    <section className="alt"><div className="w sec split">
      <Reveal><p className="eyebrow">Share a Story</p><h2 className="h2">Your village&apos;s experience is unique. We are eager to listen.</h2></Reveal>
      <Reveal delay={0.1}>
        {sent ? <div className="empty"><b>Demo only.</b> Nothing was saved. This form will connect to the database once the backend is set up.</div> : (
          <div className="frm">
            <label>Name*<input required placeholder="Your name" /></label>
            <label>Email*<input type="email" required placeholder="you@example.com" /></label>
            <label>Village &amp; district<input placeholder="Village, taluka, district" /></label>
            <label>Your story, in your words<textarea rows="4" /></label>
            <label className="chk"><input type="checkbox" /> I consent to being contacted by the VoiceOfVillage team if my story is shortlisted.</label>
            <button type="button" className="btn" onClick={() => setSent(true)}>Submit</button>
          </div>)}
      </Reveal>
    </div></section>
  )
}

function GroundReality() {
  const r = useRef(null)
  const by = (d) => r.current.scrollBy({ left: d * 300, behavior: 'smooth' })
  const items = [['Farmer stories', farmer, '72% 40%', 'A farmer holding dried crop on cracked earth'], ['Women’s stories', waterscarity, '50% 50%', 'Women carrying water pots'], ['Water scarcity', stepwell, '50% 50%', 'Women at the bottom of a deep stone stepwell'], ['Drought-affected land', lakebed, '50% 50%', 'Two men digging in a dried-up lakebed'], ['Livestock & fodder', cattlecamp, '50% 50%', 'Cattle under shade nets at a fodder camp'], ['Herders', shepherd, '50% 50%', 'A herdsman with sheep and goats on dry ground'], ['Village life', droughtcondition, '50% 50%', 'Aerial view of a dry village']]
  return (
    <section className="w sec">
      <Reveal><p className="eyebrow">Ground Reality</p><h2 className="h2">Behind Every Village, There Is a Story Worth Hearing.</h2><p className="mut">Story slots are placeholders. Only verified field stories will be published; none are invented.</p></Reveal>
      <div className="cwrap">
        <button className="arr dk l" aria-label="Previous stories" onClick={() => by(-1)}><ChevronLeft /></button>
        <div className="snap" ref={r}>{items.map(([t, im, pos, alt], i) => (
          <Reveal key={t} delay={i * 0.06} className="story"><img className="pic hov" loading="lazy" src={im} alt={alt} style={{ aspectRatio: '3/4', objectPosition: pos }} /><h3>{t}</h3><p>Story coming soon. Village and date will appear here.</p><span className="rm">Read Story <ArrowRight size={14} /></span></Reveal>))}</div>
        <button className="arr dk r" aria-label="Next stories" onClick={() => by(1)}><ChevronRight /></button>
      </div>
    </section>
  )
}

function Newsletter() {
  const [ok, setOk] = useState(false)
  return (
    <section className="alt"><div className="w sec center">
      <Reveal><p className="sig">To villages;<br /><span>the ones we hear, the ones we help rebuild.</span></p>
        <h2 className="h2">Subscribe to our newsletter</h2>
        {ok ? <p className="mut"><b>Demo only.</b> Nothing was saved; this will connect to the backend later.</p> : (
          <div className="nl"><input type="email" aria-label="Email" placeholder="Your email" /><button className="btn" onClick={() => setOk(true)}>Subscribe</button></div>)}
      </Reveal>
    </div></section>
  )
}

function Livestock() {
  const pts = ['Fodder for cattle and livestock', 'Water for animals as wells and tanks dry', 'Support for farmers who depend on their herds']
  return (
    <section className="alt"><div className="w sec lv">
      <div className="lv-img">
        <ImgReveal className="lv-a" src={cattlecamp} alt="Cattle sheltered under green shade nets at a fodder camp" />
        <ImgReveal className="lv-b" src={shepherd} alt="A herdsman with his sheep and goats on dry ground" delay={0.25} dir="left" />
        <Reveal className="lv-tag" from="zoom" delay={0.6}>Animal Fodder</Reveal>
      </div>
      <div>
        <Reveal><p className="eyebrow">Beyond People</p></Reveal>
        <Words text="Drought is felt by every living thing in the village." className="h2" />
        <Reveal delay={0.15}><p className="lead">Cattle, sheep and goats are a family’s savings and livelihood. When fodder and water run out, they are often the first to suffer.</p></Reveal>
        <div className="ticks one">{pts.map((t, i) => <Reveal key={t} from="right" delay={0.2 + i * 0.1}><div className="tk"><Droplets size={20} />{t}</div></Reveal>)}</div>
        <Reveal delay={0.5}><div className="row"><Link to="/emergency" className="btn">Emergency Needs <ArrowRight size={16} /></Link></div></Reveal>
      </div>
    </div></section>
  )
}

function Photographs() {
  const [i, setI] = useState(null)
  const nav = useCallback((d) => setI((x) => (x + d + GALLERY.length) % GALLERY.length), [])
  const order = [0, 1, 2, 3, 4, 5, 6, 7]; const cls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  return (
    <section className="w sec">
      <Reveal><p className="eyebrow">In Photographs</p><Words text="Life where water is scarce." className="h2" /></Reveal>
      <div className="mosaic">{order.map((n, k) => { const g = GALLERY[n]; return (
        <Reveal key={n} delay={k * 0.05} className={'m ' + cls[k]} from="zoom"><button className="mbtn" aria-label={'Enlarge: ' + g.alt} onClick={() => setI(n)}><img loading="lazy" src={g.img} alt={g.alt} style={{ objectPosition: g.pos }} /><span className="zi"><Expand size={18} /></span></button></Reveal>) })}</div>
      <Lightbox items={GALLERY} index={i} onClose={() => setI(null)} onNav={nav} />
    </section>
  )
}
