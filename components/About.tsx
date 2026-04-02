export default function About() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-bold text-secondary">
          {`/* THE ORIGIN STORY */`}
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight mb-8">
          About Quorvia.
        </h2>
        <div className="p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-3xl border border-black/5 shadow-xl relative overflow-hidden text-left">
          <div className="mac-dots">
            <div className="dot"></div>
          </div>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            <p className="text-xl text-slate-800 font-bold mb-4">
              Quorvia is a modern digital solutions venture focused on helping
              businesses grow, operate efficiently, and build a strong market
              presence.
            </p>
            <p>
              We build complete growth ecosystems by combining strategic digital
              marketing, smart business systems, and thoughtful design. From
              executing performance-driven campaigns to optimizing workflows,
              every solution is tailored to your real business needs.
            </p>
            <p className="font-bold text-secondary text-xl pt-4">
              At Quorvia, we don&apos;t just offer services — we create
              connected solutions that drive growth, efficiency, and long-term
              value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
