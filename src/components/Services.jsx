import { Smartphone, Wifi, CreditCard, Headphones, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: Smartphone, title: "Prepaid Phones", desc: "Latest handsets available with flexible prepaid plans. No contracts, no credit checks." },
  { icon: Wifi, title: "Verizon Prepaid", desc: "Authorized Verizon prepaid service provider. Access to one of the nation's largest networks." },
  { icon: CreditCard, title: "Plan Top-Ups", desc: "Quick and easy account refills and plan upgrades for all major prepaid carriers." },
  { icon: Headphones, title: "Device Support", desc: "Expert assistance for setup, transfers, and troubleshooting. We take the time to help." },
  { icon: Zap, title: "Accessories", desc: "Cases, chargers, screen protectors, and more — everything you need in one place." },
  { icon: Globe, title: "International Plans", desc: "Stay connected abroad with international prepaid options and calling plans." }
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 bg-[#0D0D0D] overflow-hidden">
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
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">What We Offer</span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-thin text-white leading-tight tracking-tight">
            Our <span className="italic text-[#C9A96E]">Services</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A96E]/10">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-[#0D0D0D] p-10 group hover:bg-[#161410] transition-all duration-500 flex flex-col cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 border border-[#C9A96E]/30 group-hover:border-[#C9A96E] flex items-center justify-center mb-6 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <Icon className="w-5 h-5 text-[#C9A96E]" />
              </motion.div>
              <h3 className="text-white font-light text-xl mb-4 tracking-wide">{title}</h3>
              <p className="text-[#6B5E50] font-light leading-relaxed text-sm flex-1">{desc}</p>
              <div className="mt-8 h-px w-8 bg-[#C9A96E]/40 group-hover:w-16 group-hover:bg-[#C9A96E] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}