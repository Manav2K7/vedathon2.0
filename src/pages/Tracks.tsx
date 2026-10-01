import { Layers } from "lucide-react";

const TRACKS = [
  {
    id: "01",
    name: "OPEN INNOVATION",
    desc: "Tackle any real-world problem with a creative, unconstrained approach. No boundaries — just raw innovation applied to challenges that matter.",
  },
  {
    id: "02",
    name: "IoT & ROBOTICS",
    desc: "Design connected solutions that bridge the physical and digital worlds. Smart sensors, edge computing, and real-time data.",
  },
  {
    id: "03",
    name: "WEB3 & BLOCKCHAIN",
    desc: "Explore decentralized applications, trustless systems, and reimagine how value and identity flow across the internet.",
  },
  {
    id: "04",
    name: "APP DEVELOPMENT",
    desc: "Craft mobile or web applications that solve specific user pain points. Focus on UX, performance, and real-world usability.",
  },
  {
    id: "05",
    name: "SUSTAINABLE DEV",
    desc: "Build technology that addresses environmental and social sustainability. Code for a livable future.",
  },
];

export function Tracks() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">

      {/* Header */}
      <header className="relative pt-12 md:pt-24 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3">
          <Layers className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm tracking-[0.2em] text-on-surface-muted uppercase">
            CHALLENGE_DIRECTIVES
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.85] tracking-tighter">
          <span className="text-on-surface block mb-2">Hackathon</span>
          <span className="text-primary block drop-shadow-[0_0_20px_rgba(227,27,22,0.4)]">Tracks</span>
        </h1>
        
        <p className="font-body text-lg text-on-surface-muted font-light leading-relaxed">
          Five domains. Pick your battlefield and build something that matters.
        </p>
      </header>

      {/* Track Blocks */}
      <div className="max-w-4xl mx-auto space-y-4">
        {TRACKS.map((track) => (
          <div 
            key={track.id} 
            className="group relative bg-[#120808]/60 border border-white/5 hover:bg-[#1a0a0a] transition-all duration-500 overflow-hidden"
          >
            {/* Hover reveal line */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center">
              {/* Large Number */}
              <div className="shrink-0 text-7xl md:text-[100px] font-headline font-bold leading-none text-white/5 group-hover:text-primary/20 transition-colors duration-500 tracking-tighter">
                {track.id}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-headline font-bold uppercase text-on-surface mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {track.name}
                </h3>
                <p className="text-on-surface-muted font-body text-lg leading-relaxed max-w-2xl font-light">
                  {track.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
