"use client";
import { useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Phone, RotateCcw } from "lucide-react";

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  qrCodeUrl: string;
  phone: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "harsith",
    firstName: "HARSITH",
    lastName: "CHANDRASEKARAN",
    role: "Founder & Head Consultant",
    qrCodeUrl: "/qr-profile-hc.svg",
    phone: "+917558112196",
  },
  // Add more team members here
  {
    id: "aadil",
    firstName: "MOHAMMED",
    lastName: "AADIL",
    role: "Co-Founder & Lead Developer",
    qrCodeUrl: "/qr-profile-ma.svg",
    phone: "+919486502203",
  },
  {
    id: "rahil",
    firstName: "RAHIL",
    lastName: "",
    role: "Co-Founder",
    qrCodeUrl: "/qr-profile-ma.svg",
    phone: "+1234567890",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // 3D Hover Effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateYBase = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"],
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col items-center justify-center perspective-1000">
      {/* Card Container */}
      <div
        className="relative w-[340px] h-[200px] sm:w-[460px] sm:h-[260px] cursor-pointer group mb-10"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1500px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Outer Wrapper for Hover 3D Tilt */}
        <motion.div
          style={{
            rotateX,
            rotateY: rotateYBase,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
          {/* Inner Wrapper for Flip Rotation */}
          <motion.div
            className="w-full h-full relative"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Face */}
            <div
              className="absolute inset-0 w-full h-full bg-black/90 rounded-2xl sm:rounded-[1.25rem] px-4 py-3 sm:px-8 sm:pb-8 sm:pt-4 flex flex-col justify-between shadow-[0_0_40px] shadow-secondary/50 overflow-hidden border-[3px] border-secondary/60"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Subtle glare effect in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/8 rounded-full blur-[40px] pointer-events-none" />

              <div className="flex justify-between items-start relative z-10">
                <img
                  src="/logo-white.svg"
                  alt="Quorvia Logo"
                  className="h-[70px] w-[90px] object-contain -mt-2"
                />
                {/* Golden Chip */}
                <div className="w-10 h-7 sm:w-[42px] sm:h-8 bg-gradient-to-br from-[#e0b960] via-[#c69b43] to-[#8f681a] rounded flex items-center justify-center overflow-hidden shadow-inner relative opacity-90 mt-1">
                  {/* Chip lines */}
                  <div className="w-full h-[0.5px] bg-black/20 absolute top-[30%]"></div>
                  <div className="w-full h-[0.5px] bg-black/20 absolute top-[70%]"></div>
                  <div className="h-full w-[0.5px] bg-black/20 absolute left-[30%]"></div>
                  <div className="h-full w-[0.5px] bg-black/20 absolute left-[70%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="pb-0.5">
                  <div className="text-[1.2rem] sm:text-lg font-black text-white uppercase mb-1">
                    <span>{member.firstName} </span>
                    <br />
                    <span>{member.lastName}</span>
                  </div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] text-neutral-400 uppercase tracking-[0.15em] font-medium">
                    {member.role}
                  </div>
                </div>
                <div className="shrink-0">
                  <img
                    src={member.qrCodeUrl}
                    alt="QR Code"
                    className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] block object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div
              className="absolute inset-0 w-full h-full bg-black/90 rounded-2xl sm:rounded-[1.25rem] p-6 flex flex-col items-center justify-center shadow-[0_0_40px] shadow-secondary/50 overflow-hidden border border-3 border-secondary/60"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/8 rounded-full blur-[40px] pointer-events-none" />

              <div className="shrink-0 z-10 mb-6">
                <img
                  src={member.qrCodeUrl}
                  alt="QR Code"
                  className="w-36 h-36 sm:w-44 sm:h-44 block object-contain"
                />
              </div>
              <div className="text-white/60 text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.2em] uppercase text-center mt-1">
                Scan To Open Portfolio
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center w-full mt-2 flex flex-col items-center">
        <p className="text-slate-400/80 mb-6 font-mono text-[0.7rem] sm:text-[0.8rem] flex items-center justify-center gap-2">
          [ ! ] Click the card to rotate
        </p>
        <div className="flex gap-4 justify-center items-center">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 text-[0.85rem] font-bold rounded-[0.5rem] text-white bg-secondary hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(143,86,225,0.4)]"
          >
            Direct Call <Phone className="ml-2 w-3.5 h-3.5 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden bg-primary border-t border-white/5"
      id="team"
    >
      {/* Background ambient glow matching the screenshot */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 z-10 relative flex flex-col items-center">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-bold text-secondary">
            {`/* IDENTITY */`}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-3">
            Scan &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary/70">
              Connect
            </span>
          </h2>
          <p className="text-[1.05rem] text-slate-400 font-medium tracking-wide">
            Professional digital imprint. Interactive & Premium.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 w-full">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
