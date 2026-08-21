import { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Skull, Calendar, Image, Trophy, HeartHandshake, Users, Layers, Menu, X } from 'lucide-react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-background text-on-surface overflow-x-hidden">

      {/* Global Background Image + Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* 1. Background image — full-bleed, fixed so it doesn't tile on scroll */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("/Halloween/GalleryBg.png")' }}
        />
        {/* 2. Dark overlay — keeps text readable while image shows through */}
        <div className="absolute inset-0 bg-black/65" />
        {/* 3. Red vignette — edges fade to dark red/black, site-wide */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(10,5,5,0.9)_100%)]" />

        {/* Purple atmosphere glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
          style={{
            background:
              'radial-gradient(circle at bottom left, rgba(200,30,30,0.45), transparent 70%)'
          }}
        />
        {/* Orange atmosphere glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(224,32,31,0.3), transparent 70%)'
          }}
        />
        {/* Left skull */}
        <div className="absolute left-[4%] top-[30%] -rotate-12 opacity-[0.035]">
          <div className="relative">
            <Skull className="w-40 h-40 md:w-52 md:h-52 text-red-900 fill-red-900" strokeWidth={1.5} />
            <div className="absolute left-[28%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
            <div className="absolute left-[52%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
          </div>
        </div>
        {/* Right skull */}
        <div className="absolute right-[3%] bottom-[15%] rotate-12 opacity-[0.04]">
          <div className="relative">
            <Skull className="w-48 h-48 md:w-60 md:h-60 text-red-900 fill-red-900" strokeWidth={1.5} />
            <div className="absolute left-[28%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
            <div className="absolute left-[52%] top-[34%] w-[20%] h-[22%] rounded-full bg-black/60" />
          </div>
        </div>
      </div>

      {/* ========== TOP NAV BAR ========== */}
      <header className="relative z-50 sticky top-0 bg-background/85 backdrop-blur-md border-b border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
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
                  className={cn(
                    "relative px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200",
                    isActive
                      ? "text-primary-container"
                      : "text-on-surface/50 hover:text-on-surface"
                  )}
                >
                  {item.label}
                  {/* Active underline */}
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
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 font-mono text-xs uppercase tracking-wider border-l-2 transition-colors",
                    isActive
                      ? "border-primary-container text-primary-container bg-primary-container/5"
                      : "border-transparent text-on-surface/50 hover:text-on-surface hover:bg-surface-variant"
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

    </div>
  )
}
