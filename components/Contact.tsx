"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Visiting Card Footer */}
        <motion.div
          className="bg-white rounded-3xl p-1 border border-black/5 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent pointer-events-none"></div>

          <div className="bg-primary/50 backdrop-blur-xl rounded-[1.3rem] p-10 md:p-16 h-full flex flex-col items-center justify-center border border-white/50 relative z-10">
            <div className="mac-dots absolute top-6 left-6">
              <div className="dot"></div>
            </div>

            <div className="font-mono text-sm font-bold text-secondary mb-8">
              {`< CONTACT / >`}
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
              Ready to Grow?
            </h2>
            <p className="text-slate-500 mb-12 max-w-md mx-auto text-lg">
              Stop settling for fragmented services. Get a complete growth
              ecosystem working for your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-slate-900 hover:bg-secondary transition-colors w-full sm:w-auto shadow-xl group">
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                hello@quorvia.com
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-800 bg-white border border-slate-200 hover:border-secondary transition-colors w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-3 text-slate-400" />
                WhatsApp
              </button>
            </div>
          </div>
        </motion.div>

        {/* Brand footer signature */}
        <div className="mt-16 text-center text-slate-400 font-mono text-sm">
          <p className="mb-2 hover:text-secondary transition-colors cursor-pointer inline-block">
            {"< Quorvia Neo-Studio />"}
          </p>
          <p>© {new Date().getFullYear()} Quorvia All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
