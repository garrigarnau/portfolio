// Faint monochrome backdrops for the side-project cards. Each one hints at
// its project; a shared gradient fades every stroke out towards the text.

// The gradient runs in the user space of the shapes using it, so patterns drawn
// inside a transformed group pass their own local x range.
function Fade({ id, x1 = 260, x2 = 800 }: { id: string; x1?: number; x2?: number }) {
  return (
    <defs>
      <linearGradient id={id} gradientUnits="userSpaceOnUse" x1={x1} y1="0" x2={x2} y2="0">
        <stop offset="0" stopColor="#0a0a0a" stopOpacity="0" />
        <stop offset="0.55" stopColor="#575757" stopOpacity="0.55" />
        <stop offset="1" stopColor="#0a0a0a" stopOpacity="1" />
      </linearGradient>
    </defs>
  )
}

// Chronic Disease AI Agent: a heartbeat trace running through a small graph of nodes.
function Pulse() {
  const nodes = [[470, 70], [540, 120], [610, 60], [580, 190], [680, 150], [720, 240]]
  const edges = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [3, 5]]
  return (
    <>
      <Fade id="pp-pulse" />
      <g stroke="url(#pp-pulse)" fill="none" strokeWidth="1.2">
        <path d="M0 260 H300 l18 -46 l22 92 l20 -130 l22 112 l16 -28 H800" />
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g fill="url(#pp-pulse)">
        {nodes.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />)}
      </g>
    </>
  )
}

// NYC Taxi Rides: Manhattan's tilted street grid with a few trip flows across it.
function Grid() {
  const lines = Array.from({ length: 24 }, (_, i) => i * 40 - 160)
  return (
    <>
      <Fade id="pp-grid" />
      <g stroke="url(#pp-grid)" fill="none">
        <g transform="rotate(-29 400 160)" strokeWidth="0.8">
          {lines.map((v) => <line key={`v${v}`} x1={v + 200} y1="-300" x2={v + 200} y2="700" />)}
          {lines.map((v) => <line key={`h${v}`} x1="-200" y1={v} x2="1100" y2={v} strokeWidth={v % 120 === 0 ? 1.4 : 0.6} />)}
        </g>
        <g strokeWidth="1.4">
          <path d="M380 260 Q520 40 720 90" />
          <path d="M450 300 Q600 160 760 230" />
          <path d="M520 40 Q640 140 700 300" />
        </g>
      </g>
    </>
  )
}

// MNIST Distributed Training: a 28x28-style pixel grid with a faint handwritten 7.
function Pixels() {
  const seven = new Set<string>()
  for (let c = 4; c <= 13; c++) { seven.add(`${c},3`); seven.add(`${c},4`) }
  for (let r = 5; r <= 15; r++) {
    const c = 13 - Math.round((r - 5) * 0.55)
    seven.add(`${c},${r}`); seven.add(`${c - 1},${r}`)
  }
  const cells: JSX.Element[] = []
  for (let r = 0; r < 18; r++) {
    for (let c = 0; c < 18; c++) {
      const on = seven.has(`${c},${r}`)
      cells.push(
        <rect key={`${c},${r}`} x={c * 16} y={r * 16} width="12" height="12" rx="1.5" opacity={on ? 1 : 0.18} />
      )
    }
  }
  return (
    <>
      <Fade id="pp-pixels" x1={-220} x2={288} />
      <g transform="translate(480 18)" fill="url(#pp-pixels)">{cells}</g>
    </>
  )
}

// Satellite Tracker: nested orbits around a planet, with satellites riding them.
function Orbits() {
  return (
    <>
      <Fade id="pp-orbits" x1={-380} x2={260} />
      <Fade id="pp-sats" />
      <g transform="translate(640 160) rotate(-18)" stroke="url(#pp-orbits)" fill="none">
        <circle r="34" strokeWidth="1.2" />
        <ellipse rx="120" ry="48" strokeWidth="1" />
        <ellipse rx="210" ry="90" strokeWidth="0.8" />
        <ellipse rx="310" ry="135" strokeWidth="0.6" strokeDasharray="3 7" />
      </g>
      <g fill="url(#pp-sats)">
        <circle cx="751" cy="122" r="4" />
        <circle cx="460" cy="250" r="3.5" />
        <circle cx="420" cy="140" r="3" />
      </g>
    </>
  )
}

const PATTERNS = { pulse: Pulse, grid: Grid, pixels: Pixels, orbits: Orbits }

export type PatternName = keyof typeof PATTERNS

export default function ProjectPattern({ name }: { name: PatternName }) {
  const Pattern = PATTERNS[name]
  return (
    <svg className="project__pattern" viewBox="0 0 800 320" preserveAspectRatio="xMaxYMid slice" aria-hidden="true" focusable="false">
      <Pattern />
    </svg>
  )
}
