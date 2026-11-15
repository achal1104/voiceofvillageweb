import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig, AnimatePresence, motion } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import About from './pages/About.jsx'
import Villages from './pages/Villages.jsx'
import GroundReality from './pages/GroundReality.jsx'
import Impact from './pages/Impact.jsx'
import NgoCsr from './pages/NgoCsr.jsx'
import Contact from './pages/Contact.jsx'
import { NAV } from './data/content.js'

export default function App() {
  const [lang, setLang] = useState('en')
  const location = useLocation(); const { pathname } = location
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const real = { '/about': About, '/villages': Villages, '/ground-reality': GroundReality, '/impact': Impact, '/ngo-csr': NgoCsr, '/contact': Contact }
  const pages = [...NAV.slice(1).filter(([p]) => !real[p]), ['/register', 'Register Your Village'], ['/support', 'Support a Village'], ['/volunteer', 'Volunteer'], ['/adopt', 'Adopt a Village'], ['/emergency', 'Emergency Needs']]
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header lang={lang} setLang={setLang} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className="pg" key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            {pages.map(([p, t]) => <Route key={p} path={p} element={<Placeholder title={t} />} />)}
            {Object.entries(real).map(([p, C]) => <Route key={p} path={p} element={<C />} />)}
            <Route path="*" element={<Placeholder title="Page not found" />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer lang={lang} />
    </MotionConfig>
  )
}
