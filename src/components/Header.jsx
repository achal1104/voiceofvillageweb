import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, LANGS } from '../data/content.js'

const Brand = ({ onClick }) => <Link to="/" className="brand big-brand" onClick={onClick}><b>VOICE<i>OF</i></b><b>VILLAGE</b></Link>

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  const close = () => setOpen(false)
  const L = (arr) => arr.map(([p, t]) => <NavLink key={p} to={p} end={p === '/'} onClick={close}>{t}</NavLink>)
  return (
    <header className={'hd' + (scrolled ? ' sc' : '')}>
      <div className="ybar"><div className="w">
        <span>A Voice for Every Village. A Hope for Every Life.</span>
        <span className="ya">
          <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value)}>{LANGS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
          <Link to="/register">Register Your Village</Link><Link to="/support" className="ys">Support a Village</Link>
        </span>
      </div></div>
      <div className="w hdi2">
        <nav className="nv l" aria-label="Main">{L(NAV.slice(0, 3))}</nav>
        <Brand onClick={close} />
        <nav className="nv r" aria-label="More">{L(NAV.slice(3))}</nav>
        <button className="bg" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mob" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {L(NAV)}
            <Link to="/register" className="btn ghost" onClick={close}>Register Your Village</Link>
            <Link to="/support" className="btn" onClick={close}>Support a Village</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
