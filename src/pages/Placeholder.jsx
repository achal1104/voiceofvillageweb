import { Link } from 'react-router-dom'
export default function Placeholder({ title }) {
  return (
    <main className="w sec" style={{ minHeight: '55vh' }}>
      <p className="eyebrow">Coming next</p><h1 className="h2">{title}</h1>
      <p className="lead">This page is routed and ready. Its content will be added from the source content file once it is supplied. Nothing is invented here.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </main>
  )
}
