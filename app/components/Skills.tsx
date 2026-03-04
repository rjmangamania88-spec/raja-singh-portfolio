'use client';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Video Editing',
      items: ['Adobe Premier Pro', 'Motion Graphics', 'Color Grading'],
    },
    {
      category: 'AI Tools',
      items: ['Runway Gen-2', 'Sora', 'Pika', 'Leonardo AI', 'Haeluo'],
    },
    {
      category: 'Design',
      items: ['Adobe After Effects', 'Photoshop', 'Canva'],
    },
    {
      category: 'Audio',
      items: ['Audio Editing', 'Sound Design', 'Podcast Production'],
    },
  ];

  const aiTools = ['Runway', 'Sora', 'Pika', 'Leonardo AI', 'Haeluo'];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-gradient">
          Technical Arsenal
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="card-hover backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-amber-400 mb-6">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((skill, sidx) => (
                  <div key={sidx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:w-full transition-all duration-500"
                          style={{
                            width: `${75 + Math.random() * 25}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Tools Highlight */}
        <div className="mt-12 glass-effect border border-amber-400/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-amber-400 mb-4">
            Specialized AI Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool}
                className="bg-slate-800/50 border border-amber-400/30 rounded-lg py-3 px-4 text-center font-semibold text-amber-400 hover:bg-amber-400/10 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
