import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TIMELINE = [
  { id: "01", title: "REGISTRATION", desc: "Arrival, briefing, and system initialization." },
  { id: "02", title: "TEAM FORMATION", desc: "Form squads and align objectives." },
  { id: "03", title: "HACKATHON", desc: "Core development block. The grid is active." },
  { id: "04", title: "ANOMALY INJECTION", desc: "Surprise challenge unlocked for bonus points." },
  { id: "05", title: "SUBMISSION", desc: "Termination sequence. All builds finalized." },
  { id: "06", title: "JUDGING & RESULTS", desc: "Final evaluation and rewards distribution." },
] as const;

export function Schedule() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(100);

  // Path drawing effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollPosition = windowHeight - rect.top;
      // Subtracting a bit so it finishes drawing before it completely scrolls out of view
      const totalScrollable = rect.height + windowHeight * 0.5; 
      
      let rawProgress = scrollPosition / totalScrollable;
      rawProgress = Math.max(0, Math.min(1, rawProgress));
      
      setScrollProgress(100 - (rawProgress * 100));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Intersection Observer for staggered card animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
          entry.target.classList.remove("opacity-0", "translate-y-16", "md:-translate-x-12", "md:translate-x-12");
          // Optionally unobserve if we only want it to animate once:
          // observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    });

    const elements = document.querySelectorAll(".timeline-node-card");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">

      {/* Header */}
      <header className="relative pt-12 md:pt-24 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">
            OPERATION_TIMELINE
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.85] tracking-tighter">
          <span className="text-on-surface block mb-2">Event</span>
          <span className="text-primary block drop-shadow-[0_0_20px_rgba(227,27,22,0.4)]">Schedule</span>
        </h1>
        
        <p className="font-body text-lg text-on-surface-muted font-light leading-relaxed">
          Track your progress through the hackathon phases. Deviation from the timeline may result in unpredictable consequences.
        </p>
      </header>

      {/* Vertical Timeline */}
      <section ref={containerRef} className="relative max-w-4xl mx-auto pt-10 pb-20 overflow-hidden md:overflow-visible">
        
        {/* Center SVG Path for Desktop, Left aligned for Mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-[64px] md:left-1/2 md:-translate-x-1/2 md:w-[300px] pointer-events-none z-0">
          <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(227,27,22,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Background faint path */}
            <path 
              d="M50 0 C50 15, 20 20, 20 35 C20 50, 80 50, 80 65 C80 80, 50 85, 50 100" 
              stroke="#E31B16" 
              strokeOpacity="0.1" 
              strokeWidth="0.5" 
              vectorEffect="non-scaling-stroke" 
            />
            
            {/* Animated drawing path */}
            <path 
              d="M50 0 C50 15, 20 20, 20 35 C20 50, 80 50, 80 65 C80 80, 50 85, 50 100" 
              stroke="url(#path-grad-main)" 
              strokeWidth="1.5" 
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={scrollProgress}
              vectorEffect="non-scaling-stroke" 
              className="transition-all duration-700 ease-out"
            />

            {/* Accent dashed path */}
            <path 
              d="M50 0 C50 20, 30 25, 30 40 C30 55, 70 60, 70 75 C70 90, 50 95, 50 100" 
              stroke="url(#path-grad-accent)" 
              strokeWidth="0.5" 
              pathLength="100"
              strokeDasharray="2 3"
              strokeDashoffset={scrollProgress * 1.5}
              vectorEffect="non-scaling-stroke" 
              className="transition-all duration-700 ease-out"
            />
            
            <defs>
              <linearGradient id="path-grad-main" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E31B16" stopOpacity="0" />
                <stop offset="0.2" stopColor="#E31B16" stopOpacity="1" />
                <stop offset="0.8" stopColor="#FF5A1F" stopOpacity="1" />
                <stop offset="1" stopColor="#E31B16" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="path-grad-accent" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F2E9DC" stopOpacity="0" />
                <stop offset="0.3" stopColor="#F2E9DC" stopOpacity="0.6" />
                <stop offset="0.7" stopColor="#F2E9DC" stopOpacity="0.6" />
                <stop offset="1" stopColor="#F2E9DC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="space-y-16 md:space-y-32 relative z-10">
          {TIMELINE.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center group">
                
                {/* Node Dot (Desktop & Mobile) */}
                <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#080606] border-2 border-primary group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(227,27,22,1)] transition-all duration-500 z-20 rounded-full" />
                
                {/* Content Left / Right */}
                <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:order-last'}`}>
                  
                  {/* Card Container with initial hidden state for animation */}
                  <div 
                    className={`timeline-node-card relative p-8 md:p-10 bg-[#120808]/90 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-700 w-full group-hover:bg-white/[0.03] group-hover:-translate-y-2 opacity-0 translate-y-16 ${isEven ? 'md:-translate-x-12' : 'md:translate-x-12'}`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    
                    {/* Glowing highlight line on hover */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
                      <span className="font-headline text-5xl md:text-7xl font-bold text-white/5 group-hover:text-primary/20 transition-colors duration-500 leading-none tracking-tighter">
                        {item.id}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-headline font-bold text-on-surface uppercase mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="font-body text-on-surface-muted text-base md:text-lg font-light leading-relaxed group-hover:text-on-surface transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}
