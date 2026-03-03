import { Smartphone, Star, CheckCircle } from "lucide-react";

const phones = [
  {
    brand: "Apple",
    models: ["iPhone 15", "iPhone 15 Plus", "iPhone 14", "iPhone 13", "iPhone SE (3rd Gen)"],
    color: "bg-[#F5F5F7]",
    textColor: "text-[#1D1D1F]",
    tag: "Popular"
  },
  {
    brand: "Samsung",
    models: ["Galaxy A15 5G", "Galaxy A25 5G", "Galaxy A54 5G", "Galaxy S23 FE", "Galaxy A03s"],
    color: "bg-[#1428A0]/5",
    textColor: "text-[#1428A0]",
    tag: "Best Value"
  },
  {
    brand: "Motorola",
    models: ["Moto G Play (2024)", "Moto G Power 5G", "Moto G Stylus 5G", "Moto G 5G (2024)", "Moto Edge 5G"],
    color: "bg-[#8B0000]/5",
    textColor: "text-[#8B0000]",
    tag: "Reliable"
  },
  {
    brand: "TCL",
    models: ["TCL 30 Z", "TCL 20 XE", "TCL Flip 2", "TCL 20S", "TCL 30 SE"],
    color: "bg-[#003DA5]/5",
    textColor: "text-[#003DA5]",
    tag: "Affordable"
  },
  {
    brand: "Alcatel",
    models: ["Alcatel GO FLIP 4", "Alcatel 1B (2022)", "Alcatel 3L", "Alcatel SMARTFLIP"],
    color: "bg-[#E8002D]/5",
    textColor: "text-[#E8002D]",
    tag: "Basic & Simple"
  },
  {
    brand: "Nokia",
    models: ["Nokia C110", "Nokia C300", "Nokia G310 5G", "Nokia 3310 3G"],
    color: "bg-[#005AFF]/5",
    textColor: "text-[#005AFF]",
    tag: "Durable"
  }
];

const features = [
  "No credit check required",
  "No long-term contracts",
  "Same-day activation",
  "Free setup assistance",
  "Verizon prepaid network",
  "Trade-in options available"
];

export default function PhonesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#0D0D0D] py-24 text-center border-b border-[#C9A96E]/10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">Our Inventory</span>
          <div className="h-px w-12 bg-[#C9A96E]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-thin text-white tracking-tight">
          Phones & <span className="italic text-[#C9A96E]">Devices</span>
        </h1>
        <p className="text-[#6B5E50] font-light mt-6 max-w-xl mx-auto text-lg leading-relaxed px-6">
          We carry a wide selection of smartphones and basic phones from top brands, all available on Verizon prepaid plans.
        </p>
      </div>

      {/* Why Buy Section */}
      <div className="bg-[#F5EFE6] py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-2xl font-thin text-[#1A1410] mb-10 tracking-wide">
            Why buy from <span className="italic text-[#C9A96E]">Liberty Paging?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f} className="flex items-center gap-3 bg-white p-4 border border-[#E8DFD0]">
                <CheckCircle className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span className="text-[#4A3F35] font-light text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phones Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones.map(({ brand, models, color, textColor, tag }) => (
            <div key={brand} className="bg-white border border-[#E8DFD0] hover:border-[#C9A96E]/50 transition-colors duration-300 overflow-hidden">
              <div className={`${color} px-8 pt-8 pb-6 border-b border-[#E8DFD0]`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Smartphone className={`w-5 h-5 ${textColor}`} />
                    <h3 className={`text-xl font-semibold ${textColor} tracking-wide`}>{brand}</h3>
                  </div>
                  <span className="text-xs bg-[#C9A96E] text-[#0D0D0D] px-3 py-1 font-medium tracking-wide uppercase">{tag}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#A0907A] text-xs tracking-widest uppercase font-light mb-4">Available Models</p>
                <ul className="space-y-2">
                  {models.map(model => (
                    <li key={model} className="flex items-center gap-2 text-[#4A3F35] font-light text-sm">
                      <div className="w-1 h-1 rounded-full bg-[#C9A96E]" />
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0D0D0D] p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-widest uppercase font-light">In-Store Only</span>
          </div>
          <h3 className="text-white font-thin text-2xl mb-4">Can't find what you're looking for?</h3>
          <p className="text-[#6B5E50] font-light mb-8 max-w-md mx-auto">
            Inventory changes regularly. Call or visit us in store — we'll do our best to help you find the right device at the right price.
          </p>
          <a
            href="tel:3147727557"
            className="inline-flex items-center gap-3 bg-[#C9A96E] hover:bg-[#B8954A] text-[#0D0D0D] px-10 py-4 transition-all duration-300 font-medium tracking-widest text-sm uppercase"
          >
            Call (314) 772-7557
          </a>
        </div>
      </div>
    </div>
  );
}