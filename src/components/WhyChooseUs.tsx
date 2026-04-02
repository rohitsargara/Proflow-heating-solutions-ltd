import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "Arrived on time and fixed issues quickly",
    "Very professional and polite team",
    "Left everything clean and tidy",
    "Excellent communication throughout the job",
    "Attention to detail is outstanding",
    "Fully insured and guaranteed work"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 text-balance">
              The Most Reliable Plumbing & Heating Brand in Birmingham
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just fix pipes; we provide peace of mind. Our commitment to excellence means you get top-tier service, transparent pricing, and results that last.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#quote"
                className="inline-flex items-center justify-center bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-brand-navy/20"
              >
                Get Your Free Quote Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional plumber at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-teal">10+</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-navy text-lg">Years of</p>
                  <p className="text-slate-500">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
