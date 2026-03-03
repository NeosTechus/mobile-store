import { Smartphone, Wifi, CreditCard, Headphones, Zap, Globe, RefreshCw, Lock, MessageSquare, Battery } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Prepaid Phones",
    desc: "Browse a wide selection of smartphones and basic phones with flexible prepaid plans. No credit checks, no long-term contracts."
  },
  {
    icon: Wifi,
    title: "Verizon Prepaid",
    desc: "Authorized Verizon prepaid specialist. Enjoy nationwide coverage on one of the most reliable networks in the US at unbeatable prepaid rates."
  },
  {
    icon: CreditCard,
    title: "Plan Top-Ups & Refills",
    desc: "Quick and hassle-free account refills for Verizon prepaid and other major prepaid carriers. Walk in and be done in minutes."
  },
  {
    icon: RefreshCw,
    title: "Phone Transfers",
    desc: "Switching from another carrier? We'll help you transfer your number and contacts to your new plan smoothly and quickly."
  },
  {
    icon: Headphones,
    title: "Device Setup & Support",
    desc: "Our knowledgeable staff will set up your new phone, configure your account, and walk you through everything you need to know."
  },
  {
    icon: Zap,
    title: "Accessories",
    desc: "Cases, screen protectors, chargers, cables, earbuds, power banks, and more. We stock quality accessories for all major phone brands."
  },
  {
    icon: Globe,
    title: "International Calling Plans",
    desc: "Stay in touch with family and friends abroad. We offer international prepaid options for affordable global calling and data."
  },
  {
    icon: MessageSquare,
    title: "Account Management",
    desc: "Need help changing your plan, adding features, or understanding your bill? We'll assist you in managing your account in person."
  },
  {
    icon: Lock,
    title: "Phone Unlocking",
    desc: "Ask us about unlocking compatible devices for use with other carriers or international SIM cards."
  },
  {
    icon: Battery,
    title: "SIM Cards",
    desc: "Replacement SIM cards and activation assistance for prepaid accounts. Get connected the same day."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <div className="py-24 text-center border-b border-[#C9A96E]/10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">What We Offer</span>
          <div className="h-px w-12 bg-[#C9A96E]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-thin text-white tracking-tight">
          Our <span className="italic text-[#C9A96E]">Services</span>
        </h1>
        <p className="text-[#6B5E50] font-light mt-6 max-w-xl mx-auto text-lg leading-relaxed px-6">
          From prepaid plans to device support, we've got everything you need — all under one roof on Cherokee Street.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A96E]/10">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0D0D0D] p-10 group hover:bg-[#161410] transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 border border-[#C9A96E]/30 group-hover:border-[#C9A96E] flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <h3 className="text-white font-light text-xl mb-4 tracking-wide">{title}</h3>
              <p className="text-[#6B5E50] font-light leading-relaxed text-sm flex-1">{desc}</p>
              <div className="mt-8 h-px w-8 bg-[#C9A96E]/40 group-hover:w-16 group-hover:bg-[#C9A96E] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#6B5E50] font-light mb-6">Have a question about a specific service?</p>
          <a
            href="tel:3147727557"
            className="inline-flex items-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] px-10 py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
          >
            Call Us: (314) 772-7557
          </a>
        </div>
      </div>
    </div>
  );
}