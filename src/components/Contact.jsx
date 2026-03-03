import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="grid md:grid-cols-2 gap-20 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-thin text-white leading-tight tracking-tight mb-8">
              Visit Us <span className="italic text-[#C9A96E]">Today</span>
            </h2>
            <p className="text-[#6B5E50] font-light leading-relaxed text-lg mb-12">
              We're conveniently located inside Cherokee Food Market. Stop by and let our team help you find the perfect plan or device.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Address", lines: ["2852 Cherokee St", "St. Louis, MO 63118", "Located in: Cherokee Food Market"] },
                { icon: Phone, label: "Phone", lines: ["(314) 772-7557"], link: "tel:3147727557" },
                { icon: Clock, label: "Hours", lines: ["Open · Closes 8 PM", "Check Google Maps for full schedule"] }
              ].map(({ icon: Icon, label, lines, link }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <motion.div
                    className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{ borderColor: "#C9A96E", scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-4 h-4 text-[#C9A96E]" />
                  </motion.div>
                  <div>
                    <p className="text-[#A0907A] text-xs tracking-widest uppercase font-light mb-2">{label}</p>
                    {lines.map((line, j) =>
                      link && j === 0 ? (
                        <a key={j} href={link} className="text-white font-light hover:text-[#C9A96E] transition-colors duration-300 block">{line}</a>
                      ) : (
                        <p key={j} className={`font-light text-sm ${j === 0 ? "text-white" : "text-[#6B5E50]"} ${j > 0 ? "mt-1" : ""}`}>{line}</p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            className="border border-[#C9A96E]/20 p-12 bg-[#161410] hover:border-[#C9A96E]/40 transition-colors duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-thin text-2xl mb-4 tracking-wide">Ready to connect?</h3>
            <p className="text-[#6B5E50] font-light leading-relaxed mb-10">
              Give us a call or come visit us in store. Our friendly team is ready to help you with all your mobile needs.
            </p>

            <div className="space-y-4">
              <motion.a
                href="tel:3147727557"
                className="w-full flex items-center justify-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                (314) 772-7557
              </motion.a>

              <motion.a
                href="https://maps.google.com/?q=2852+Cherokee+St+St+Louis+MO+63118"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-[#C9A96E] py-4 transition-all duration-300 font-light tracking-widest text-sm uppercase"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </motion.a>
            </div>

            <div className="mt-10 pt-8 border-t border-[#2A2010]">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-[#C9A96E] text-sm">★</span>
                  ))}
                </div>
                <span className="text-[#A0907A] text-sm font-light">4.8 on Google Maps</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}