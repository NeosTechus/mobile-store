import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "Home" },
    { label: "Services", page: "ServicesPage" },
    { label: "Phones", page: "PhonesPage" },
    { label: "Reviews", page: "ReviewsPage" },
    { label: "Contact", page: "ContactPage" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <style>{`
        :root {
          --gold: #C9A96E;
          --dark: #0D0D0D;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#C9A96E]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C9A96E]" />
            <span className="text-[#C9A96E] font-light tracking-[0.25em] text-sm uppercase">Liberty Paging</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className={`text-xs tracking-widest uppercase font-light transition-colors duration-300 ${
                  currentPageName === page ? "text-[#C9A96E]" : "text-[#A0907A] hover:text-[#C9A96E]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#C9A96E]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-t border-[#C9A96E]/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-widest uppercase font-light py-2 transition-colors duration-300 ${
                  currentPageName === page ? "text-[#C9A96E]" : "text-[#A0907A]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page content */}
      <div className="pt-16">{children}</div>

      {/* Footer */}
      <footer className="bg-[#080808] py-10 border-t border-[#C9A96E]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C9A96E]" />
            <span className="text-[#C9A96E] font-light tracking-[0.3em] text-sm uppercase">Liberty Paging Services</span>
          </div>
          <p className="text-[#3D3020] text-sm font-light">2852 Cherokee St, St. Louis, MO 63118 · (314) 772-7557</p>
          <p className="text-[#3D3020] text-xs font-light">© {new Date().getFullYear()} Liberty Paging Services</p>
        </div>
      </footer>
    </div>
  );
}