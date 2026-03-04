'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Creative Director, Pocket FM',
      text: 'Raja brings innovation and precision to every project. His AI integration expertise sets him apart.',
      role: 'Team Lead Supervisor',
    },
    {
      name: 'Freelance Clients',
      text: 'Exceptional storytelling combined with technical mastery. Delivers beyond expectations.',
      role: 'Multiple Agencies',
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-gradient">
          What People Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-hover backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-amber-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
