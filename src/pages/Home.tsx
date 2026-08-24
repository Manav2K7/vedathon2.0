import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { ChevronRight, Users, Zap, Clock } from "lucide-react";

export function Home() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">

      {/* HERO SECTION */}
      <section className="relative bg-surface-container border border-red-900/40 p-12 md:p-20 overflow-hidden">



        {/* HUD corner brackets */}
        <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-primary-container/60" />
        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-primary-container/60" />

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_12px_rgba(200,30,30,0.9)]" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary-container/70 uppercase">
              // OPERATION: VEDATHON_2.0
            </span>
            <Badge faction="purple">HIGH STAKES</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[1.1] tracking-tighter">
            <span className="text-primary">Survive the</span>
            <br />
            <span className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.85] bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,70,20,0.55)]">
              Haunted Grid
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-body text-on-surface/60 max-w-xl">
            A high-stakes competitive hackathon where only the most resilient developers survive. Build, deploy, and conquer before the timer runs out.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/schedule">
  <Button variant="primary" className="gap-2">
    Enter the Fray <ChevronRight className="w-4 h-4" />
  </Button>
</Link>
            <Link to="/tracks">
  <Button variant="ghost-purple">
    View Directives
  </Button>
</Link>
          </div>
        </div>
      </section>

      {/* SYSTEM STATUS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-primary-container/70 uppercase">
            // SYSTEM_STATUS
          </span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card faction="orange" className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-container/60" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary-container/70 uppercase">// PARTICIPANTS</p>
            </div>
            <div className="text-4xl font-headline font-bold text-primary">500+</div>
            <p className="text-sm text-on-surface/50 font-body">Registered developers across all teams.</p>
          </Card>
          
          <Card faction="purple" className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary-container/60" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-secondary-container/70 uppercase">// TEAMS FORMED</p>
            </div>
            <div className="text-4xl font-headline font-bold text-primary">80+</div>
            <p className="text-sm text-on-surface/50 font-body">Teams currently assembled for the challenge.</p>
          </Card>
          
          <Card faction="green" className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-tertiary-container/60" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-tertiary-container/70 uppercase">// HOURS REMAINING</p>
            </div>
            <div className="text-4xl font-headline font-bold text-primary animate-pulse">TBA</div>
            <p className="text-sm text-on-surface/50 font-body">Countdown begins at event kickoff.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}
