import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Omar Ahmed",
    badge: "Local Guide",
    text: "Amazing customer service and staff I recommend to shopping here. 👍",
    rating: 5,
    time: "3 years ago"
  },
  {
    name: "Jeffery Ellerman",
    badge: "Local Guide",
    text: "This is not a Verizon contract store. Verizon prepaid only — great for no-contract service.",
    rating: 5,
    time: "7 years ago"
  },
  {
    name: "Atomic",
    badge: "Reviewer",
    text: "Awesome little place!",
    rating: 5,
    time: "6 years ago"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-[#F5EFE6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Testimonials</span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-thin text-[#1A1410] leading-tight tracking-tight mb-4">
            What People <span className="italic text-[#C9A96E]">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
            <span className="text-[#1A1410] font-medium text-xl">4.8</span>
            <span className="text-[#A0907A] font-light">on Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="bg-white p-10 border border-[#E8DFD0] hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-[#C9A96E]/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}