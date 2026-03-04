'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Cinematic Trailers',
      category: 'Trailers',
      description:
        'High-impact narrative trailers blending cinematic storytelling with cutting-edge visual effects',
      image: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      year: '2023-2026',
      link: '#',
    },
    {
      id: 2,
      title: 'AI-Generated Promos',
      category: 'AI Promos',
      description:
        'Innovative promotional videos created using AI tools like Runway, Sora, and Pika for dynamic storytelling',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      year: '2023-2026',
      link: '#',
    },
    {
      id: 3,
      title: 'Anime & Fantasy Content',
      category: 'ShowPromos',
      description:
        'Specialized cinematic edits for anime and fantasy shows with seamless motion graphics integration',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      year: '2021-2026',
      link: '#',
    },
  ];

  return (
    <section id="work" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-gradient">
          Featured Work
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Explore my portfolio across trailers, AI promos, and cinematic content
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 transform transition-all duration-300 hover:scale-105"
            >
              <div
                className="absolute inset-0 transition-transform duration-300"
                style={{ background: project.image }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-between p-8 translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                <div>
                  <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    View Project <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs bg-amber-500/20 border border-amber-400/50 text-amber-400 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
