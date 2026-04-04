"use client";
import { motion } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-37 pb-17 overflow-hidden">
      {/* Cute Animated Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <motion.div
          className="absolute -top-20 -left-20 w-120 h-120 bg-secondary/50 rounded-[40%_60%_70%_30%] mix-blend-multiply filter blur-[45px]"
          animate={{
            x: [0, 350, -150, 400, -200, 0],
            y: [0, -200, 250, -100, 300, 0],
            rotate: [0, 90, 180, 270, 360, 0],
            scale: [1, 1.3, 0.8, 1.4, 0.9, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-140 h-140 bg-[#ff8be6]/50 rounded-[60%_40%_30%_70%] mix-blend-multiply filter blur-[55px]"
          animate={{
            x: [0, -400, 250, -300, 150, 0],
            y: [0, 250, -300, 150, -200, 0],
            rotate: [360, 270, 180, 90, 0, 360],
            scale: [1, 0.8, 1.4, 0.9, 1.2, 1],
          }}
          transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-180 h-180 bg-blue-300/40 rounded-[50%_50%_60%_40%] mix-blend-multiply filter blur-[55px]"
          animate={{
            x: [0, 200, -450, 300, -100, 0],
            y: [0, -300, 150, -400, 250, 0],
            rotate: [0, -90, -180, -270, -360, 0],
            scale: [0.9, 1.3, 0.8, 1.4, 0.9, 0.9],
          }}
          transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Nexora-style Code Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-secondary/20 shadow-sm transition-all hover:bg-slate-50 cursor-pointer text-slate-700 font-mono text-sm font-semibold">
            <span className="text-secondary opacity-70">{"//"}</span>
            Modern Digital Solutions
            <span className="text-secondary opacity-70">{"//"}</span>
          </div>
        </motion.div>

        {/* High-impact Nexora-style Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Building Complete <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary/50">
            Growth Ecosystems.
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Connecting strategic digital marketing, smart business systems, and
          creative design to drive impactful, scalable growth.
        </motion.p>

        {/* Dual button layout like Nexora */}
        <motion.div
          className="flex justify-center gap-4 flex-col sm:flex-row w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-linear-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary transition-all  hover:scale-[1.05] active:scale-95 shadow-xl shadow-secondary/20 w-full sm:w-auto"
          >
            View Services <ChevronRight className="ml-2 w-5 h-5" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-slate-800 bg-transparent border-2 border-slate-300 hover:border-secondary hover:text-secondary group transition-all hover:scale-[1.05] active:scale-95 w-full sm:w-auto"
          >
            <Terminal className="mr-2 w-5 h-5 group-hover:text-secondary text-slate-500 transition-colors" />
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
