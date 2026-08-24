import { HeartHandshake } from "lucide-react";

// PLACEHOLDER: Replace with actual sponsor data when confirmed
const SPONSOR_SLOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "SPONSOR TBA",
}));

export function Sponsors() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">

      {/* Header */}
      <header className="relative bg-surface-container border border-red-900/40 p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary-container/60" />
        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary-container/60" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="w-5 h-5 text-primary-container" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary-container/70 uppercase">
              // ALLIANCE_REGISTRY
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4">
            <span className="text-primary">Our</span>{" "}
            <span className="text-6xl md:text-5xl font-headline font-bold uppercase leading-[0.85] bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,70,20,0.45)]">Sponsors</span>
          </h1>
          <p className="text-on-surface/50 font-body max-w-2xl">
            The entities providing the computational resources and support for this operation. Partnerships fuel the mission.
          </p>
        </div>
      </header>

      {/* Sponsor Grid — Glass Panels */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // PARTNER_GRID
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
          <span className="font-mono text-[10px] tracking-widest text-on-surface/25">
            {SPONSOR_SLOTS.length} SLOTS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPONSOR_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="relative bg-surface-container/60 backdrop-blur-md border border-red-900/30 p-6 flex items-center justify-center h-32 group hover:border-primary-container/30 transition-all duration-300"
            >
              {/* HUD corner brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary-container/25" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary-container/25" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary-container/25" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary-container/25" />

              <div className="text-center">
                {/* PLACEHOLDER: Replace with <img> for real sponsor logos */}
                <p className="font-mono text-[10px] tracking-[0.2em] text-on-surface/25 uppercase">
                  {slot.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="relative bg-surface-container border border-red-900/40 p-8 md:p-12 text-center overflow-hidden">
        <div className="absolute -top-1 -left-1 w-5 h-5 border-t border-l border-primary-container/40" />
        <div className="absolute -top-1 -right-1 w-5 h-5 border-t border-r border-primary-container/40" />
        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b border-l border-primary-container/40" />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b border-r border-primary-container/40" />

        <p className="font-mono text-xs tracking-[0.3em] text-primary-container/60 uppercase mb-4">
          // JOIN_THE_OPERATION
        </p>
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary uppercase mb-4">
          Become a Sponsor
        </h2>
        <p className="text-on-surface/40 font-body max-w-lg mx-auto mb-6">
          Support the next generation of developers. Align your brand with innovation, community, and raw technical talent.
        </p>
        <a
  href="https://www.instagram.com/geekroom_adgips?igsi=MTVpY2h2cnFlcnQ2aA=="
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-primary-container text-white font-headline uppercase font-bold text-sm tracking-widest px-6 py-3 hover:bg-secondary-container hover:shadow-[0_0_20px_rgba(200,30,30,0.3)] transition-all duration-300"
>
  Contact Us
</a>
      </section>
    </div>
  )
}
