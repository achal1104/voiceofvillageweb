export default function JumpNav({ items }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return <div className="jump"><div className="w">{items.map(([id, t]) => <button key={id} onClick={() => go(id)}>{t}</button>)}</div></div>
}
