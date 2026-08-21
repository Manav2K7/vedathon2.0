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
    id: "012",
    name: "DRISHTI",
    role: "DSA CO LEAD",
    faction: "green",
    access: "DSA_OP // CO_LEAD_ACCESS",
    image: "/Team/Drishti dsa co lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/dristi-a-3216b137a",
  },
  {
    id: "013",
    name: "AMAN KUMAR",
    role: "GRAPHICS CO LEAD",
    faction: "orange",
    access: "GFX_OP // DESIGN_ACCESS",
    image: "/Team/Aman kumar graphics co lead.jpeg",
    position: "center 90%",
    linkedin: "https://www.linkedin.com/in/aman-kumar-960081357",
  },
  {
    id: "014",
    name: "YASH",
    role: "WEB DEV CO LEAD",
    faction: "purple",
    access: "WEB_OP // CO_LEAD_ACCESS",
    image: "/Team/Yash Web dev co lead.jpeg",
    position: "center 20%",
    linkedin: "https://www.linkedin.com/in/yashbuilds",
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

          {/* Decorative spider-web style border */}
          <div className="absolute inset-0 pointer-events-none border border-red-900/40" />

          <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-red-700/70" />
          <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-red-700/70" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-red-700/70" />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-red-700/70" />

          {/* LEFT SIDE */}

          <div className="lg:col-span-7 relative z-10 px-5 sm:px-8 lg:px-12 py-10">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_12px_rgba(255,0,0,0.9)]" />

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
    bg-gradient-to-r from-primary-container via-secondary-container to-red-900
    bg-clip-text text-transparent
    drop-shadow-[0_0_8px_rgba(200,30,30,0.4)]"
  >
    TEAM
  </span>
</h1>

            <div className="inline-block bg-red-700 px-5 py-2 mb-7 shadow-[5px_5px_0_rgba(0,0,0,0.7)]">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-black">
                THE OPERATORS BEHIND VEDATHON 2.0
              </span>
            </div>

            <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-7 border-l-2 border-red-700 pl-5">
              The core engineers, designers, and architects maintaining the
              structural integrity of the V2.0 protocol. This database contains
              verified clearance logs for all active personnel overseeing the
              hackathon infrastructure.
            </p>

            {/* STATUS BOXES */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">

              <div className="border border-red-800/70 bg-black/65 p-4 backdrop-blur-sm">
                <span className="block font-mono text-[9px] text-red-500 tracking-widest mb-2">
                  STATUS
                </span>
                <span className="font-mono text-xs text-white">
                  ACTIVE 
                </span>
              </div>

              <div className="border border-red-800/70 bg-black/65 p-4 backdrop-blur-sm">
                <span className="block font-mono text-[9px] text-red-500 tracking-widest mb-2">
                  ACCESS
                </span>
                <span className="font-mono text-xs text-white">
                  VERIFIED
                </span>
              </div>

              <div className="border border-red-800/70 bg-black/65 p-4 backdrop-blur-sm">
                <span className="block font-mono text-[9px] text-red-500 tracking-widest mb-2">
                  OPERATORS
                </span>
                <span className="font-mono text-xs text-white">
                  14
                </span>
              </div>

              <div className="border border-red-800/70 bg-black/65 p-4 backdrop-blur-sm">
                <span className="block font-mono text-[9px] text-red-500 tracking-widest mb-2">
                  PROTOCOL
                </span>
                <span className="font-mono text-xs text-white">
                  V2.0
                </span>
              </div>

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
            SYSTEM STATUS BAR
        ========================================================== */}

        <section className="relative border-y border-red-900/60 bg-black/70 backdrop-blur-md mb-20">

          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-x-5 gap-y-3 px-4 sm:px-8 py-5 font-mono text-[9px] sm:text-[10px] md:text-xs tracking-widest">

            <span className="flex items-center gap-2 text-red-400">
              <Skull className="w-3 h-3" />
              [ CORE OPERATORS 14 ]
            </span>

            <span className="hidden sm:block text-red-900">
              ///
            </span>

            <span className="text-red-400">
              [ SYSTEM STATUS ONLINE ]
            </span>

            <span className="hidden sm:block text-red-900">
              ///
            </span>

            <span className="text-red-400">
              [ EVENT V2.0 ]
            </span>

            <span className="hidden sm:block text-red-900">
              ///
            </span>

            <span className="text-red-400">
              [ ACCESS VERIFIED ]
            </span>

          </div>
        </section>

        {/* ==========================================================
            PERSONNEL ARCHIVE HEADER
        ========================================================== */}

        <section className="mb-8">

          <div className="flex items-end justify-between gap-5">

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-red-600 font-mono text-xs">
                  //
                </span>

                <span className="font-mono text-xs tracking-[0.25em] text-red-500">
                  PERSONNEL_ARCHIVE
                </span>
              </div>

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

                    {/* Archive ID */}

                    <div className="absolute top-3 left-3 bg-black/85 border border-red-800 px-2 py-1">

                      <span className="font-mono text-[8px] tracking-widest text-red-400">
                        ARCHIVE_{member.id}
                      </span>

                    </div>

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

                        <span className="font-mono text-[8px] tracking-[0.18em] text-red-500">
                          {member.access.split(" // ")[0]}
                        </span>

                      </div>

                      <div className="flex items-end justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="text-base sm:text-lg font-black uppercase text-white truncate drop-shadow-[2px_2px_0_black]">
                            {member.name}
                          </h3>

                          <p className="font-mono text-[8px] text-gray-400 uppercase tracking-wider mt-1 truncate">
                            {member.role}
                          </p>

                        </div>

                        <span className="font-mono text-xs text-red-500 flex-shrink-0">
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
          FULLSCREEN PHOTO VIEWER
      ============================================================ */}

      {selectedIndex !== null && (

        <div className="fixed inset-0 z-[9999] bg-black/98 flex items-center justify-center p-4">

          {/* Background in viewer */}

          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url("${VEDATHON_BACKGROUND}")`,
            }}
          />

          <div className="absolute inset-0 bg-black/80" />

          {/* TOP BAR */}

          <div className="absolute top-0 left-0 right-0 z-[10010] px-5 py-4 flex items-center justify-between border-b border-red-900/60 bg-black/80">

            <div className="flex items-center gap-3">

              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />

              <span className="font-mono text-[9px] sm:text-xs tracking-[0.2em] text-red-400">
                PERSONNEL_VIEWER //{" "}
                {TEAM_MEMBERS[selectedIndex].id}
              </span>

            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="relative z-[10020] p-2 text-white hover:text-red-500 transition-colors"
              aria-label="Close photo viewer"
            >
              <X className="w-7 h-7" />
            </button>

          </div>

          {/* ========================================================
              LEFT NAVIGATION
          ======================================================== */}

          <button
            type="button"
            onClick={previousMember}
            className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-[10020] flex items-center justify-center w-12 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 border border-red-700 bg-black/80 text-red-500 hover:bg-red-700 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(150,0,0,0.4)]"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>

          {/* IMAGE */}

          <div className="relative z-[10000] w-full max-w-5xl h-[78vh] flex items-center justify-center px-16 sm:px-20">

            <div
              className={`relative max-w-full max-h-full ${
                TEAM_MEMBERS[selectedIndex].rotate
                  ? "rotate-90"
                  : ""
              }`}
            >

              <img
                src={TEAM_MEMBERS[selectedIndex].image}
                alt={TEAM_MEMBERS[selectedIndex].name}
                className="max-w-full max-h-[72vh] object-contain border border-red-700/70 shadow-[0_0_50px_rgba(150,0,0,0.25)]"
              />

              {/* Image corners */}

              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-red-500" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-red-500" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-500" />

            </div>

          </div>

          {/* ========================================================
              RIGHT NAVIGATION
          ======================================================== */}

          <button
            type="button"
            onClick={nextMember}
            className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-[10020] flex items-center justify-center w-12 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 border border-red-700 bg-black/80 text-red-500 hover:bg-red-700 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(150,0,0,0.4)]"
            aria-label="Next team member"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>

          {/* BOTTOM INFO */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[10020] flex flex-col items-center gap-2">

            <span className="font-mono text-sm tracking-[0.3em] text-red-500">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(TEAM_MEMBERS.length).padStart(2, "0")}
            </span>

            <span className="hidden sm:block font-mono text-[8px] tracking-[0.2em] text-gray-500">
              USE ← → TO NAVIGATE // ESC TO CLOSE
            </span>

          </div>

        </div>
      )}

    </div>
  );
}