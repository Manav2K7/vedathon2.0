import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Skull,
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: "001",
    name: "AYUSH CHOUDHARY",
    role: "PRESIDENT",
    faction: "orange",
    access: "EXEC_OP // ROOT_ACCESS",
    image: "/Team/Ayush Choudhary President.jpeg",
    position: "center 60%",
    linkedin: "https://www.linkedin.com/in/ayush-choudhary-29aa01325",
  },
  {
    id: "002",
    name: "RIYA",
    role: "VICE PRESIDENT",
    faction: "purple",
    access: "EXEC_OP // VICE_ACCESS",
    image: "/Team/Riya Vice president.jpeg",
    position: "center 100%",
    linkedin: "https://www.linkedin.com/in/riya-mittal12426/",
  },
  {
    id: "003",
    name: "SUMIT KUMAR",
    role: "GENERAL SECRETARY",
    faction: "green",
    access: "ADMIN_OP // CORE_ACCESS",
    image: "/Team/Sumit kumar general secretary.jpeg",
    position: "center 55%",
    linkedin: "https://www.linkedin.com/in/sumit-kumar2s205ksk",
  },
  {
    id: "004",
    name: "PRAGYA SONI",
    role: "JOINT SECRETARY",
    faction: "orange",
    access: "ADMIN_OP // SECRETARY_ACCESS",
    image: "/Team/Pragya soni Joint secretary.jpeg",
    position: "center 15%",
    linkedin: "https://www.linkedin.com/in/pragya1613/",
  },
  {
    id: "005",
    name: "HIMANSHU PATHAK",
    role: "AIML LEAD",
    faction: "purple",
    access: "AI_OP // MODEL_ACCESS",
    image: "/Team/Himanshu pathak aiml lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/himanshu-pathak-",
  },
  {
    id: "006",
    name: "HIMANSHU SHARMA",
    role: "EMERGING TECH LEAD",
    faction: "green",
    access: "TECH_OP // INNOVATION_ACCESS",
    image: "/Team/Himanshu sharma emerging tech lead.jpeg",
    position: "center 20%",
    linkedin: "https://in.linkedin.com/in/himanshu-sharma-1ba657318",
  },
  {
    id: "007",
    name: "MOIN KHAN",
    role: "DSA LEAD",
    faction: "orange",
    access: "DSA_OP // ALGORITHM_ACCESS",
    image: "/Team/Moin khan Dsa lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/moin-khan-273a18327",
  },
  {
    id: "008",
    name: "MANAV",
    role: "WEB DEV LEAD",
    faction: "purple",
    access: "WEB_OP // FULLSTACK_ACCESS",
    image: "/Team/Manav Web dev lead.jpeg",
    position: "center 35%",
    linkedin: "https://www.linkedin.com/in/manav-garg0007",
  },
  {
    id: "009",
    name: "UTSAV GARG",
    role: "MARKETING LEAD",
    faction: "green",
    access: "MKT_OP // OUTREACH_ACCESS",
    image: "/Team/Utsav garg marketing lead.jpeg",
    position: "center 95%",
    linkedin: "https://www.linkedin.com/in/utsav-garg-5a624336b",
  },
  {
    id: "010",
    name: "REACHAL JAIN",
    role: "SOCIAL MEDIA LEAD",
    faction: "orange",
    access: "SOCIAL_OP // MEDIA_ACCESS",
    image: "/Team/Reachal jain social media lead.jpeg",
    position: "center 60%",
    linkedin: "https://www.linkedin.com/in/reachal-jain-0946a536b",
  },
  {
    id: "011",
    name: "YASH",
    role: "WEB DEV CO LEAD",
    faction: "purple",
    access: "WEB_OP // CO_LEAD_ACCESS",
    image: "/Team/yash web dev co lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/yashbuilds",
  },
  {
    id: "012",
    name: "SHAMBHAVI",
    role: "EMERGING TECH CO LEAD",
    faction: "purple",
    access: "TECH_OP // CO_LEAD_ACCESS",
    image: "/Team/Shambhavi emerging tech co lead.jpeg",
    position: "center 30%",
    rotate: true,
    linkedin: "https://www.linkedin.com/in/shambhavi-singh-bb0367373",
  },
  {
    id: "013",
    name: "DRISHTI",
    role: "DSA CO LEAD",
    faction: "green",
    access: "DSA_OP // CO_LEAD_ACCESS",
    image: "/Team/Drishti dsa co lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/dristi-a-3216b137a",
  },
  {
    id: "014",
    name: "AMAN KUMAR",
    role: "GRAPHICS CO LEAD",
    faction: "orange",
    access: "GFX_OP // DESIGN_ACCESS",
    image: "/Team/Aman kumar graphics co lead.jpeg",
    position: "center 90%",
    linkedin: "https://www.linkedin.com/in/aman-kumar-960081357",
  },
];

const VEDATHON_BACKGROUND = "/Halloween/4(1).png";
const VEDATHON_POSTER = "/Halloween/vedathon-poster.png";

export function Team() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === 0
            ? TEAM_MEMBERS.length - 1
            : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === TEAM_MEMBERS.length - 1
            ? 0
            : current + 1;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const previousMember = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? TEAM_MEMBERS.length - 1
        : current - 1;
    });
  };

  const nextMember = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === TEAM_MEMBERS.length - 1
        ? 0
        : current + 1;
    });
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-700">

        {/* HERO */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px] mb-12">

          {/* Decorative border */}
          <div className="absolute inset-0 pointer-events-none border border-red-900/40" />

          {/* LEFT SIDE */}

          <div className="lg:col-span-7 relative z-10 px-5 sm:px-8 lg:px-12 py-10">

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-[0.3em] text-red-500 uppercase">
                // PERSONNEL_DATABASE
              </span>
            </div>

            <h1 className="uppercase leading-[0.9] mb-8 max-w-full overflow-visible">
              <span className="block text-[clamp(4rem,9vw,9rem)] font-black text-white tracking-tight drop-shadow-[4px_4px_0_#500000]">
                THE
              </span>

              <span
                className="block px-1 -mx-1 text-[clamp(4rem,9vw,9rem)] font-black tracking-tight
                bg-gradient-to-r from-red-700 via-[#d94a18] to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,70,20,0.45)]"
              >
                TEAM
              </span>
            </h1>

            <div className="inline-block bg-red-700 px-5 py-2 mb-7 shadow-[5px_5px_0_rgba(0,0,0,0.7)]">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-black">
                THE OPERATORS BEHIND VEDATHON 2.0
              </span>
            </div>


          </div>

          {/* ========================================================
              RIGHT HERO POSTER
          ======================================================== */}

          <div className="lg:col-span-5 relative z-10 px-5 sm:px-10 lg:px-4">

            <div className="relative group">

              {/* Outer glow */}
              <div className="absolute -inset-2 bg-red-700/20 blur-2xl group-hover:bg-red-600/30 transition-all duration-700" />

              <div className="relative border-2 border-red-800/80 bg-black overflow-hidden shadow-[0_0_50px_rgba(120,0,0,0.35)]">

                <img
                  src={VEDATHON_POSTER}
                  alt="Vedathon 2.0 Halloween poster"
                  className="w-full h-[430px] sm:h-[500px] lg:h-[560px] object-cover object-center"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Corner brackets */}

                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-red-500" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-red-500" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-red-500" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-red-500" />

                {/* System ID */}

                <div className="absolute top-5 left-5 bg-black/80 border border-red-800 px-3 py-2 backdrop-blur-sm">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-red-400">
                    SYS_ID: V2-CORE
                  </span>
                </div>

                {/* Signal indicator - KEPT */}

                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">

                  <span className="font-mono text-[10px] text-red-400 tracking-[0.2em]">
                    SIGNAL_DETECTED
                  </span>

                  <div className="flex gap-1 items-end">
                    <span className="w-1.5 h-3 bg-red-800" />
                    <span className="w-1.5 h-5 bg-red-600" />
                    <span className="w-1.5 h-7 bg-red-500 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                    <span className="w-1.5 h-4 bg-red-700" />
                  </div>

                </div>

              </div>
            </div>
          </div>

        </section>



        {/* ==========================================================
            PERSONNEL ARCHIVE HEADER
        ========================================================== */}

        <section className="mb-8">

          <div className="flex items-end justify-between gap-5">

            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight drop-shadow-[3px_3px_0_#550000]">
                CORE OPERATIVES
              </h2>
            </div>

            <div className="hidden sm:block font-mono text-red-600 text-lg">
              01 / 14
            </div>

          </div>

          <div className="h-px bg-gradient-to-r from-red-800 via-red-600/50 to-transparent mt-6" />

        </section>

        {/* ==========================================================
            TEAM GRID
        ========================================================== */}

        <section className="relative">
          <div className="absolute -inset-x-8 -inset-y-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(180,0,0,0.22),transparent_65%)] blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">

            {TEAM_MEMBERS.map((member, index) => (

              <div
                key={member.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer min-w-0"
              >

                {/* Card shadow/glow */}

                <div className="absolute -inset-px bg-red-700/0 group-hover:bg-red-700/30 blur-sm transition-all duration-500" />

                <div className="relative bg-black/85 border border-red-900/80 group-hover:border-red-500/90 transition-all duration-300 overflow-hidden backdrop-blur-sm">

                  {/* IMAGE */}

                  <div className="relative aspect-[4/5] overflow-hidden bg-black">

                    <div
                      className={`absolute inset-0 ${
                        member.rotate
                          ? "rotate-90 scale-[1.32]"
                          : ""
                      }`}
                    >

                      <img
                        src={member.image}
                        alt={member.name}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{
                          objectPosition: member.position,
                        }}
                      />

                    </div>

                    {/* Red-black photo treatment */}

                    <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

                    {/* RED EDGE */}

                    <div className="absolute inset-0 border border-red-700/20 group-hover:border-red-500/70 transition-colors pointer-events-none" />

                    {/* Expand */}

                    <div className="absolute top-3 right-12 bg-black/80 border border-red-800 p-2 opacity-0 group-hover:opacity-100 transition-opacity">

                      <Maximize2 className="w-3.5 h-3.5 text-red-400" />

                    </div>

                    {/* LinkedIn */}

                    <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="absolute top-3 right-3 bg-black/85 border border-red-800 p-2 text-red-400 hover:text-white hover:bg-red-700 hover:border-red-500 transition-all duration-300 z-20"
  aria-label={`LinkedIn profile of ${member.name}`}
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5"
  fill="none"
>
  <rect
    x="2"
    y="2"
    width="20"
    height="20"
    rx="2"
    fill="#0A66C2"
  />
  <path
    d="M7 10v7"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <circle
    cx="7"
    cy="7"
    r="1.1"
    fill="white"
  />
  <path
    d="M11 17v-4c0-1.5.8-2.5 2-2.5s2 1 2 2.5v4M11 10v7"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</a>

                    {/* Corner brackets */}

                    <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-red-600/80" />
                    <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-red-600/80" />
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-red-600/80" />
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-red-600/80" />

                    {/* Bottom metadata */}

                    <div className="absolute bottom-0 left-0 right-0 p-4">

                      <div className="flex items-center gap-2 mb-2">

                        <span className="w-1.5 h-1.5 bg-red-600 animate-pulse shadow-[0_0_7px_rgba(255,0,0,0.8)]" />

                        <span className="font-mono text-[9px] tracking-[0.18em] text-red-500">
                          {member.access.split(" // ")[0]}
                        </span>

                      </div>

                      <div className="flex items-end justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="text-xl sm:text-2xl font-black uppercase text-white truncate drop-shadow-[2px_2px_0_black]">
                            {member.name}
                          </h3>

                          <p className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1 truncate">
                            {member.role}
                          </p>

                        </div>

                        <span className="font-mono text-sm text-red-500 flex-shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              </div>

            ))}

          </div>

        </section>

        {/* ==========================================================
            BOTTOM CTA
        ========================================================== */}

        <section className="relative mt-20 mb-8">

          <div className="border-t border-red-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

            <div>

              <span className="font-mono text-[9px] tracking-[0.25em] text-red-600">
                END_OF_ARCHIVE
              </span>

              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-2 drop-shadow-[2px_2px_0_#550000]">
                THE PROTOCOL CONTINUES
              </h2>

            </div>

            <Link
              to="/schedule"
              className="group relative border border-red-700 px-7 py-4 bg-black/70 hover:bg-red-800/20 transition-all duration-300"
            >

              <span className="font-mono text-xs tracking-widest text-red-400 group-hover:text-red-300">
                SEE THIS YEAR'S EVENT →
              </span>

            </Link>

          </div>

        </section>

      {/* ============================================================
          FULLSCREEN PHOTO VIEWER (PERSONNEL ARCHIVE)
      ============================================================ */}

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-[#040303]/95 flex flex-col overflow-hidden animate-[archiveOpen_550ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
          role="dialog"
          aria-modal="true"
        >
          {/* Background atmosphere */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-screen pointer-events-none"
            style={{ backgroundImage: `url("${VEDATHON_BACKGROUND}")` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[rgba(255,0,0,0.015)] pointer-events-none" />
          {/* subtle scanlines via repeating linear gradient */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

          {/* TOP BAR */}
          <div className="relative z-10 flex justify-between items-start sm:items-center p-4 sm:p-6 lg:p-8 shrink-0">
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-red-500 leading-relaxed">
              VEDATHON // TEAM ARCHIVE<br />
              PERSONNEL FILE / {TEAM_MEMBERS[selectedIndex].id}
            </div>
            
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-red-500">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(TEAM_MEMBERS.length).padStart(2, '0')}
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="group flex items-center gap-2 text-white hover:text-red-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label="Close archive"
              >
                <span className="font-mono text-[10px] sm:text-xs tracking-widest hidden sm:block">CLOSE</span>
                <X className="w-6 h-6 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div 
            key={TEAM_MEMBERS[selectedIndex].id} 
            className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-8 lg:px-12 overflow-y-auto lg:overflow-hidden animate-[memberGlitch_200ms_ease-out_forwards]"
          >
            {/* LEFT: PHOTO */}
            <div className="w-full lg:w-[55%] h-[40vh] lg:h-[70vh] flex items-center justify-center shrink-0">
              <div className="relative w-full h-full max-w-3xl border border-red-900/40 shadow-[inset_0_0_60px_rgba(50,0,0,0.4)] group overflow-hidden bg-black/40">
                {/* Photo Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600 z-20" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600 z-20" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-600 z-20" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600 z-20" />

                <img
                  src={TEAM_MEMBERS[selectedIndex].image}
                  alt={TEAM_MEMBERS[selectedIndex].name}
                  className={`w-full h-full object-contain ${TEAM_MEMBERS[selectedIndex].rotate ? "rotate-90 scale-125" : ""} transition-transform duration-[2000ms] group-hover:scale-[1.02]`}
                />

                {/* Photo Overlays */}
                <div className="absolute inset-0 bg-red-900/5 mix-blend-color pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 z-20">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-red-500">
                    ARCHIVE_{TEAM_MEMBERS[selectedIndex].id}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 z-20">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-red-500">
                    {TEAM_MEMBERS[selectedIndex].id}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: INFO */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center pb-10 lg:pb-0">
              <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 mb-3 animate-pulse">
                {TEAM_MEMBERS[selectedIndex].access.split(" // ")[0]}
              </span>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.9] drop-shadow-[3px_3px_0_#500000] mb-3">
                {TEAM_MEMBERS[selectedIndex].name}
              </h2>
              
              <h3 className="text-base sm:text-lg font-body font-bold text-gray-400 uppercase tracking-widest mb-10">
                {TEAM_MEMBERS[selectedIndex].role}
              </h3>

              <div className="space-y-6 mb-12 border-l-2 border-red-900/50 pl-5">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-600 mb-1">ARCHIVE STATUS</div>
                  <div className="font-mono text-xs text-white tracking-wider">ACTIVE</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-600 mb-1">DIVISION</div>
                  <div className="font-mono text-xs text-white tracking-wider">
                    {TEAM_MEMBERS[selectedIndex].role.includes("PRESIDENT") ? "EXECUTIVE DIRECTIVE" :
                     TEAM_MEMBERS[selectedIndex].role.includes("SECRETARY") ? "ADMINISTRATION" :
                     TEAM_MEMBERS[selectedIndex].role.includes("AIML") ? "AI & MACHINE LEARNING" :
                     TEAM_MEMBERS[selectedIndex].role.includes("EMERGING TECH") ? "EMERGING TECHNOLOGIES" :
                     TEAM_MEMBERS[selectedIndex].role.includes("DSA") ? "ALGORITHMS" :
                     TEAM_MEMBERS[selectedIndex].role.includes("WEB DEV") ? "WEB DEVELOPMENT" :
                     TEAM_MEMBERS[selectedIndex].role.includes("MARKETING") ? "MARKETING & OUTREACH" :
                     TEAM_MEMBERS[selectedIndex].role.includes("SOCIAL MEDIA") ? "SOCIAL MEDIA" :
                     TEAM_MEMBERS[selectedIndex].role.includes("GRAPHICS") ? "DESIGN & GRAPHICS" :
                     "CORE OPERATIONS"}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-600 mb-1">ACCESS LEVEL</div>
                  <div className="font-mono text-xs text-white tracking-wider">
                    {TEAM_MEMBERS[selectedIndex].access.split(" // ")[1].replace("_ACCESS", " TEAM").replace("_", " ")}
                  </div>
                </div>
              </div>

              {TEAM_MEMBERS[selectedIndex].linkedin && (
                <a
                  href={TEAM_MEMBERS[selectedIndex].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 border border-red-800 bg-black/50 px-6 py-3 w-fit hover:border-red-500 overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 w-0 bg-red-900/30 group-hover:w-full transition-all duration-500 ease-out" />
                  <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] text-red-400 group-hover:text-white transition-colors">
                    LINKEDIN ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* BOTTOM CONTROLS & THUMBNAILS */}
          <div className="relative z-10 mt-auto shrink-0 bg-black/60 border-t border-red-900/40 backdrop-blur-md">
            {/* Prev/Next Bar */}
            <div className="flex justify-between items-center px-4 sm:px-8 py-4 border-b border-red-900/20">
              <button
                type="button"
                onClick={previousMember}
                className="group flex flex-col items-start text-left focus:outline-none"
              >
                <span className="font-mono text-[9px] text-red-600 tracking-[0.2em] group-hover:text-red-400 transition-colors mb-1">
                  ← PREVIOUS
                </span>
                <span className="font-headline text-sm sm:text-base uppercase text-gray-500 group-hover:text-white transition-colors">
                  {TEAM_MEMBERS[selectedIndex === 0 ? TEAM_MEMBERS.length - 1 : selectedIndex - 1].name}
                </span>
              </button>

              <button
                type="button"
                onClick={nextMember}
                className="group flex flex-col items-end text-right focus:outline-none"
              >
                <span className="font-mono text-[9px] text-red-600 tracking-[0.2em] group-hover:text-red-400 transition-colors mb-1">
                  NEXT →
                </span>
                <span className="font-headline text-sm sm:text-base uppercase text-gray-500 group-hover:text-white transition-colors">
                  {TEAM_MEMBERS[selectedIndex === TEAM_MEMBERS.length - 1 ? 0 : selectedIndex + 1].name}
                </span>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto scrollbar-hide snap-x">
              {TEAM_MEMBERS.map((member, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative shrink-0 snap-center transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? "w-14 h-16 sm:w-16 sm:h-20 border-2 border-red-500 opacity-100 scale-105" 
                        : "w-12 h-14 sm:w-14 sm:h-16 border border-red-900/40 opacity-40 hover:opacity-80 grayscale hover:grayscale-[50%]"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={`Thumbnail of ${member.name}`}
                      className={`w-full h-full object-cover ${member.rotate ? "rotate-90 scale-150" : ""}`}
                    />
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-screen pointer-events-none" />
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_red]" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}