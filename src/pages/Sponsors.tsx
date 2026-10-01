import { HeartHandshake } from "lucide-react";

// PLACEHOLDER: Replace with actual sponsor data when confirmed
const SPONSOR_SLOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "SPONSOR TBA",
}));

export function Sponsors() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">

      {/* Header */}
      <header className="relative pt-12 md:pt-24 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3">
          <HeartHandshake className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">
            ALLIANCE_REGISTRY
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.85] tracking-tighter">
          <span className="text-on-surface block mb-2">Our</span>
          <span className="text-primary block drop-shadow-[0_0_20px_rgba(227,27,22,0.4)]">Sponsors</span>
        </h1>
        
        <p className="font-body text-lg text-on-surface-muted font-light leading-relaxed">
          The entities providing the computational resources and support for this operation. Partnerships fuel the mission.
        </p>
      </header>

      {/* Sponsor Grid */}
      <section className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
            // PARTNER_GRID
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          <span className="font-mono text-[10px] tracking-widest text-on-surface-muted">
            {SPONSOR_SLOTS.length} SLOTS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
          {SPONSOR_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="relative bg-[#080606] p-8 flex items-center justify-center h-40 group hover:bg-[#120808] transition-colors duration-500 overflow-hidden"
            >
              {/* Subtle hover reveal */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-center relative z-10">
                {/* PLACEHOLDER: Replace with <img> for real sponsor logos */}
                <p className="font-headline text-xl font-bold tracking-widest text-on-surface-muted group-hover:text-white transition-colors duration-300 uppercase">
                  {slot.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="max-w-3xl mx-auto relative text-center mt-20 p-12 overflow-hidden group">
        <div className="absolute inset-0 bg-[#120808]/80 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <div className="relative z-10 space-y-6">
          <p className="font-mono text-sm tracking-[0.3em] text-primary uppercase">
            // JOIN_THE_OPERATION
          </p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface uppercase tracking-tight">
            Become a Sponsor
          </h2>
          <p className="text-on-surface-muted font-body text-lg font-light leading-relaxed max-w-lg mx-auto">
            Support the next generation of developers. Align your brand with innovation, community, and raw technical talent.
          </p>
          <div className="pt-4">
            <a
              href="https://www.instagram.com/geekroom_adgips?igsi=MTVpY2h2cnFlcnQ2aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-headline uppercase font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
