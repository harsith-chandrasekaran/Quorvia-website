export default function Companies() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/40 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 mb-6 font-mono text-sm font-bold text-secondary">
          {`/* CLIENT NETWORK */`}
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-16">
          Powered by Quorvia.
        </h2>
        
        {/* Placeholder Bento Grid for Logos/Case Studies */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1,2,3,4].map((i) => (
             <div key={i} className="aspect-video bg-white rounded-2xl flex items-center justify-center border border-black/5 hover:border-secondary transition-colors group cursor-pointer shadow-sm relative overflow-hidden">
                <span className="font-mono text-slate-300 font-bold group-hover:text-secondary transition-colors">Client {i}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
