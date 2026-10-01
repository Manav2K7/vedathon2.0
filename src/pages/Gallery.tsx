import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

function LazyImage({ 
  src, 
  alt, 
  className, 
  loading = "lazy" 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  loading?: "lazy" | "eager" 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={cn(
        className,
        "transition-[opacity,filter,transform] duration-[1200ms] ease-out",
        isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
      )}
    />
  );
}

const MEMORIES = [
  { id: 1, image: "/Gallery/1.jpeg", label: "ARCHIVE_01" },
  { id: 2, image: "/Gallery/2.jpeg", label: "ARCHIVE_02" },
  { id: 3, image: "/Gallery/3.jpeg", label: "ARCHIVE_03" },
  { id: 4, image: "/Gallery/4.jpeg", label: "ARCHIVE_04" },
  { id: 5, image: "/Gallery/5.jpeg", label: "ARCHIVE_05" },
  { id: 6, image: "/Gallery/6.jpeg", label: "ARCHIVE_06" },
  { id: 7, image: "/Gallery/7.jpeg", label: "ARCHIVE_07" },
  { id: 8, image: "/Gallery/8.jpeg", label: "ARCHIVE_08" },
  { id: 9, image: "/Gallery/9.jpeg", label: "ARCHIVE_09" },
  { id: 10, image: "/Gallery/10.jpeg", label: "ARCHIVE_10" },
  { id: 11, image: "/Gallery/11.jpeg", label: "ARCHIVE_11" },
  { id: 12, image: "/Gallery/12.jpeg", label: "ARCHIVE_12" },
];

const LOGS = [
  {
    quote: "Every build starts somewhere. Every late night leaves a trace.",
    name: "SURVIVOR_01",
    role: "FRONTEND OPERATIVE",
  },
  {
    quote: "The best memories are the ones that never made it into the official logs.",
    name: "SURVIVOR_02",
    role: "SYSTEM ARCHITECT",
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? null : current === 0 ? MEMORIES.length - 1 : current - 1
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : current === MEMORIES.length - 1 ? 0 : current + 1
        );
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  const openMemory = (index: number) => setSelectedIndex(index);
  const previousMemory = () => {
    setSelectedIndex((current) =>
      current === null ? null : current === 0 ? MEMORIES.length - 1 : current - 1
    );
  };
  const nextMemory = () => {
    setSelectedIndex((current) =>
      current === null ? null : current === MEMORIES.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="space-y-24 animate-in fade-in duration-700">

      {/* HERO */}
      <section className="relative bg-surface-container border border-red-900/40 p-12 md:p-20 overflow-hidden text-center">

        <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-primary-container/60" />
        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary-container/60" />
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-primary-container/60" />

        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.35em] text-primary-container/70 mb-5 uppercase">
            // FIELD_ARCHIVES
          </p>

          <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.85]">
            <span className="text-primary">Hall of</span>
            <br />
            <span className="text-5xl sm:text-5xl md:text-8xl font-headline font-bold uppercase leading-[0.9] bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,70,20,0.55)]">
              Memories
            </span>
          </h1>

          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-px bg-red-900/50" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-on-surface/50">
              VEDATHON // ARCHIVE
            </span>
            <div className="w-12 h-px bg-red-900/50" />
          </div>

          <div className="grid grid-cols-3 max-w-2xl mx-auto mt-10">
            <div className="text-center">
              <p className="font-headline text-2xl md:text-3xl font-bold text-primary">500+</p>
              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-on-surface/60 mt-1">PARTICIPANTS</p>
            </div>
            <div className="text-center border-x border-red-900/40">
              <p className="font-headline text-2xl md:text-3xl font-bold text-primary">50+</p>
              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-on-surface/60 mt-1">IDEAS FORGED</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-2xl md:text-3xl font-bold text-primary">3</p>
              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-on-surface/60 mt-1">EDITIONS</p>
            </div>
          </div>

          <p className="font-body text-on-surface/50 max-w-2xl mx-auto mt-8 text-sm md:text-base leading-relaxed">
            A collection of moments captured across the Vedathon journey.
            Not every memory belongs in a report. Some are better left in the archive.
          </p>
        </div>
      </section>

      {/* ARCHIVE STATUS */}
      <section className="border-y border-red-900/40">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="p-5 md:p-6 border-r border-red-900/30">
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 uppercase">ARCHIVE</p>
            <p className="font-headline text-2xl md:text-3xl font-bold text-primary mt-1">12</p>
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 mt-1">MEMORIES</p>
          </div>
          <div className="p-5 md:p-6 border-r border-red-900/30">
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 uppercase">STATUS</p>
            <p className="font-headline text-2xl md:text-3xl font-bold text-primary-container mt-1">LIVE</p>
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 mt-1">DATABASE</p>
          </div>
          <div className="p-5 md:p-6 border-r border-red-900/30">
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 uppercase">ACCESS</p>
            <p className="font-headline text-2xl md:text-3xl font-bold text-primary-container mt-1">OPEN</p>
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 mt-1">VERIFIED</p>
          </div>
          <div className="p-5 md:p-6">
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 uppercase">PROTOCOL</p>
            <p className="font-headline text-2xl md:text-3xl font-bold text-primary mt-1">V2.0</p>
            <p className="font-mono text-[9px] tracking-widest text-on-surface/50 mt-1">VEDATHON</p>
          </div>
        </div>
      </section>

      {/* FEATURED MEMORY */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-primary-container/70">// FEATURED_RECORD</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase mt-2 text-primary">The Archive</h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] tracking-widest text-on-surface/25">01 / 12</div>
        </div>

        <div className="p-2 md:p-3 group cursor-pointer border border-white/5 bg-[#120808]/60 hover:bg-[#1a0a0a] transition-colors" onClick={() => openMemory(0)}>
          <div className="relative aspect-[16/8] overflow-hidden bg-surface-variant">
            <LazyImage
              src={MEMORIES[0].image}
              alt="Vedathon memory 01"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
            <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/10 transition-colors duration-500" />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="border border-red-800/40 bg-black/50 backdrop-blur-sm px-3 py-2">
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/80">MEMORY_01</span>
              </div>
              <div className="border border-red-800/40 bg-black/50 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-primary-container animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.25em] text-white/60">ARCHIVE_RECORD // VERIFIED</span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-headline text-2xl md:text-4xl font-bold uppercase text-white">A Moment In The Protocol</h3>
                  <p className="font-mono text-[9px] tracking-widest text-white/50 mt-2">CLICK TO OPEN FULL RECORD</p>
                </div>
                <span className="hidden sm:block font-mono text-[10px] text-primary-container">VEDATHON // 001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMORY GRID */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-primary-container/70">// MEMORY_DATABASE</span>
          <div className="h-px flex-1 bg-red-900/40" />
          <span className="font-mono text-[10px] tracking-widest text-on-surface/25">11 RECORDS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {MEMORIES.slice(1).map((memory, index) => {
            const actualIndex = index + 1;
            const large = actualIndex === 3 || actualIndex === 7 || actualIndex === 10;

            return (
              <div key={memory.id} className={large ? "md:col-span-7" : "md:col-span-5"}>
                <div
                  className="p-2 group cursor-pointer h-full border border-white/5 bg-[#120808]/60 hover:bg-[#1a0a0a] transition-colors"
                  onClick={() => openMemory(actualIndex)}
                >
                  <div className={`relative overflow-hidden bg-surface-variant ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <div className={memory.id === 10 ? "absolute inset-0 rotate-90 scale-[1.33]" : "absolute inset-0"}>
                      <LazyImage
                        src={memory.image}
                        alt={`Vedathon memory ${memory.id}`}
                        loading={actualIndex < 5 ? "eager" : "lazy"}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-red-600/50 group-hover:border-primary-container transition-colors" />
                      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-red-600/50 group-hover:border-primary-container transition-colors" />
                      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-red-600/50 group-hover:border-primary-container transition-colors" />
                      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-red-600/50 group-hover:border-primary-container transition-colors" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-red-800/40 px-2 py-1">
                      <span className="font-mono text-[9px] tracking-widest text-white/80">{memory.label}</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <p className="font-mono text-[8px] tracking-[0.25em] text-white/50">FIELD_MEMORY</p>
                        <p className="font-headline font-bold text-lg md:text-xl text-white uppercase">Vedathon Archive</p>
                      </div>
                      <span className="font-mono text-[9px] text-primary-container">
                        {String(memory.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SURVIVOR LOGS */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary-container/70">// SURVIVOR_LOGS</span>
          <div className="h-px flex-1 bg-red-900/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {LOGS.map((log, index) => (
            <div key={index} className="p-6 md:p-8 group border border-white/5 bg-[#120808]/60 hover:bg-[#1a0a0a] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="relative">
                <span className="absolute top-0 right-0 font-headline text-6xl text-on-surface/10 leading-none">&ldquo;</span>
                <p className="font-mono text-[9px] tracking-[0.25em] text-on-surface/35 mb-5">
                  LOG_ENTRY_{String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-body text-on-surface/60 text-sm md:text-base leading-relaxed max-w-md">
                  &ldquo;{log.quote}&rdquo;
                </p>
                <div className="border-t border-red-900/30 mt-8 pt-5 flex items-center gap-4">
                  <div className="w-10 h-10 border border-red-900/40 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-primary-container">X_</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase text-primary">{log.name}</p>
                    <p className="font-mono text-[9px] tracking-widest text-on-surface/40 mt-1">{log.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="pb-4">
        <div className="border-t border-red-900/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-on-surface/30">END_OF_ARCHIVE</p>
            <p className="font-headline text-xl font-bold uppercase mt-1 text-primary">The protocol continues</p>
          </div>
          <Link
            to="/"
            className="border border-primary-container/50 bg-primary-container/5 px-6 py-3 font-mono text-[10px] tracking-[0.2em] uppercase text-primary-container hover:bg-primary-container hover:text-on-primary transition-all duration-300"
          >
            See This Year&apos;s Event →
          </Link>
        </div>
      </section>

      {/* FULLSCREEN PHOTO VIEWER */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-container animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/60">
                ARCHIVE_VIEWER // {MEMORIES[selectedIndex].label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="text-white/70 hover:text-primary-container transition-colors p-2"
              aria-label="Close photo viewer"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <button
            type="button"
            onClick={previousMemory}
            className="absolute left-3 md:left-8 z-20 text-white/60 hover:text-primary-container transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
          </button>

          <div className="w-full max-w-6xl h-[82vh] flex items-center justify-center">
            <div className={`relative max-w-full max-h-full ${MEMORIES[selectedIndex].id === 10 ? "rotate-90" : ""}`}>
              <LazyImage
                src={MEMORIES[selectedIndex].image}
                alt={`Vedathon memory ${MEMORIES[selectedIndex].id}`}
                loading="eager"
                className="max-w-full max-h-[78vh] object-contain"
              />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-primary-container" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary-container" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-primary-container" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-primary-container" />
            </div>
          </div>

          <button
            type="button"
            onClick={nextMemory}
            className="absolute right-3 md:right-8 z-20 text-white/60 hover:text-primary-container transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/60">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(MEMORIES.length).padStart(2, "0")}
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-white/30 hidden md:block">
              USE ← → TO NAVIGATE // ESC TO CLOSE
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
