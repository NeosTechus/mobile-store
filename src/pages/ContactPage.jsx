import { Phone, MapPin, Clock, ExternalLink, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <div className="py-24 text-center border-b border-[#C9A96E]/10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Get in Touch</span>
          <div className="h-px w-12 bg-[#C9A96E]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-thin text-white tracking-tight">
          Contact <span className="italic text-[#C9A96E]">Us</span>
        </h1>
        <p className="text-[#6B5E50] font-light mt-6 max-w-xl mx-auto text-lg leading-relaxed px-6">
          We're here to help. Reach out by phone or come visit us in store on Cherokee Street.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-5 p-8 border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#C9A96E]/40 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <p className="text-[#A0907A] text-xs tracking-widest uppercase font-light mb-2">Phone</p>
                <a href="tel:3147727557" className="text-white text-xl font-light hover:text-[#C9A96E] transition-colors duration-300">
                  (314) 772-7557
                </a>
                <p className="text-[#6B5E50] text-sm font-light mt-1">Call us anytime during business hours</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-8 border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#C9A96E]/40 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <p className="text-[#A0907A] text-xs tracking-widest uppercase font-light mb-2">Address</p>
                <p className="text-white text-lg font-light">2852 Cherokee St</p>
                <p className="text-[#6B5E50] font-light">St. Louis, MO 63118</p>
                <p className="text-[#6B5E50] text-sm font-light mt-1">Located inside Cherokee Food Market</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-8 border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-colors duration-300">
              <div className="w-12 h-12 border border-[#C9A96E]/40 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <p className="text-[#A0907A] text-xs tracking-widest uppercase font-light mb-2">Hours</p>
                <p className="text-white font-light">Open Daily</p>
                <p className="text-[#6B5E50] font-light">Closes at 8:00 PM</p>
                <p className="text-[#6B5E50] text-sm font-light mt-1">Check Google Maps for updated hours</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="border border-[#C9A96E]/20 p-10 bg-[#161410] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs tracking-widest uppercase font-light">We're Ready to Help</span>
              </div>
              <h3 className="text-white font-thin text-3xl mb-4 leading-tight">
                Visit us on<br />
                <span className="italic text-[#C9A96E]">Cherokee Street</span>
              </h3>
              <p className="text-[#6B5E50] font-light leading-relaxed mb-10">
                No appointment needed. Walk in and our friendly team will be happy to help you with phones, plans, top-ups, and more.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:3147727557"
                className="w-full flex items-center justify-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=2852+Cherokee+St+St+Louis+MO+63118"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-[#C9A96E] py-4 transition-all duration-300 font-light tracking-widest text-sm uppercase"
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="mt-16 border border-[#C9A96E]/10 overflow-hidden">
          <iframe
            title="Liberty Paging Services Location"
            src="https://maps.google.com/maps?q=2852+Cherokee+St,+St.+Louis,+MO+63118&output=embed"
            className="w-full h-72 grayscale opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}