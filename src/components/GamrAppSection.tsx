import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import appScreen1 from "@/assets/gamr-app-screen-1.jpg";
import appScreen2 from "@/assets/gamr-app-screen-2.jpg";
import appScreen3 from "@/assets/gamr-app-screen-3.jpg";
import appScreen4 from "@/assets/gamr-app-screen-4-new.png";
import { Button } from "@/components/ui/button";

const GamrAppSection = () => {
  const appScreens = [
    { id: 1, image: appScreen1, alt: "Gamr App Profile" },
    { id: 2, image: appScreen2, alt: "Gamr App Shop" },
    { id: 3, image: appScreen3, alt: "Gamr App Community" },
    { id: 4, image: appScreen4, alt: "Gamr App Leaderboard" },
  ];

  return (
    <section id="gamr-app" className="py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8 animate-fade-in">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Now Boarding</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
              The Mobile<br />Universe.
            </h2>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Your entire gaming identity, in the palm of your hand. Track stats, join tournaments, and connect with millions of players across the continent.
            </p>
            <div className="pt-8">
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-none px-12 py-8 text-sm font-bold uppercase tracking-widest transition-all"
                asChild
              >
                <a
                  href="/claim-gamrtag"
                  className="flex items-center"
                >
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600 rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />

            <Carousel
              opts={{ align: "center", loop: true }}
              className="w-full relative z-10"
            >
              <CarouselContent>
                {appScreens.map((screen) => (
                  <CarouselItem key={screen.id} className="basis-full flex justify-center">
                    <div className="relative rounded-[3rem] border-[12px] border-zinc-900 overflow-hidden shadow-2xl bg-black aspect-[9/19] w-[300px]">
                      <div className="absolute top-0 w-full h-8 bg-zinc-900 z-20 flex justify-center">
                        <div className="h-4 w-24 bg-black rounded-b-xl" />
                      </div>
                      <img
                        src={screen.image}
                        alt={screen.alt}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        draggable="false"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamrAppSection;

