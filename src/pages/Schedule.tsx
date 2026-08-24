import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Calendar } from "lucide-react";

const TIMELINE = [
  { time: "09:00", title: "INITIALIZATION PROTOCOL", desc: "Registration & Briefing", faction: "purple" },
  { time: "10:30", title: "SYSTEMS NOMINAL", desc: "Hacking Begins", faction: "green" },
  { time: "13:00", title: "RATION DISPENSARY", desc: "Lunch Break", faction: "orange" },
  { time: "18:00", title: "ANOMALY INJECTION", desc: "Surprise Challenge Unlocked", faction: "purple" },
  { time: "23:59", title: "TERMINATION SEQUENCE", desc: "Submissions Close", faction: "orange" },
] as const;

// PLACEHOLDER: Replace TBA banners with confirmed content when available
const BANNERS = [
  { title: "DAY 1 KICKOFF", desc: "Opening ceremony and track introductions.", time: "TBA" },
  { title: "WORKSHOP BLOCK", desc: "Technical workshops and mentor-led sessions.", time: "TBA" },
  { title: "MENTOR ROUNDS", desc: "One-on-one guidance from industry experts.", time: "TBA" },
  { title: "FINAL PITCH NIGHT", desc: "Team presentations and judging.", time: "TBA" },
];

export function Schedule() {
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
            <Calendar className="w-5 h-5 text-primary-container" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary-container/70 uppercase">
              // FIELD_TIMELINE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4">
            <span className="text-primary">Event</span>{" "}
            <span className="text-6xl md:text-5xl font-headline font-bold uppercase leading-[0.85] bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,70,20,0.45)]">Schedule</span>
          </h1>
          <p className="text-on-surface/50 font-body max-w-2xl">
            Track your progress through the hackathon phases. Deviation from the timeline may result in unpredictable consequences.
          </p>
        </div>
      </header>

      {/* TBA Banners */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // EVENT_BANNERS
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BANNERS.map((banner, i) => (
            <div
              key={i}
              className="relative bg-surface-container border border-red-900/40 p-6 backdrop-blur-sm group hover:border-primary-container/30 transition-colors duration-300"
            >
              {/* HUD corner brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary-container/40" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary-container/40" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary-container/40" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary-container/40" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-primary-container/60 uppercase mb-2">
                    {banner.title}
                  </p>
                  <p className="text-sm text-on-surface/50 font-body">
                    {banner.desc}
                  </p>
                </div>
                <span className="font-mono text-xs text-primary-container/80 bg-primary-container/10 border border-primary-container/30 px-2 py-1 shrink-0">
                  {banner.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // DETAILED_TIMELINE
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>

        <div className="relative border-l-2 border-red-900/50 ml-4 md:ml-8 pl-8 space-y-12 py-4">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-sm bg-background border-primary-container group-hover:bg-primary-container group-hover:shadow-[0_0_12px_rgba(200,30,30,0.6)] transition-all duration-300" />
              
              <Card faction={item.faction} className="max-w-3xl hover:translate-x-2 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div>
                    <Badge faction={item.faction} className="mb-2">{item.time}</Badge>
                    <h3 className="text-2xl font-headline font-semibold text-primary">{item.title}</h3>
                    <p className="text-on-surface/50 font-body text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
