import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Trophy } from "lucide-react";

// PLACEHOLDER: Replace TBA with actual prize amounts when confirmed
const PODIUM = [
  { place: "1ST", label: "1ST PLACE", amount: "TBA", height: "h-40 md:h-52", glow: true },
  { place: "2ND", label: "2ND PLACE", amount: "TBA", height: "h-32 md:h-40", glow: false },
  { place: "3RD", label: "3RD PLACE", amount: "TBA", height: "h-28 md:h-32", glow: false },
];

export function Prizes() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">

      {/* Header */}
      <header className="relative bg-surface-container border border-red-900/40 p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary-container/60" />
        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary-container/60" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-primary-container" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary-container/70 uppercase">
              // LOOT_DATABASE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4">
            <span className="text-primary">Loot</span>{" "}
            <span className="text-primary-container drop-shadow-[0_0_15px_rgba(200,30,30,0.4)]">& Rewards</span>
          </h1>
          <p className="text-on-surface/50 font-body max-w-2xl">
            High stakes yield high rewards. Review the spoils available for those who outlast the competition.
          </p>
        </div>
      </header>

      {/* Podium */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // PODIUM
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>

        <div className="flex items-end justify-center gap-4 md:gap-6 pt-8">
          {/* 2nd Place — left */}
          <div className="flex flex-col items-center gap-3 flex-1 max-w-[180px]">
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary-container/60 mb-1">{PODIUM[1].label}</p>
              <p className="text-2xl md:text-3xl font-headline font-bold text-primary">{PODIUM[1].amount}</p>
            </div>
            <div className={`w-full ${PODIUM[1].height} bg-surface-container border border-red-900/40 flex items-center justify-center relative`}>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary-container/30" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary-container/30" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary-container/30" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary-container/30" />
              <span className="text-4xl font-headline font-bold text-on-surface/20">2</span>
            </div>
          </div>

          {/* 1st Place — center */}
          <div className="flex flex-col items-center gap-3 flex-1 max-w-[220px]">
            <Trophy className="w-6 h-6 text-primary-container mb-1" />
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary-container/60 mb-1">{PODIUM[0].label}</p>
              <p className="text-3xl md:text-4xl font-headline font-bold text-primary drop-shadow-[0_0_10px_rgba(240,230,210,0.3)]">{PODIUM[0].amount}</p>
            </div>
            <div className={`w-full ${PODIUM[0].height} bg-surface-container border-2 border-primary-container/50 flex items-center justify-center relative shadow-[0_0_30px_rgba(200,30,30,0.15)]`}>
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-primary-container/60" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-primary-container/60" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-primary-container/60" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-primary-container/60" />
              <span className="text-5xl font-headline font-bold text-primary-container/20">1</span>
            </div>
          </div>

          {/* 3rd Place — right */}
          <div className="flex flex-col items-center gap-3 flex-1 max-w-[180px]">
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary-container/60 mb-1">{PODIUM[2].label}</p>
              <p className="text-2xl md:text-3xl font-headline font-bold text-primary">{PODIUM[2].amount}</p>
            </div>
            <div className={`w-full ${PODIUM[2].height} bg-surface-container border border-red-900/40 flex items-center justify-center relative`}>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary-container/30" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary-container/30" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary-container/30" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary-container/30" />
              <span className="text-4xl font-headline font-bold text-on-surface/20">3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Awards — placeholder cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // SPECIAL_AWARDS
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PLACEHOLDER: Replace with actual special award categories */}
          {["Best UI/UX", "Most Innovative", "People's Choice"].map((award, i) => (
            <Card key={i} faction={i === 0 ? "orange" : i === 1 ? "purple" : "green"}>
              <Badge faction={i === 0 ? "orange" : i === 1 ? "purple" : "green"} className="mb-4">
                {award.toUpperCase().replace(/ /g, "_")}
              </Badge>
              <h3 className="text-lg font-headline font-bold text-primary uppercase mb-2">{award}</h3>
              <p className="text-sm text-on-surface/40 font-body">TBA</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
