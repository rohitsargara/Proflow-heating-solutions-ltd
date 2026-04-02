import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Edgbaston",
      text: "Quick response and job done perfectly. The engineer was polite, explained everything clearly, and left the place spotless.",
      rating: 5,
    },
    {
      name: "David Thompson",
      location: "Solihull",
      text: "Very professional, friendly and reliable. Called them for an emergency leak and they arrived within an hour. Highly recommended.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      location: "Harborne",
      text: "Bathroom renovation exceeded expectations. The attention to detail is outstanding, and the finish is absolute luxury.",
      rating: 5,
    },
    {
      name: "Michael Patel",
      location: "Smethwick",
      text: "Clean, tidy, and highly skilled work. Replaced our old boiler with zero fuss. Great communication throughout the job.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Customer Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 text-balance">
            Trusted by Local Homeowners
          </h3>
          <p className="text-lg text-slate-600 text-balance">
            Don't just take our word for it. See what our satisfied customers across Birmingham have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-heading font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-navy">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
