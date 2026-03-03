import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Omar Ahmed",
    badge: "Local Guide · 24 reviews",
    text: "Amazing customer service and staff I recommend to shopping here. 👍",
    rating: 5,
    time: "3 years ago"
  },
  {
    name: "Jeffery Ellerman",
    badge: "Local Guide · 194 reviews",
    text: "This is not a Verizon contract store. Verizon prepaid only — great for flexible, no-contract mobile service.",
    rating: 5,
    time: "7 years ago"
  },
  {
    name: "Atomic",
    badge: "2 reviews",
    text: "Awesome little place!",
    rating: 5,
    time: "6 years ago"
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Header */}
      <div className="bg-[#0D0D0D] py-24 text-center border-b border-[#C9A96E]/10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Customer Reviews</span>
          <div className="h-px w-12 bg-[#C9A96E]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-thin text-white tracking-tight">
          What People <span className="italic text-[#C9A96E]">Say</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 fill-[#C9A96E] text-[#C9A96E]" />
            ))}
          </div>
          <span className="text-white font-thin text-3xl">4.8</span>
          <span className="text-[#6B5E50] font-light">· 8 Google Reviews</span>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-10 border border-[#E8DFD0] hover:border-[#C9A96E]/40 transition-colors duration-300 flex flex-col">
              <Quote className="w-8 h-8 text-[#C9A96E]/30 mb-6" />
              <p className="text-[#4A3F35] font-light leading-relaxed text-lg italic flex-1 mb-8">
                "{r.text}"
              </p>
              <div className="border-t border-[#E8DFD0] pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                    <span className="text-[#C9A96E] font-medium text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[#1A1410] font-medium text-sm">{r.name}</p>
                    <p className="text-[#A0907A] text-xs font-light">{r.badge} · {r.time}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="bg-[#0D0D0D] p-12 text-center">
          <h3 className="text-white font-thin text-2xl mb-4">Had a great experience?</h3>
          <p className="text-[#6B5E50] font-light mb-8 max-w-md mx-auto">
            We'd love to hear from you. Leave us a review on Google and help others in St. Louis find us.
          </p>
          <a
            href="https://maps.google.com/?q=Liberty+Paging+Services+2852+Cherokee+St+St+Louis+MO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] px-10 py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </div>
  );
}