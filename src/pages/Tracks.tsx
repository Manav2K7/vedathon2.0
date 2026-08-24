import { Card } from "../components/Card";
import { Layers, Wifi, Globe, Smartphone, Leaf } from "lucide-react";

const TRACKS = [
  {
    name: "Open Innovation",
    icon: Layers,
    desc: "Tackle any real-world problem with a creative, unconstrained approach. No boundaries — just raw innovation applied to challenges that matter.",
    // PLACEHOLDER: Replace with actual problem statement
  },
  {
    name: "IoT",
    icon: Wifi,
    desc: "Design connected solutions that bridge the physical and digital worlds. Smart sensors, edge computing, and real-time data — build the infrastructure of tomorrow.",
    // PLACEHOLDER: Replace with actual problem statement
  },
  {
    name: "Web3",
    icon: Globe,
    desc: "Explore decentralized applications, blockchain integrations, and trustless systems. Reimagine how value, identity, and data flow across the internet.",
    // PLACEHOLDER: Replace with actual problem statement
  },
  {
    name: "App Development",
    icon: Smartphone,
    desc: "Craft mobile or web applications that solve specific user pain points. Focus on UX, performance, and real-world usability under hackathon constraints.",
    // PLACEHOLDER: Replace with actual problem statement
  },
  {
    name: "Sustainable Development",
    icon: Leaf,
    desc: "Build technology that addresses environmental and social sustainability. From carbon tracking to resource optimization — code for a livable future.",
    // PLACEHOLDER: Replace with actual problem statement
  },
];

export function Tracks() {
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
            <Layers className="w-5 h-5 text-primary-container" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary-container/70 uppercase">
              // TRACK_DATABASE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4">
            <span className="text-primary">Challenge</span>{" "}
            <span className="text-6xl md:text-6xl font-headline font-bold uppercase leading-[0.85] bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,70,20,0.45)]">Tracks</span>
          </h1>
          <p className="text-on-surface/50 font-body max-w-2xl">
            Five domains. Five problem spaces. Pick your battlefield and build something that matters.
          </p>
        </div>
      </header>

      {/* Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TRACKS.map((track, i) => (
          <Card key={i} faction={i % 2 === 0 ? "orange" : "purple"} className="group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-red-900/50 flex items-center justify-center shrink-0">
                <track.icon className="w-5 h-5 text-primary-container/70" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold uppercase text-primary mb-2">
                  {track.name}
                </h3>
                <p className="text-sm text-on-surface/50 font-body leading-relaxed">
                  {track.desc}
                </p>
                {/* PLACEHOLDER: Add actual problem statement content here */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
