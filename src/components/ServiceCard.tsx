import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ReactNode, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface TabContent {
  title: string;
  items: string[];
  subtitle?: string;
}

interface ServiceCardProps {
  title: string;
  description: string | string[];
  image?: string;
  images?: string[];
  video?: string;
  icon: ReactNode;
  stats?: { label: string; value: string }[];
  features: string[];
  tabs?: TabContent[];
  ctaText: string;
  ctaVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  secondaryCtaLink?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  images,
  video,
  icon,
  stats,
  features,
  tabs,
  ctaText,
  ctaVariant = "default",
  ctaLink,
  secondaryCtaText,
  secondaryCtaVariant = "outline",
  secondaryCtaLink,
  className = ""
}: ServiceCardProps) => {
  const displayImages = images || (image ? [image] : []);
  const hasCarousel = displayImages.length > 1;
  const [openTabs, setOpenTabs] = useState<boolean[]>(
    tabs ? tabs.map((_, i) => i === 0) : []
  );

  const toggleTab = (index: number) => {
    setOpenTabs(prev => prev.map((open, i) => {
      if (i === index) return !open;
      return false;
    }));
  };

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]",
      className
    )}>
      {/* Media Section */}
      <div className="relative h-72 overflow-hidden bg-gray-200">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : hasCarousel ? (
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full h-full"
          >
            <CarouselContent className="h-72">
              {displayImages.map((img, index) => (
                <CarouselItem key={index} className="h-72">
                  <img
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-md border-transparent shadow-sm hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 backdrop-blur-md border-transparent shadow-sm hover:bg-white" />
          </Carousel>
        ) : (
          <img
            src={displayImages[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Icon Badge */}
        <div className="absolute top-6 left-6 p-3 bg-white rounded-2xl shadow-sm z-10 text-black">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
            {title}
          </h3>

          <div className="space-y-4">
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index} className="text-gray-500 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-500 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Tabs */}
        {tabs && tabs.length > 0 && (
          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {tabs.map((tab, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() => toggleTab(index)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left",
                      openTabs[index]
                        ? "bg-black text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {tab.title}
                  </button>

                  <div
                    className={cn(
                      "mt-2 overflow-hidden transition-all duration-300",
                      openTabs[index] ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="space-y-2 p-2">
                      {tab.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="pt-6 flex flex-col sm:flex-row gap-3">
          {ctaLink && (
            <Button
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700 font-medium px-6"
              asChild
            >
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                {ctaText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {secondaryCtaText && secondaryCtaLink && (
            <Button
              variant="outline"
              className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 font-medium px-6"
              asChild
            >
              <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer">
                {secondaryCtaText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;