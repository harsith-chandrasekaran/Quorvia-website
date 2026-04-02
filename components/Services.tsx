"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Workflow, LineChart, Cpu } from "lucide-react";

const bentoItems = [
  {
    id: 1,
    title: "Business Systems",
    description: "We streamline your operations through smart workflows, eliminating bottlenecks to manage your growth efficiently.",
    icon: <Workflow className="w-6 h-6 text-secondary" />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    stat: "100%",
    statLabel: "Streamlined",
    terminal: true,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Strategic, performance-driven campaigns that attract the right audience and build massive brand presence.",
    icon: <LineChart className="w-6 h-6 text-white" />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    theme: "dark",
    terminal: true,
  },
  {
    id: 3,
    title: "Creative Design",
    description: "User-focused experiences enhancing your brand identity.",
    icon: <Code2 className="w-6 h-6 text-secondary" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    terminal: false,
  },
  {
    id: 4,
    title: "Connected Tech",
    description: "Tailored ecosystems providing clarity and structured execution.",
    icon: <Cpu className="w-6 h-6 text-secondary" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    terminal: false,
  },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 font-mono text-sm font-semibold text-secondary">
            {`/* THE ECOSYSTEM */`}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
            Design meets <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary/60">Strategy.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}
              className={`
                relative overflow-hidden rounded-3xl p-8 border hover:border-secondary/50 transition-colors group cursor-default shadow-xs hover:shadow-xl hover:shadow-secondary/5
                ${item.colSpan} ${item.rowSpan} 
                ${item.theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white/70 backdrop-blur-md border-black/5'}
              `}
            >

              <div className="flex flex-col h-full justify-between mt-2">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                    ${item.theme === 'dark' ? 'bg-white/10' : 'bg-secondary/10'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${item.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${item.theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>

                {item.stat && (
                   <div className="mt-12">
                     <span className="text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-secondary to-secondary/20">
                       {item.stat}
                     </span>
                     <p className="font-mono text-sm text-slate-500 uppercase tracking-widest mt-2">{item.statLabel}</p>
                   </div>
                )}
                
                <div className={`absolute top-8 right-8 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                  ${item.theme === 'dark' ? 'border-slate-700 text-slate-500 group-hover:bg-white group-hover:text-slate-900' : 'border-slate-200 text-slate-400 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white'}`}>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
