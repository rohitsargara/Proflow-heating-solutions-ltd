export function Footer() {
  return (
    <footer className="bg-brand-navy-light pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-navy rounded flex items-center justify-center">
                <span className="text-brand-teal font-heading font-bold text-lg">P</span>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Proflow <span className="text-brand-blue">Heating</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Birmingham's trusted plumbing and heating experts. Professional, reliable, and always ready to help.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-teal transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-teal transition-colors">Boiler Installation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-teal transition-colors">Radiator Repair</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-teal transition-colors">Bathroom Renovation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-teal transition-colors">General Maintenance</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Areas Covered</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Birmingham</li>
              <li className="text-slate-400">Solihull</li>
              <li className="text-slate-400">Smethwick</li>
              <li className="text-slate-400">West Midlands</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">Small Heath, Birmingham, West Midlands</span>
              </li>
              <li>
                <a href="tel:01210000000" className="text-brand-teal hover:text-white transition-colors font-bold text-lg">
                  0121 000 0000
                </a>
                <p className="text-slate-400 text-sm mt-1">24/7 Emergency Availability</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Proflow Heating Solutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
