"use client";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section
      className="py-24 relative overflow-hidden border-t border-black/5"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-bold text-secondary">
          {`/* INVESTMENT */`}
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight mb-16">
          Transparent Pricing.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Starter Package */}
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-black/5 hover:border-secondary/50 group hover:-translate-y-2 transition-all duration-300 relative text-left shadow-lg hover:shadow-2xl flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-secondary transition-colors">
              Starter Package
            </h3>
            <p className="text-slate-500 mb-6 font-medium h-12">
              Best for: New businesses, local shops, beginners
            </p>

            <div className="text-4xl font-black text-secondary mb-6 group-hover:scale-[1.02] inline-block origin-left transition-transform">
              ₹4,999
              <span className="text-2xl text-slate-400 font-normal"> /mo</span>
            </div>

            <ul className="space-y-4 mb-4 grow">
              {[
                "Basic Branding (logo tweaks, colors, fonts)",
                "Social Media Setup (Instagram, basic posts)",
                "8–12 Creatives/month",
                "Basic WhatsApp auto-reply setup",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start text-slate-600 font-medium"
                >
                  <Check className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />{" "}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-start text-slate-800 font-bold mt-6 pt-4 border-t border-black/5 group-hover:text-secondary transition-colors">
                👉 Outcome: Online presence + basic system
              </div>
            </div>
          </div>

          {/* Growth Package */}
          <div className="p-10 bg-slate-900 rounded-3xl border border-secondary relative text-left shadow-2xl shadow-secondary/20 md:-mt-4 md:mb-4 md:scale-[1.03] group hover:-translate-y-3 md:hover:scale-[1.05] hover:shadow-[0_0_50px_-10px_rgba(143,86,225,0.5)] transition-all duration-500 z-10 flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1.5 rounded-bl-xl rounded-tr-3xl text-sm font-bold shadow-md">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary/90 transition-colors">
              Growth Package
            </h3>
            <p className="text-slate-400 mb-8 font-medium h-12">
              Best for: Businesses that want customers consistently
            </p>

            <div className="text-4xl font-black text-white mb-8 group-hover:scale-[1.02] inline-block origin-left transition-transform">
              ₹14,999
              <span className="text-2xl text-slate-500 font-normal"> /mo</span>
            </div>

            <ul className="space-y-4 mb-4 grow">
              {[
                "Social Media Management",
                "Paid Ads (Meta/Google)",
                "Lead Generation Funnel",
                "WhatsApp / Email follow-ups",
                "Landing page (basic)",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start text-slate-300 font-medium"
                >
                  <Check className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />{" "}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-start text-white font-bold mt-6 pt-4 border-t border-white/10 group-hover:text-secondary/90 transition-colors">
                👉 Outcome: More leads + better conversions
              </div>
            </div>
          </div>

          {/* Scale Package */}
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-black/5 hover:border-secondary/50 group hover:-translate-y-2 transition-all duration-300 relative text-left shadow-lg hover:shadow-2xl flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-secondary transition-colors">
              Scale Package
            </h3>
            <p className="text-slate-500 mb-6 font-medium h-12">
              Best for: Businesses ready to expand seriously
            </p>

            <div className="text-4xl font-black text-secondary mb-6 group-hover:scale-[1.02] inline-block origin-left transition-transform">
              ₹29,999
              <span className="text-2xl text-slate-400 font-normal"> /mo</span>
            </div>

            <ul className="space-y-4 mb-4 grow">
              {[
                "Advanced Ads Strategy",
                "Full Automation System (CRM + workflows)",
                "Conversion optimization",
                "Advanced creatives & branding",
                "Analytics dashboard + reports",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start text-slate-600 font-medium"
                >
                  <Check className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />{" "}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-start text-slate-800 font-bold mt-6 pt-4 border-t border-black/5 group-hover:text-secondary transition-colors">
                👉 Outcome: Automated growth + higher revenue
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4 pt-16 md:pt-20 font-mono text-sm md:text-base text-center max-w-2xl mx-auto px-4 text-slate-500">
        &quot;
        <span className="text-secondary/80 font-bold text-base md:text-lg">
          Custom plans
        </span>{" "}
        available based on your business needs. One-time setup fee
        applies.&quot;
      </p>
    </section>
  );
}
