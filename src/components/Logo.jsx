export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#111111" />
      <path d="M32 8C23 21 17 29 17 38a15 15 0 0 0 30 0c0-9-6-17-15-30Z" fill="#fff" />
      <g fill="#111111"><rect x="24" y="35" width="4" height="9" rx="2" /><rect x="30" y="29" width="4" height="21" rx="2" /><rect x="36" y="33" width="4" height="13" rx="2" /></g>
      <path d="M8 56h48" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
