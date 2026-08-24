import { useEffect, useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import {
  Skull,
  Calendar,
  Image,
  Trophy,
  HeartHandshake,
  Users,
  Layers,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '../lib/utils'

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Skull },
  { path: '/schedule', label: 'Schedule', icon: Calendar },
  { path: '/gallery', label: 'Hall of Memories', icon: Image },
  { path: '/tracks', label: 'Tracks', icon: Layers },
  { path: '/prizes', label: 'Prizes', icon: Trophy },
  { path: '/sponsors', label: 'Sponsors', icon: HeartHandshake },
  { path: '/team', label: 'Team', icon: Users },
]

export function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [nextPath, setNextPath] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault()

    if (path === location.pathname || transitioning) {
      return
    }

    setMobileOpen(false)
    setNextPath(path)
    setTransitioning(true)
  }

  useEffect(() => {
  if (!transitioning || !nextPath) return

  const timer = window.setTimeout(() => {
    navigate(nextPath)

    const revealTimer = window.setTimeout(() => {
      setTransitioning(false)
      setNextPath(null)
    }, 350)

    return () => window.clearTimeout(revealTimer)
  }, 650)

  return () => window.clearTimeout(timer)
}, [transitioning, nextPath, navigate])


// ================= BACKGROUND PARALLAX =================

useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12
    const y = (event.clientY / window.innerHeight - 0.5) * 12

    setMousePosition({ x, y })
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])

  return (
    <div className="relative min-h-screen bg-background text-on-surface overflow-x-hidden">

      {/* ================= HALLOWEEN PAGE TRANSITION ================= */}

      {transitioning && (
  <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">

    {/* Smooth fade */}
    <div className="absolute inset-0 bg-black animate-[pageFade_1000ms_ease-in-out_forwards]" />

    {/* Subtle red atmospheric glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,30,30,0.10),transparent_70%)] animate-[transitionGlow_900ms_ease-in-out_forwards]" />

    {/* BATS */}
    <div className="absolute inset-0">

      {/* Bat 1 */}
      <svg
        className="absolute w-32 h-20 sm:w-44 sm:h-28 md:w-56 md:h-36 text-black animate-[batFly1_900ms_linear_forwards]"
        viewBox="0 0 200 120"
        fill="currentColor"
      >
        <path d="M100 58
          C82 40 68 20 42 12
          C48 27 42 38 24 34
          C32 48 27 58 8 58
          C30 72 53 76 76 68
          C84 64 92 61 100 62
          C108 61 116 64 124 68
          C147 76 170 72 192 58
          C173 58 168 48 176 34
          C158 38 152 27 158 12
          C132 20 118 40 100 58Z"
        />
        <path d="M88 54
          C88 43 94 36 100 36
          C106 36 112 43 112 54
          L108 78
          C106 87 94 87 92 78Z"
        />
      </svg>

      {/* Bat 2 */}
      <svg
        className="absolute w-24 h-16 sm:w-36 sm:h-24 md:w-48 md:h-32 text-black animate-[batFly2_900ms_linear_forwards]"
        viewBox="0 0 200 120"
        fill="currentColor"
      >
        <path d="M100 58
          C82 40 68 20 42 12
          C48 27 42 38 24 34
          C32 48 27 58 8 58
          C30 72 53 76 76 68
          C84 64 92 61 100 62
          C108 61 116 64 124 68
          C147 76 170 72 192 58
          C173 58 168 48 176 34
          C158 38 152 27 158 12
          C132 20 118 40 100 58Z"
        />
        <path d="M88 54
          C88 43 94 36 100 36
          C106 36 112 43 112 54
          L108 78
          C106 87 94 87 92 78Z"
        />
      </svg>

      {/* Bat 3 - biggest */}
      <svg
        className="absolute w-40 h-24 sm:w-56 sm:h-36 md:w-72 md:h-44 text-black animate-[batFly3_900ms_linear_forwards]"
        viewBox="0 0 200 120"
        fill="currentColor"
      >
        <path d="M100 58
          C82 40 68 20 42 12
          C48 27 42 38 24 34
          C32 48 27 58 8 58
          C30 72 53 76 76 68
          C84 64 92 61 100 62
          C108 61 116 64 124 68
          C147 76 170 72 192 58
          C173 58 168 48 176 34
          C158 38 152 27 158 12
          C132 20 118 40 100 58Z"
        />
        <path d="M88 54
          C88 43 94 36 100 36
          C106 36 112 43 112 54
          L108 78
          C106 87 94 87 92 78Z"
        />
      </svg>

      {/* Bat 4 */}
      <svg
        className="absolute w-24 h-16 sm:w-32 sm:h-20 md:w-44 md:h-28 text-black animate-[batFly4_900ms_linear_forwards]"
        viewBox="0 0 200 120"
        fill="currentColor"
      >
        <path d="M100 58
          C82 40 68 20 42 12
          C48 27 42 38 24 34
          C32 48 27 58 8 58
          C30 72 53 76 76 68
          C84 64 92 61 100 62
          C108 61 116 64 124 68
          C147 76 170 72 192 58
          C173 58 168 48 176 34
          C158 38 152 27 158 12
          C132 20 118 40 100 58Z"
        />
        <path d="M88 54
          C88 43 94 36 100 36
          C106 36 112 43 112 54
          L108 78
          C106 87 94 87 92 78Z"
        />
      </svg>

      {/* Bat 5 */}
      <svg
        className="absolute w-28 h-18 sm:w-40 sm:h-24 md:w-52 md:h-32 text-black animate-[batFly5_900ms_linear_forwards]"
        viewBox="0 0 200 120"
        fill="currentColor"
      >
        <path d="M100 58
          C82 40 68 20 42 12
          C48 27 42 38 24 34
          C32 48 27 58 8 58
          C30 72 53 76 76 68
          C84 64 92 61 100 62
          C108 61 116 64 124 68
          C147 76 170 72 192 58
          C173 58 168 48 176 34
          C158 38 152 27 158 12
          C132 20 118 40 100 58Z"
        />
        <path d="M88 54
          C88 43 94 36 100 36
          C106 36 112 43 112 54
          L108 78
          C106 87 94 87 92 78Z"
        />
      </svg>
{/* Bat 6 */}
<svg
  className="absolute w-20 h-14 sm:w-32 sm:h-20 md:w-40 md:h-24 text-black animate-[batFly6_900ms_linear_forwards]"
  viewBox="0 0 200 120"
  fill="currentColor"
>
  <path d="M100 58
    C82 40 68 20 42 12
    C48 27 42 38 24 34
    C32 48 27 58 8 58
    C30 72 53 76 76 68
    C84 64 92 61 100 62
    C108 61 116 64 124 68
    C147 76 170 72 192 58
    C173 58 168 48 176 34
    C158 38 152 27 158 12
    C132 20 118 40 100 58Z"
  />
  <path d="M88 54
    C88 43 94 36 100 36
    C106 36 112 43 112 54
    L108 78
    C106 87 94 87 92 78Z"
  />
</svg>

{/* Bat 7 */}
<svg
  className="absolute w-28 h-18 sm:w-40 sm:h-24 md:w-52 md:h-32 text-black animate-[batFly7_900ms_linear_forwards]"
  viewBox="0 0 200 120"
  fill="currentColor"
>
  <path d="M100 58
    C82 40 68 20 42 12
    C48 27 42 38 24 34
    C32 48 27 58 8 58
    C30 72 53 76 76 68
    C84 64 92 61 100 62
    C108 61 116 64 124 68
    C147 76 170 72 192 58
    C173 58 168 48 176 34
    C158 38 152 27 158 12
    C132 20 118 40 100 58Z"
  />
  <path d="M88 54
    C88 43 94 36 100 36
    C106 36 112 43 112 54
    L108 78
    C106 87 94 87 92 78Z"
  />
</svg>

{/* Bat 8 */}
<svg
  className="absolute w-24 h-16 sm:w-36 sm:h-22 md:w-44 md:h-28 text-black animate-[batFly8_900ms_linear_forwards]"
  viewBox="0 0 200 120"
  fill="currentColor"
>
  <path d="M100 58
    C82 40 68 20 42 12
    C48 27 42 38 24 34
    C32 48 27 58 8 58
    C30 72 53 76 76 68
    C84 64 92 61 100 62
    C108 61 116 64 124 68
    C147 76 170 72 192 58
    C173 58 168 48 176 34
    C158 38 152 27 158 12
    C132 20 118 40 100 58Z"
  />
  <path d="M88 54
    C88 43 94 36 100 36
    C106 36 112 43 112 54
    L108 78
    C106 87 94 87 92 78Z"
  />
</svg>

{/* Bat 9 */}
<svg
  className="absolute w-36 h-22 sm:w-48 sm:h-30 md:w-60 md:h-38 text-black animate-[batFly9_900ms_linear_forwards]"
  viewBox="0 0 200 120"
  fill="currentColor"
>
  <path d="M100 58
    C82 40 68 20 42 12
    C48 27 42 38 24 34
    C32 48 27 58 8 58
    C30 72 53 76 76 68
    C84 64 92 61 100 62
    C108 61 116 64 124 68
    C147 76 170 72 192 58
    C173 58 168 48 176 34
    C158 38 152 27 158 12
    C132 20 118 40 100 58Z"
  />
  <path d="M88 54
    C88 43 94 36 100 36
    C106 36 112 43 112 54
    L108 78
    C106 87 94 87 92 78Z"
  />
</svg>
    </div>

    {/* Center signal */}
    <div className="absolute inset-0 flex items-center justify-center">
     <div className="font-mono text-xs tracking-[0.4em] text-red-500 uppercase animate-[signalPulse_750ms_ease-in-out_forwards]">
  Vedathon 2.0
</div>
    </div>

  </div>
)}

      {/* ========== GLOBAL BACKGROUND ========== */}

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div
  className="absolute -inset-10 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
  style={{
    backgroundImage: `url("${
      location.pathname === '/'
        ? '/Halloween/HOME_BG.png'
        : location.pathname === '/schedule'
        ? '/Halloween/SCHEDULE_BG.png'
        : location.pathname === '/gallery'
        ? '/Halloween/GALLERY_BG.png'
        : location.pathname === '/tracks'
        ? '/Halloween/TRACKS_BG.png'
        : location.pathname === '/prizes'
        ? '/Halloween/PRIZES_BG.png'
        : location.pathname === '/sponsors'
        ? '/Halloween/SPONSORS_BG.png'
        : '/Halloween/GalleryBg.png'
    }")`,
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.08)`,
  }}
/>

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(10,5,5,0.9)_100%)]" />

        {/* Red atmosphere glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
          style={{
            background:
              'radial-gradient(circle at bottom left, rgba(200,30,30,0.45), transparent 70%)',
          }}
        />

        {/* Orange atmosphere glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(224,32,31,0.3), transparent 70%)',
          }}
        />

        {/* Left skull */}
        <div className="absolute left-[4%] top-[30%] -rotate-12 opacity-[0.035]">
          <div className="relative">
            <Skull
              className="w-40 h-40 md:w-52 md:h-52 text-red-900 fill-red-900"
              strokeWidth={1.5}
            />
            <div className="absolute left-[28%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
            <div className="absolute left-[52%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
          </div>
        </div>

        {/* Right skull */}
        <div className="absolute right-[3%] bottom-[15%] rotate-12 opacity-[0.04]">
          <div className="relative">
            <Skull
              className="w-48 h-48 md:w-60 md:h-60 text-red-900 fill-red-900"
              strokeWidth={1.5}
            />
            <div className="absolute left-[28%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
            <div className="absolute left-[52%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
          </div>
        </div>
      </div>

{/* ========== SIDE JACK-O-LANTERNS ========== */}

<div className="fixed inset-0 pointer-events-none z-[05] overflow-hidden hidden lg:block">

  {/* ================= LEFT PUMPKIN ================= */}

  <div className="side-pumpkin side-pumpkin-left">

    {/* Deep atmospheric glow */}
    <div className="absolute -inset-12 rounded-full bg-red-700/30 blur-3xl animate-[pumpkinGlow_2.2s_ease-in-out_infinite]" />

    <svg
      viewBox="0 0 260 240"
      className="relative w-full h-full animate-[pumpkinFloat_4s_ease-in-out_infinite]"
    >
      <defs>

        {/* Evil face glow */}
        <filter id="evilGlowLeft">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Dark pumpkin body */}
        <radialGradient id="pumpkinBodyLeft">
          <stop offset="0%" stopColor="#3a1308" />
          <stop offset="55%" stopColor="#210b06" />
          <stop offset="100%" stopColor="#090504" />
        </radialGradient>

        <linearGradient id="pumpkinRidgeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5c1a08" />
          <stop offset="50%" stopColor="#241006" />
          <stop offset="100%" stopColor="#080403" />
        </linearGradient>

      </defs>


      {/* ===== SHADOW ===== */}

      <ellipse
        cx="130"
        cy="220"
        rx="90"
        ry="13"
        fill="#000"
        opacity="0.8"
      />


      {/* ===== STEM ===== */}

      <path
        d="
          M124 55
          C116 38 119 18 139 9
          C151 4 160 11 157 21
          C153 37 142 47 132 59
        "
        fill="#100704"
        stroke="#381006"
        strokeWidth="6"
      />

      {/* ===== CURLING STEM ===== */}

      <path
        d="
          M133 39
          C151 25 169 28 173 40
          C176 50 164 56 154 51
        "
        fill="none"
        stroke="#401207"
        strokeWidth="6"
        strokeLinecap="round"
      />


      {/* ===== PUMPKIN BODY ===== */}

      <path
        d="
          M130 53
          C108 40 75 43 52 58
          C27 74 17 105 22 139
          C27 174 49 202 79 210
          C98 215 116 208 130 199
          C144 208 162 215 181 210
          C211 202 233 174 238 139
          C243 105 233 74 208 58
          C185 43 152 40 130 53Z
        "
        fill="url(#pumpkinBodyLeft)"
        stroke="#3d1107"
        strokeWidth="7"
      />


      {/* ===== DARK PUMPKIN RIDGES ===== */}

      <path
        d="M76 57 C53 91 54 163 82 201"
        fill="none"
        stroke="url(#pumpkinRidgeLeft)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M111 51 C93 91 95 169 112 207"
        fill="none"
        stroke="#351106"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M149 51 C167 91 165 169 148 207"
        fill="none"
        stroke="#351106"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M184 57 C207 91 206 163 178 201"
        fill="none"
        stroke="#210b05"
        strokeWidth="20"
        strokeLinecap="round"
      />


      {/* ================================================= */}
      {/* ================== EVIL EYES ==================== */}
      {/* ================================================= */}

      {/* LEFT RIGHT-ANGLE TRIANGLE EYE */}
<path 
  d="M50 70 L98 105 L50 106 Z" 
  fill="#ff6500" 
  stroke="#ff2500" 
  strokeWidth="4" 
  strokeLinejoin="round" 
  filter="url(#evilGlowLeft)" 
/>
     {/* RIGHT RIGHT-ANGLE TRIANGLE EYE */}
<path
  d="M210 70 L162 105 L210 106 Z"
  fill="#ff6500"
  stroke="#ff2500"
  strokeWidth="4"
  strokeLinejoin="round"
  filter="url(#evilGlowRight)"
/>

      {/* ================================================= */}
      {/* ================= EVIL TRIANGLE NOSE ============ */}
      {/* ================================================= */}

      <path
        d="
          M130 101
          L145 125
          L130 120
          L115 125
          Z
        "
        fill="#ff6200"
        stroke="#ff2500"
        strokeWidth="3"
        filter="url(#evilGlowLeft)"
      />


      {/* ================================================= */}
      {/* ================= JAGGED EVIL MOUTH ============== */}
      {/* ================================================= */}

      <path
        d="
          M43 139

          L58 146
          L70 133
          L84 150
          L99 137
          L113 153
          L130 139
          L147 153
          L161 137
          L176 150
          L190 133
          L202 146
          L217 139

          L209 160
          L195 173
          L181 166
          L166 180
          L151 169
          L138 184
          L130 173
          L122 184
          L109 169
          L94 180
          L79 166
          L65 173
          L51 160
          Z
        "
        fill="#ff5b00"
        stroke="#ff2100"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#evilGlowLeft)"
      />

      {/* Dark inner mouth */}
      <path
        d="
          M54 146
          L69 152
          L82 141
          L96 157
          L111 145
          L125 161
          L130 156
          L135 161
          L149 145
          L164 157
          L178 141
          L191 152
          L206 146

          L198 157
          L183 165
          L168 158
          L153 172
          L139 161
          L130 174
          L121 161
          L107 172
          L92 158
          L77 165
          L62 157
          Z
        "
        fill="#120303"
      />


      {/* ===== LITTLE CRACKS ===== */}

      <path
        d="M52 117 L42 126 L51 132"
        fill="none"
        stroke="#641708"
        strokeWidth="4"
      />

      <path
        d="M208 117 L218 126 L209 132"
        fill="none"
        stroke="#641708"
        strokeWidth="4"
      />

      <path
        d="M94 190 L89 201"
        stroke="#681708"
        strokeWidth="4"
      />

      <path
        d="M166 190 L171 201"
        stroke="#681708"
        strokeWidth="4"
      />

    </svg>
  </div>


  {/* ================= RIGHT PUMPKIN ================= */}

  <div className="side-pumpkin side-pumpkin-right">

    <div className="absolute -inset-12 rounded-full bg-red-700/30 blur-3xl animate-[pumpkinGlow_2.2s_ease-in-out_infinite]" />

    <svg
      viewBox="0 0 260 240"
      className="relative w-full h-full animate-[pumpkinFloat_4s_ease-in-out_infinite_reverse]"
    >
      <defs>

        <filter id="evilGlowRight">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="pumpkinBodyRight">
          <stop offset="0%" stopColor="#3a1308" />
          <stop offset="55%" stopColor="#210b06" />
          <stop offset="100%" stopColor="#090504" />
        </radialGradient>

        <linearGradient id="pumpkinRidgeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5c1a08" />
          <stop offset="50%" stopColor="#241006" />
          <stop offset="100%" stopColor="#080403" />
        </linearGradient>

      </defs>


      {/* ===== SHADOW ===== */}

      <ellipse
        cx="130"
        cy="220"
        rx="90"
        ry="13"
        fill="#000"
        opacity="0.8"
      />


      {/* ===== STEM ===== */}

      <path
        d="
          M124 55
          C116 38 119 18 139 9
          C151 4 160 11 157 21
          C153 37 142 47 132 59
        "
        fill="#100704"
        stroke="#381006"
        strokeWidth="6"
      />

      <path
        d="
          M133 39
          C151 25 169 28 173 40
          C176 50 164 56 154 51
        "
        fill="none"
        stroke="#401207"
        strokeWidth="6"
        strokeLinecap="round"
      />


      {/* ===== BODY ===== */}

      <path
        d="
          M130 53
          C108 40 75 43 52 58
          C27 74 17 105 22 139
          C27 174 49 202 79 210
          C98 215 116 208 130 199
          C144 208 162 215 181 210
          C211 202 233 174 238 139
          C243 105 233 74 208 58
          C185 43 152 40 130 53Z
        "
        fill="url(#pumpkinBodyRight)"
        stroke="#3d1107"
        strokeWidth="7"
      />


      {/* ===== RIDGES ===== */}

      <path
        d="M76 57 C53 91 54 163 82 201"
        fill="none"
        stroke="url(#pumpkinRidgeRight)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M111 51 C93 91 95 169 112 207"
        fill="none"
        stroke="#351106"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M149 51 C167 91 165 169 148 207"
        fill="none"
        stroke="#351106"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M184 57 C207 91 206 163 178 201"
        fill="none"
        stroke="#210b05"
        strokeWidth="20"
        strokeLinecap="round"
      />


      {/* ================================================= */}
      {/* ================== EVIL EYES ==================== */}
      {/* ================================================= */}

{/* LEFT RIGHT-ANGLE TRIANGLE EYE */}
<path 
  d="M50 70 L98 105 L50 106 Z" 
  fill="#ff6500" 
  stroke="#ff2500" 
  strokeWidth="4" 
  strokeLinejoin="round" 
  filter="url(#evilGlowLeft)" 
/>
     {/* RIGHT RIGHT-ANGLE TRIANGLE EYE */}
<path
  d="M210 70 L162 105 L210 106 Z"
  fill="#ff6500"
  stroke="#ff2500"
  strokeWidth="4"
  strokeLinejoin="round"
  filter="url(#evilGlowRight)"
/>

      {/* ================================================= */}
      {/* ================= EVIL TRIANGLE NOSE ============ */}
      {/* ================================================= */}

      <path
        d="
          M130 101
          L145 125
          L130 120
          L115 125
          Z
        "
        fill="#ff6200"
        stroke="#ff2500"
        strokeWidth="3"
        filter="url(#evilGlowRight)"
      />


      {/* ================================================= */}
      {/* ================= JAGGED EVIL MOUTH ============== */}
      {/* ================================================= */}

      <path
        d="
          M43 139

          L58 146
          L70 133
          L84 150
          L99 137
          L113 153
          L130 139
          L147 153
          L161 137
          L176 150
          L190 133
          L202 146
          L217 139

          L209 160
          L195 173
          L181 166
          L166 180
          L151 169
          L138 184
          L130 173
          L122 184
          L109 169
          L94 180
          L79 166
          L65 173
          L51 160
          Z
        "
        fill="#ff5b00"
        stroke="#ff2100"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#evilGlowRight)"
      />

      {/* Dark inner mouth */}
      <path
        d="
          M54 146
          L69 152
          L82 141
          L96 157
          L111 145
          L125 161
          L130 156
          L135 161
          L149 145
          L164 157
          L178 141
          L191 152
          L206 146

          L198 157
          L183 165
          L168 158
          L153 172
          L139 161
          L130 174
          L121 161
          L107 172
          L92 158
          L77 165
          L62 157
          Z
        "
        fill="#120303"
      />


      {/* ===== CRACKS ===== */}

      <path
        d="M52 117 L42 126 L51 132"
        fill="none"
        stroke="#641708"
        strokeWidth="4"
      />

      <path
        d="M208 117 L218 126 L209 132"
        fill="none"
        stroke="#641708"
        strokeWidth="4"
      />

      <path
        d="M94 190 L89 201"
        stroke="#681708"
        strokeWidth="4"
      />

      <path
        d="M166 190 L171 201"
        stroke="#681708"
        strokeWidth="4"
      />

    </svg>
  </div>

</div>

      {/* ========== TOP NAV BAR ========== */}

      <header className="relative z-50 sticky top-0 bg-background/85 backdrop-blur-md border-b border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">

          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavigation(e, '/')}
            className="flex items-center gap-2 shrink-0"
          >
            <span className="text-lg font-headline font-bold text-primary-container tracking-tight drop-shadow-[0_0_10px_rgba(200,30,30,0.3)]">
              VEDATHON
            </span>

            <span className="hidden sm:inline font-mono text-[9px] text-red-400/50 tracking-widest uppercase mt-0.5">
              _2.0
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={cn(
                    'relative px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200',
                    isActive
                      ? 'text-primary-container'
                      : 'text-on-surface/50 hover:text-on-surface'
                  )}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-primary-container shadow-[0_0_6px_rgba(200,30,30,0.5)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-on-surface/60 hover:text-primary-container transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-red-900/30 bg-background/95 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={cn(
                    'flex items-center gap-3 px-5 py-3 font-mono text-xs uppercase tracking-wider border-l-2 transition-colors',
                    isActive
                      ? 'border-primary-container text-primary-container bg-primary-container/5'
                      : 'border-transparent text-on-surface/50 hover:text-on-surface hover:bg-surface-variant'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </header>

      {/* ========== MAIN CONTENT ========== */}

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <Outlet />
      </main>

      {/* Animation keyframes */}
      <style>{`
  @keyframes pageFade {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.35;
  }

  50% {
    opacity: 0.95;
  }

  70% {
    opacity: 0.95;
  }

  100% {
    opacity: 0;
  }
}

@keyframes signalPulse {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  20% {
    opacity: 1;
    transform: scale(1);
  }

  65% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

  @keyframes transitionGlow {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }

    40% {
      opacity: 0.35;
      transform: scale(1);
    }

    75% {
      opacity: 0.15;
      transform: scale(1.08);
    }

    100% {
      opacity: 0;
      transform: scale(1.12);
    }
  }

@keyframes pumpkinFlicker {
  0%, 100% {
    opacity: 0.82;
    transform: translateY(0) scale(1);
  }

  15% {
    opacity: 0.95;
  }

  28% {
    opacity: 0.72;
  }

  42% {
    opacity: 0.9;
    transform: translateY(-1px) scale(1.01);
  }

  55% {
    opacity: 0.78;
  }

  70% {
    opacity: 1;
    transform: translateY(0) scale(1.015);
  }

  86% {
    opacity: 0.75;
  }
}

@keyframes pumpkinGlow {
  0%, 100% {
    opacity: 0.25;
    transform: scale(0.9);
  }

  20% {
    opacity: 0.4;
  }

  42% {
    opacity: 0.18;
  }

  55% {
    opacity: 0.55;
    transform: scale(1.08);
  }

  70% {
    opacity: 0.3;
  }

  85% {
    opacity: 0.48;
  }
}

@keyframes pumpkinFloat {
  0%, 100% {
    transform: translateY(0) rotate(-1deg);
  }

  50% {
    transform: translateY(-5px) rotate(1deg);
  }
}

  @keyframes batFly1 {
    0% {
      left: -25%;
      top: 12%;
      transform: rotate(-12deg) scale(0.7);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      left: 115%;
      top: 3%;
      transform: rotate(8deg) scale(1);
      opacity: 0;
    }
  }

  @keyframes batFly2 {
    0% {
      left: -25%;
      top: 62%;
      transform: rotate(8deg) scale(0.7);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      left: 115%;
      top: 45%;
      transform: rotate(-8deg) scale(1);
      opacity: 0;
    }
  }

  @keyframes batFly3 {
    0% {
      left: 115%;
      top: 20%;
      transform: rotate(-8deg) scale(0.75);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      left: -25%;
      top: 5%;
      transform: rotate(12deg) scale(1);
      opacity: 0;
    }
  }

  @keyframes batFly4 {
    0% {
      left: 115%;
      top: 76%;
      transform: rotate(10deg) scale(0.7);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      left: -25%;
      top: 55%;
      transform: rotate(-10deg) scale(1);
      opacity: 0;
    }
  }

  @keyframes batFly5 {
    0% {
      left: -25%;
      top: 85%;
      transform: rotate(-10deg) scale(0.7);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      left: 115%;
      top: 68%;
      transform: rotate(8deg) scale(1);
      opacity: 0;
    }
  }
    @keyframes batFly6 {
  0% {
    left: -20%;
    top: 38%;
    transform: rotate(10deg) scale(0.6);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    left: 115%;
    top: 28%;
    transform: rotate(-8deg) scale(1);
    opacity: 0;
  }
}

@keyframes batFly7 {
  0% {
    left: 115%;
    top: 55%;
    transform: rotate(-10deg) scale(0.7);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    left: -20%;
    top: 38%;
    transform: rotate(8deg) scale(1);
    opacity: 0;
  }
}

@keyframes batFly8 {
  0% {
    left: -20%;
    top: 5%;
    transform: rotate(-6deg) scale(0.6);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    left: 115%;
    top: 18%;
    transform: rotate(10deg) scale(1);
    opacity: 0;
  }
}

@keyframes batFly9 {
  0% {
    left: 115%;
    top: 90%;
    transform: rotate(8deg) scale(0.65);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    left: -20%;
    top: 75%;
    transform: rotate(-8deg) scale(1);
    opacity: 0;
  }
}
  /* =========================================
   SIDE JACK-O-LANTERNS
   ========================================= */

.side-pumpkin {
  position: absolute;
  bottom: 8px;

  /*
    The main website content is max-w-7xl
    (~1280px wide), so the pumpkins sit
    in the empty margins outside it.
  */
  width: 150px;
  height: 138px;

  z-index: 5;
  opacity: 0.75;
  filter:
    drop-shadow(0 0 10px rgba(255, 45, 0, 0.35))
    drop-shadow(0 0 30px rgba(120, 10, 0, 0.25));
}

/* Left side */

.side-pumpkin-left {
  left: max(10px, calc(50% - 790px));
}

/* Right side */

.side-pumpkin-right {
  right: max(10px, calc(50% - 790px));
}


/* Bigger screens get bigger pumpkins */

@media (min-width: 1800px) {
  .side-pumpkin {
    width: 185px;
    height: 171px;
  }

  .side-pumpkin-left {
    left: max(15px, calc(50% - 805px));
  }

  .side-pumpkin-right {
    right: max(15px, calc(50% - 805px));
  }
}

@media (min-width: 2200px) {
  .side-pumpkin {
    width: 220px;
    height: 203px;
  }

  .side-pumpkin-left {
    left: max(20px, calc(50% - 825px));
  }

  .side-pumpkin-right {
    right: max(20px, calc(50% - 825px));
  }
}
`}</style>
    </div>
  )
}