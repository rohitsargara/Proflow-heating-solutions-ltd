export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Contact or Request Quote",
      description: "Call us directly or fill out our simple online form to get started.",
    },
    {
      number: "02",
      title: "Quick Response & Assessment",
      description: "We'll respond rapidly, assess the situation, and provide a clear, transparent price.",
    },
    {
      number: "03",
      title: "Professional Service Delivery",
      description: "Our skilled engineers arrive on time and complete the work to the highest standards.",
    },
    {
      number: "04",
      title: "Clean Finish & Satisfaction",
      description: "We clean up thoroughly and ensure you are 100% satisfied with the results.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 text-balance">
            How It Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-brand-grey rounded-full flex items-center justify-center mb-6 shadow-lg shadow-slate-200/50">
                <span className="text-3xl font-heading font-bold text-brand-teal">{step.number}</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-navy mb-3">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
