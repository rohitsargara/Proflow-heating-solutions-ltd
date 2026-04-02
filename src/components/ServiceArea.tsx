import { MapPin } from "lucide-react";

export function ServiceArea() {
  const areas = ["Birmingham", "Solihull", "Smethwick", "Sutton Coldfield", "Dudley", "West Bromwich"];

  return (
    <section className="py-16 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-brand-teal" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Service Area</h2>
            </div>
            <p className="text-slate-300 text-lg">
              Serving homes and businesses across the West Midlands with rapid, reliable response times.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-3">
              {areas.map((area, index) => (
                <span key={index} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  {area}
                </span>
              ))}
              <span className="bg-brand-teal/20 border border-brand-teal/30 text-brand-teal px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                + Surrounding Areas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
