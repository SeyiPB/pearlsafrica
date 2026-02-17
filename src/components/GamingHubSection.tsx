import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import carvenBg from "@/assets/carven/carven-1.jpg";

const GamingHubSection = () => {
  return (
    <section id="gaming-hub" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src={carvenBg}
          alt="Gaming Hub"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">The Sanctuary</span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase">
            CARVEN<br />GAMING HUB.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mx-auto max-w-2xl">
            Experience the pinnacle of gaming in our state-of-the-art facility. Premium rigs, community spaces, and competitive zones designed for the elite.
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-none px-12 py-8 text-sm font-bold uppercase tracking-widest transition-all"
              asChild
            >
              <a href="https://playatcarven.com" target="_blank" rel="noopener noreferrer">
                Visit The Hub <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {[
            { label: "GAMING STATIONS", value: "50+" },
            { label: "MONTHLY GAMERS", value: "3K+" },
            { label: "COMMUNITY EVENTS", value: "15+" },
            { label: "INTERNET SPEED", value: "1GBPS" }
          ].map((stat, i) => (
            <div key={i} className="bg-black/80 backdrop-blur-md p-12 text-center group hover:bg-blue-600 transition-all duration-500">
              <h3 className="text-4xl font-bold mb-2 transition-transform group-hover:scale-110">{stat.value}</h3>
              <p className="text-[10px] text-gray-500 font-bold group-hover:text-white uppercase tracking-widest transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingHubSection;