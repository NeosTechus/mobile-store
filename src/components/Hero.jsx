import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C9A96E 0%, transparent 55%), radial-gradient(circle at 80% 50%, #8B6914 0%, transparent 55%)`
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#C9A96E]/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Gold horizontal line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Main content: two column layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

        {/* Left: Text */}
        <div className="text-center lg:text-left flex-1">
          <motion.div
            className="mb-6 flex items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="h-px w-16 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Est. in St. Louis</span>
            <div className="h-px w-16 bg-[#C9A96E]" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-thin text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            Liberty
            <br />
            <motion.span
              className="text-[#C9A96E] italic font-extralight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              Paging
            </motion.span>
            <br />
            Services
          </motion.h1>

          <motion.p
            className="text-[#A0907A] text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Your trusted mobile & prepaid specialist in the heart of St. Louis, Missouri.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="tel:3147727557"
              className="group flex items-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] px-8 py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.a
              href="#about"
              className="flex items-center gap-3 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-[#C9A96E] px-8 py-4 transition-all duration-300 font-light tracking-widest text-sm uppercase"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 text-[#6B5E50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-[#C9A96E]" />
              <span className="font-light tracking-wide">2852 Cherokee St, St. Louis, MO 63118</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#3D3020]" />
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-[#C9A96E]" />
              <span className="font-light tracking-wide">Open · Closes 8 PM</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Phone image */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Glow ring behind phone */}
          <motion.div
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Phone mockup */}
          <motion.div
            className="relative z-10"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Phone frame */}
            <div className="relative w-44 h-80 md:w-56 md:h-[26rem] bg-gradient-to-b from-[#1C1C1E] to-[#0D0D0D] rounded-[2.5rem] border-2 border-[#C9A96E]/30 shadow-2xl shadow-[#C9A96E]/10 overflow-hidden">
              {/* Top notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0D0D0D] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-8 h-1.5 rounded-full bg-[#2A2A2A]" />
              </div>

              {/* Screen content */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0D0D0D] flex flex-col items-center justify-center px-4 pt-8">
                {/* Status bar */}
                <div className="absolute top-8 left-0 right-0 flex justify-between px-5 text-[#C9A96E]/60 text-[8px] font-light">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                {/* Verizon logo area */}
                <motion.div
                  className="flex flex-col items-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-[#C9A96E]" />
                  </div>
                  <p className="text-[#C9A96E] text-xs font-light tracking-widest uppercase">Verizon</p>
                  <p className="text-white/40 text-[9px] font-light mt-1">Prepaid</p>
                </motion.div>

                {/* Signal bars */}
                <div className="flex items-end gap-1 mt-6">
                  {[2, 4, 6, 8, 10].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 rounded-sm bg-[#C9A96E]"
                      style={{ height: h }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                    />
                  ))}
                </div>

                {/* App icons grid */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C9A96E]/20 to-[#8B6914]/10 border border-[#C9A96E]/10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.08, duration: 0.3 }}
                    />
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <div className="w-20 h-1 rounded-full bg-[#C9A96E]/30" />
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute right-0 top-24 w-1 h-12 bg-[#C9A96E]/20 rounded-l-sm" />
              <div className="absolute left-0 top-20 w-1 h-8 bg-[#C9A96E]/20 rounded-r-sm" />
              <div className="absolute left-0 top-32 w-1 h-8 bg-[#C9A96E]/20 rounded-r-sm" />
            </div>

            {/* Gold reflection line */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#C9A96E]/10 blur-xl rounded-full" />
          </motion.div>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#C9A96E]"
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              transformOrigin: "130px center",
              top: "50%",
              left: "50%",
            }}
          />
        </motion.div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
      </motion.div>
    </section>
  );
}