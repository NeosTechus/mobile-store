import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] py-12 border-t border-[#C9A96E]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C9A96E]" />
            <span className="text-[#C9A96E] font-light tracking-[0.3em] text-sm uppercase">Liberty Paging Services</span>
          </div>
          <p className="text-[#3D3020] text-sm font-light">
            2852 Cherokee St, St. Louis, MO 63118 · (314) 772-7557
          </p>
          <p className="text-[#3D3020] text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Liberty Paging Services
          </p>
        </div>
      </div>
    </footer>
  );
}