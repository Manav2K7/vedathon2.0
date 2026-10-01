import { Trophy } from "lucide-react";

export function Prizes() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">

      {/* Header */}
      <header className="relative pt-12 md:pt-24 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">
            PRIZE_POOL
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.85] tracking-tighter">
          <span className="text-on-surface block mb-2">The</span>
          <span className="text-primary block drop-shadow-[0_0_20px_rgba(227,27,22,0.4)]">Reward</span>
        </h1>
        
        <p className="font-body text-lg text-on-surface-muted font-light leading-relaxed">
          High stakes yield high rewards. Review the spoils available for those who outlast the competition.
        </p>
      </header>

      {/* Main Prize */}
      <section className="relative max-w-4xl mx-auto text-center pt-10">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase text-on-surface-muted tracking-[0.3em] mb-4">
              GRAND CHAMPION
            </h2>
            <div className="text-[80px] md:text-[140px] lg:text-[180px] font-headline font-black text-on-surface leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(227,27,22,0.5)]">
              ₹XX,XXX
            </div>
            <div className="mt-8 flex justify-center">
              <span className="font-mono text-sm tracking-widest text-primary border border-primary/20 bg-primary/10 px-4 py-2">
                1ST PLACE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Prizes */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-16 border-t border-white/10">
        
        <div className="text-center md:text-right">
          <h2 className="text-xl md:text-2xl font-headline font-bold uppercase text-on-surface-muted tracking-[0.2em] mb-2">
            RUNNER UP
          </h2>
          <div className="text-[60px] md:text-[80px] font-headline font-black text-on-surface leading-none tracking-tighter">
            ₹X,XXX
          </div>
          <div className="mt-4 flex md:justify-end justify-center">
            <span className="font-mono text-xs tracking-widest text-on-surface-muted border border-white/10 px-3 py-1">
              2ND PLACE
            </span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-headline font-bold uppercase text-on-surface-muted tracking-[0.2em] mb-2">
            SECOND RUNNER UP
          </h2>
          <div className="text-[60px] md:text-[80px] font-headline font-black text-on-surface leading-none tracking-tighter">
            ₹X,XXX
          </div>
          <div className="mt-4 flex md:justify-start justify-center">
            <span className="font-mono text-xs tracking-widest text-on-surface-muted border border-white/10 px-3 py-1">
              3RD PLACE
            </span>
          </div>
        </div>

      </section>

      {/* Special Prizes */}
      <section className="max-w-4xl mx-auto pt-16">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
        
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            SPECIAL_AWARDS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["BEST UI/UX", "MOST INNOVATIVE", "PEOPLE'S CHOICE"].map((award) => (
            <div key={award} className="text-center space-y-4">
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-wider">{award}</h3>
              <div className="text-4xl font-headline font-bold text-on-surface-muted">TBA</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
