import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface QuoteTestimonial {
  id: string;
  quote: string;
  rating: number; // 4 or 5 stars
}

export const QUOTE_REVIEWS: QuoteTestimonial[] = [
  {
    id: "q1",
    quote:
      "SVM IT Solutions transformed our CPaaS infrastructure. Their team delivered ultra-low latency queue messaging handling 100k+ daily events with 100% reliability.",
    rating: 5,
  },
  {
    id: "q2",
    quote:
      "The Next.js fashion storefront designed by SVM IT Solutions increased our mobile conversion rate by 45%. Lightning fast load times and stunning UI aesthetic!",
    rating: 5,
  },
  {
    id: "q3",
    quote:
      "Professionalism at its best. They developed our industrial engineering portal with corporate elegance and seamless B2B client quote lead capturing.",
    rating: 4,
  },
  {
    id: "q4",
    quote:
      "Our villa booking system and mobile reservation flow created by the team runs flawlessly. Guests love the clean photos and easy checkout process.",
    rating: 5,
  },
  {
    id: "q5",
    quote:
      "Outstanding custom ERP & CRM implementation. Automated our entire order lifecycle and saved our operations team over 20 hours every week.",
    rating: 4,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTE_REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? QUOTE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTE_REVIEWS.length);
  };

  const current = QUOTE_REVIEWS[currentIndex];

  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 size-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md mb-4">
          <Quote className="size-3.5" />
          <span>Client Feedback & Reviews</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-10">
          What Our Partners Experience
        </h2>

        {/* Quote Card Slider */}
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl transition-all duration-500 min-h-[220px] flex flex-col items-center justify-center">
          {/* Rating Stars */}
          <div className="flex items-center gap-1.5 mb-6 text-amber-400">
            {[...Array(current?.rating || 5)].map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400" />
            ))}
          </div>

          {/* Quote Text Only */}
          <p className="text-slate-100 text-base sm:text-xl font-medium leading-relaxed italic max-w-2xl">
            "{current?.quote || ""}"
          </p>

          {/* Slider Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {QUOTE_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-emerald-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Left & Right Arrow Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="flex size-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:scale-110 transition-all shadow-md"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="flex size-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:scale-110 transition-all shadow-md"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
