import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-brand-teal font-heading font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-xl text-brand-navy tracking-tight">
                Proflow <span className="text-brand-blue">Heating</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:01210000000"
              className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-navy/20 hover:shadow-brand-navy/30"
            >
              <Phone className="w-4 h-4" />
              <span>0121 000 0000</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-navy p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-slate-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="tel:01210000000"
                className="flex items-center justify-center gap-2 w-full bg-brand-navy text-white px-6 py-3 rounded-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call 0121 000 0000</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
