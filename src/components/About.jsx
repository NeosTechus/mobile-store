import { Star, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -40 : direction === "right" ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <FadeIn delay={0} direction="left">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-thin text-[#1A1410] leading-tight mb-8 tracking-tight">
                A Cornerstone of<br />
                <span className="italic text-[#C9A96E]">Cherokee Street</span>
              </h2>
              <p className="text-[#6B5E50] text-lg leading-relaxed font-light mb-6">
                Nestled in the vibrant Cherokee Food Market at 2852 Cherokee Street, Liberty Paging Services has been serving the St. Louis community with dedication and care.
              </p>
              <p className="text-[#6B5E50] leading-relaxed font-light">
                We specialize in Verizon prepaid services and mobile solutions, offering personalized service that big-box stores simply can't match. Our customers keep coming back — and they bring their friends.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <span className="text-[#1A1410] font-medium text-lg">4.8</span>
                <span className="text-[#A0907A] font-light">· 8 reviews</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Star, title: "4.8 Star Rating", desc: "Consistently praised for exceptional customer service and knowledgeable staff.", delay: 0.1 },
              { icon: Shield, title: "Verizon Prepaid", desc: "Authorized Verizon prepaid specialist — no contracts, just reliable connectivity.", delay: 0.2 },
              { icon: Users, title: "Community Trusted", desc: "A beloved neighborhood shop in the heart of St. Louis's Cherokee Street.", delay: 0.3 }
            ].map(({ icon: Icon, title, desc, delay }) => (
              <FadeIn key={title} delay={delay} direction="right">
                <motion.div
                  className="flex items-start gap-5 p-6 bg-white border border-[#E8DFD0] hover:border-[#C9A96E]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A96E]/5"
                  whileHover={{ x: 4 }}
                >
                  <div className="mt-1 w-10 h-10 bg-[#F5EFE6] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A1410] font-medium mb-2 tracking-wide">{title}</h3>
                    <p className="text-[#A0907A] font-light text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}