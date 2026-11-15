import { useState, useCallback } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import ParallaxBand from '../components/ParallaxBand.jsx'
import { stepwell, lakebed } from '../data/images.js'
import { Link } from 'react-router-dom'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import { Sprout, Users, Droplets, Camera, Video, Mic, Home, TrendingUp } from 'lucide-react'
import { well1 } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { CATS, PHOTOS } from '../data/stories.js'
import { waterscarity } from '../data/images.js'

export default function GroundReality() {
  const [c, setC] = useState('All')
  const list = PHOTOS.filter((p) => c === 'All' || p.cat === c)
  const [lb, setLb] = useState(null)
  const nav = useCallback((d) => setLb((x) => (x + d + list.length) % list.length), [list.length])
  const lbItems = list.map((p) => ({ img: p.img, alt: p.alt }))
  return (
    <main>
      <PageHero title="Ground Reality" sub="Behind every village, there is a story worth hearing." img={waterscarity} pos="50% 50%" />
      <JumpNav items={[['main1', 'Gallery'], ['doc', 'What we document'], ['pub', 'How we publish'], ['faq', 'Share a story']]} />
      <section id="main1" className="w sec">
        <div className="chips" role="tablist" aria-label="Story categories">{['All', ...CATS].map((k) => <button key={k} role="tab" aria-selected={c === k} className={c === k ? 'on' : ''} onClick={() => setC(k)}>{k}</button>)}</div>
        <p className="mut">Photographs are shown now. Verified stories with village, date and text will be published here; none are invented.</p>
        <div className="gal">{list.map((p, i) => (
          <Reveal key={p.alt} delay={i * 0.05} className={'g' + (i % 5 === 0 ? ' wide' : '')}>
            <div className="gi"><button className="mbtn" aria-label={'Enlarge: ' + p.alt} onClick={() => setLb(i)}><img src={p.img} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos }} /></button><span className="tagb">{p.cat}</span></div>
            <h3>{p.cat}</h3><p className="mut">Story coming soon. Village and date will appear here.</p></Reveal>))}</div>
        <Lightbox items={lbItems} index={lb} onClose={() => setLb(null)} onNav={nav} />
      </section>
      <section className="band"><div className="w sec center">
        <Reveal><h2 className="h2">Have a story from your village?</h2><p className="lead">Farmers, women, families and community workers: your experience is unique and we are eager to listen.</p>
          <Link to="/contact" className="btn inv">Share a Story</Link></Reveal>
      </div></section>
      <section id="doc" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">What we document</p><h2 className="h2">Eight kinds of ground-level stories.</h2></Reveal>
        <div className="grid4">{[[Sprout, 'Farmer stories'], [Users, 'Women’s stories'], [Droplets, 'Village water scarcity'], [Camera, 'Ground-level photographs'], [Video, 'Video documentaries'], [Mic, 'Interviews'], [Home, 'Community experiences'], [TrendingUp, 'Village transformation stories']].map(([I, t], i) => <Reveal key={t} delay={(i % 4) * 0.05}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3></div></Reveal>)}</div>
      </div></section>
      <ParallaxBand img={stepwell} pos="50% 50%" eyebrow="Featured photograph" title="Where one well serves many households." />
      <section id="pub" className="w sec">
        <Reveal><p className="eyebrow">How we publish</p><h2 className="h2">Every story carries the same four details.</h2></Reveal>
        <div className="grid4">{[['Title', 'A clear heading for the story.'], ['Short description', 'What the story is about, in plain words.'], ['Village and location', 'Where it happened.'], ['Published date', 'When it was shared.']].map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><b className="n">0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
        <p className="xnote" style={{ marginTop: 24 }}>We never present fictional stories as real testimonials.</p>
      </section>
      <section id="faq" className="alt"><div className="w sec"><Reveal><p className="eyebrow">Questions</p><h2 className="h2">Before you share a story.</h2><Faq pick={[4, 5]} /></Reveal></div></section>
    </main>
  )
}
