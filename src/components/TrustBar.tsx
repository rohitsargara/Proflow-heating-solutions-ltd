import { Clock, Users, Sparkles, Shield } from "lucide-react";

export function TrustBar() {
  const features = [
    {
      icon: Clock,
      title: "Same-Day Response",
      description: "Fast action when you need it most",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Polite, friendly & fully qualified",
    },
    {
      icon: Sparkles,
      title: "Clean & Tidy",
      description: "We respect your home and clean up",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Punctual, honest, and guaranteed work",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-xl shadow-xl shadow-slate-200/40 max-w-7xl xl:mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-brand-navy mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
