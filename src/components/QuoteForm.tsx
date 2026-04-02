import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="quote" className="py-24 bg-brand-grey relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-navy z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left side: Info */}
            <div className="md:col-span-2 bg-brand-navy p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Get Your Free Quote</h3>
                <p className="text-slate-300 mb-8">
                  Fill out the form and our team will get back to you shortly. Same-day slots available for emergencies.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-1">Call Us Directly</p>
                  <a href="tel:01210000000" className="text-2xl font-heading font-bold hover:text-brand-teal transition-colors">
                    0121 000 0000
                  </a>
                </div>
                <div>
                  <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@proflowheating.co.uk" className="text-lg hover:text-brand-teal transition-colors">
                    info@proflowheating.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="md:col-span-3 p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-brand-navy">Request Received!</h4>
                  <p className="text-slate-600">
                    Thank you. One of our engineers will contact you shortly to discuss your requirements.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-brand-blue font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                    <select 
                      id="service" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="boiler">Boiler & Heating</option>
                      <option value="bathroom">Bathroom Installation</option>
                      <option value="radiator">Radiator Services</option>
                      <option value="general">General Plumbing</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">Postcode / Area</label>
                      <input 
                        type="text" 
                        id="location" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="B1 1AA"
                      />
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-2">Urgency</label>
                      <select 
                        id="urgency" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                      >
                        <option value="standard">Standard (Within a few days)</option>
                        <option value="urgent">Urgent (Next 24-48 hours)</option>
                        <option value="emergency">Emergency (Same Day)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending Request...</span>
                    ) : (
                      <>
                        Get Your Free Quote Now
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
