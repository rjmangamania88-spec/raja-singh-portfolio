'use client';

export default function About() {
  const expertise = [
    'Cinematic Editing',
    'AI Video Generation',
    'Motion Graphics',
    'Color Grading',
    'Narrative Design',
    'Anime/Fantasy Edits',
  ];

  const quickFacts = [
    { label: 'Experience', value: '6+ Years' },
    { label: 'AI Tools Mastered', value: '10+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Current Role', value: 'Team Lead' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Creative and detail-driven Video Editor with 6+ years of experience blending cinematic storytelling with cutting-edge AI tools. Specialized in narrative-driven edits, high-impact promos, and anime/fantasy content.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Currently leading video production at Pocket FM as Team Lead & Video Editor. My expertise spans AI content generation, motion graphics, and visual storytelling across multiple platforms. I'm passionate about pushing creative boundaries using emerging technologies.
            </p>

            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-semibold text-amber-400">Key Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="card-hover backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Facts</h3>
            <div className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-gray-400 text-sm">{fact.label}</p>
                  <p className="text-xl font-bold text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
