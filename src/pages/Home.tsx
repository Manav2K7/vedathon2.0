import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export function Home() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let timeoutId: number;

    const scheduleNext = () => {
      // Idle period: 4.0 to 7.0 seconds
      const nextIn = 4000 + Math.random() * 3000;
      timeoutId = window.setTimeout(triggerGlitch, nextIn);
    };

    const triggerGlitch = () => {
      setIsGlitching(true);
      // Burst duration: 120ms to 350ms
      const duration = 120 + Math.random() * 230;
      setTimeout(() => {
        setIsGlitching(false);
        scheduleNext();
      }, duration);
    };

    scheduleNext();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const triggerManualGlitch = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  };

  const activeGlitch = isGlitching || isHovering;

  return (
    <div className="space-y-24 animate-in fade-in duration-700 pb-20">

      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-24 lg:pt-32">
        <div className="relative z-10 max-w-4xl space-y-8">
          
          <h1 
            ref={containerRef}
            onMouseEnter={() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`text-6xl md:text-8xl lg:text-[110px] font-headline font-bold uppercase leading-[0.85] tracking-tighter hero-glitch-container ${activeGlitch ? 'is-glitching' : ''}`}
          >
            <span className="text-on-surface block mb-2 hero-glitch-text light-glitch" data-text="Survive the">
              Survive the
            </span>
            <span className="text-primary block drop-shadow-[0_0_20px_rgba(227,27,22,0.4)] hero-glitch-text heavy-glitch" data-text="Haunted Grid">
              Haunted Grid
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <a 
              href="https://hack2skill.com/event/vedathon2?sectionid=6aba08dfcc541d9410449b62"
              onMouseEnter={triggerManualGlitch}
              className="group relative overflow-hidden bg-[#240a0a] px-8 py-4 border border-primary/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px] hover:border-primary hover:shadow-[0_0_30px_rgba(227,27,22,0.35)] rounded-sm"
            >
              <div className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full opacity-10" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-[shine_1s_ease-out]" />
              <span className="relative z-10 flex items-center gap-2 font-headline text-xl font-bold tracking-widest text-on-surface">
                REGISTER NOW
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </a>
            
            <Link 
              to="/schedule"
              className="group px-8 py-4 flex items-center justify-center border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 rounded-sm"
            >
              <span className="font-headline text-xl font-bold tracking-widest text-on-surface">
                EXPLORE EVENT
              </span>
            </Link>
          </div>

          <div className="pt-8">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#120808]/90 backdrop-blur-md border border-primary/50 px-6 py-4 rounded-sm shadow-[0_0_30px_rgba(227,27,22,0.3)] hover:shadow-[0_0_40px_rgba(227,27,22,0.5)] transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="font-headline text-2xl font-bold tracking-widest text-on-surface uppercase mt-1">
                  Registration Closes
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <span className="font-mono text-xl tracking-[0.2em] text-primary font-bold">
                19 OCT 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM STATUS RAIL */}
      <section className="relative">
        {/* Top border */}
        <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-10">
          
          {/* Rail Item 1 */}
          <div className="relative md:pr-10">
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/10" />
            <div className="text-5xl md:text-7xl font-headline font-bold text-on-surface mb-2 tracking-tighter">500+</div>
            <p className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">PARTICIPANTS</p>
          </div>
          
          {/* Rail Item 2 */}
          <div className="relative md:px-10">
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/10" />
            <div className="text-5xl md:text-7xl font-headline font-bold text-on-surface mb-2 tracking-tighter">80+</div>
            <p className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">TEAMS</p>
          </div>
          
          {/* Rail Item 3 */}
          <div className="md:pl-10">
            <div className="text-5xl md:text-7xl font-headline font-bold text-primary mb-2 tracking-tighter">19 OCT</div>
            <p className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">REGISTRATION CLOSES</p>
          </div>

        </div>
        
        {/* Bottom border */}
        <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
      </section>

    </div>
  )
}
