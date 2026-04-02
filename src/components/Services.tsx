import { motion } from "motion/react";
import { Wrench, Flame, ThermometerSun, Bath, PenTool as Tool, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Plumbing",
      description: "Rapid response for leaks, burst pipes, taps, and urgent fixes. We're here when you need us most.",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: Flame,
      title: "Heating & Boilers",
      description: "Expert boiler installation, servicing, and repair. Keep your home warm with efficient heating solutions.",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: ThermometerSun,
      title: "Radiator Services",
      description: "Professional radiator installation, replacement, and performance optimization for even heating.",
      color: "text-brand-blue",
      bg: "bg-blue-50",
    },
    {
      icon: Bath,
      title: "Bathroom Installation",
      description: "Full bathroom renovations from design to installation. High-quality finishes for your dream space.",
      color: "text-brand-teal",
      bg: "bg-cyan-50",
    },
    {
      icon: Tool,
      title: "General Plumbing",
      description: "Routine maintenance, repairs, and installations. No job is too small for our dedicated team.",
      color: "text-slate-600",
      bg: "bg-slate-100",
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 text-balance">
            Premium Plumbing & Heating Solutions
          </h3>
          <p className="text-lg text-slate-600 text-balance">
            From urgent emergency repairs to luxury bathroom installations, we deliver top-tier craftsmanship across Birmingham.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-navy mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#quote" className="inline-flex items-center text-brand-blue font-semibold group-hover:text-brand-navy transition-colors">
                Request Service
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
