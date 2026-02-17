import { Trophy, Calendar, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import tournamentBg from "@/assets/gamr-squad.jpg"; // Using an existing asset that looks like a high-energy event

const TournamentsSection = () => {
  const tournaments = [
    { game: "FIFA 24 Championship", date: "DEC 15", prize: "₦500k", status: "LIVE" },
    { game: "Call of Duty Mobile", date: "DEC 22", prize: "₦750k", status: "OPEN" },
    { game: "Tekken 8 Showdown", date: "JAN 05", prize: "₦300k", status: "UPCOMING" }
  ];

  return (
    <section id="gaming" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={tournamentBg}
          alt="Tournament Background"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Competition</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
              The Arena<br />of Africa.
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Powering the continent's most intense competitive circuits. From grassroots qualifiers to stadium-filling finals.
            </p>

            <div className="grid grid-cols-2 gap-10 pt-8">
              <div>
                <h4 className="text-4xl font-bold">400K+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Active Players</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">2,000+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Organizers</p>
              </div>
            </div>

            <div className="pt-8">
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-none px-10 py-7 text-sm font-bold uppercase tracking-widest transition-all"
                asChild
              >
                <a href="https://gamrworld.io" target="_blank" rel="noopener noreferrer">
                  Join The Circuit
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-white/20 pb-4">
              Featured Circuits
            </h3>
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/40 transition-colors cursor-pointer"
              >
                <div className="space-y-1">
                  <h5 className="text-xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                    {tournament.game}
                  </h5>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {tournament.date}
                    </span>
                    <span className={tournament.status === "LIVE" ? "text-red-500" : "text-blue-500"}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tighter">{tournament.prize}</p>
                  <ArrowRight className="h-5 w-5 ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;