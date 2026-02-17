import { Button } from "@/components/ui/button";

const WorkshopsSection = () => {
  return (
    <section id="education" className="py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Skills Academy</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                Elevate Your<br />Strategy.
              </h2>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Master the technical and strategic aspects of professional gaming. From game theory to content production, learn from the industry's finest.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "EXPERT INSTRUCTION", desc: "Direct mentorship from professional esports athletes and analysts." },
                { title: "PRACTICAL TRAINING", desc: "Hands-on gameplay analysis and real-time tactical feedback." },
                { title: "NETWORK GROWTH", desc: "Access to elite teams, brand scouts, and the wider ecosystem." }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-px h-12 bg-blue-500 self-start group-hover:h-16 transition-all duration-300" />
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 max-w-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-sm font-bold uppercase tracking-widest transition-all"
                asChild
              >
                <a href="https://gamrworld.io" target="_blank" rel="noopener noreferrer">
                  Explore Curriculum
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-square bg-zinc-900 border border-white/5 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center p-20">
                <div className="text-center space-y-4">
                  <h3 className="text-8xl md:text-[12rem] font-bold tracking-tighter text-white/5 group-hover:text-blue-500/10 transition-all duration-700">EDU</h3>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 z-20 space-y-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enrollment Open</span>
                <h4 className="text-3xl font-bold uppercase tracking-tighter">Cohort 2026</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;