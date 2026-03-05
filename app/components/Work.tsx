'use client';

import { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const projects = [
    // AI Generated Promos Section
    {
      id: 1,
      title: 'AI Generated Promo 1',
      category: 'AI Promos',
      description: 'Innovative promotional video created with cutting-edge AI technology',
      videoId: 'xHlYZXvhcPw',
      year: '2024',
    },
    {
      id: 2,
      title: 'AI Generated Promo 2',
      category: 'AI Promos',
      description: 'Dynamic AI-powered promotional content with stunning visuals',
      videoId: 'CnrTDM4MMHs',
      year: '2024',
    },
    {
      id: 3,
      title: 'AI Generated Promo 3',
      category: 'AI Promos',
      description: 'Creative promotional video using advanced AI tools',
      videoId: 'FG4Qq62oanA',
      year: '2024',
    },
    {
      id: 4,
      title: 'AI Generated Promo 4',
      category: 'AI Promos',
      description: 'Engaging promo showcasing AI video generation capabilities',
      videoId: 'ZbTDhmMvwXA',
      year: '2024',
    },
    {
      id: 5,
      title: 'AI Generated Promo 5',
      category: 'AI Promos',
      description: 'Professional promotional video created with AI technology',
      videoId: 'U1iqlAY0hgM',
      year: '2024',
    },
    {
      id: 6,
      title: 'AI Generated Promo 6',
      category: 'AI Promos',
      description: 'Innovative content showcasing AI video generation',
      videoId: 'r9WUUtfpzY8',
      year: '2024',
    },
    {
      id: 7,
      title: 'AI Generated Promo 7',
      category: 'AI Promos',
      description: 'Dynamic promotional video with AI-enhanced effects',
      videoId: '8OURTVeedsU',
      year: '2024',
    },
    {
      id: 8,
      title: 'AI Generated Promo 8',
      category: 'AI Promos',
      description: 'Creative AI-powered promotional content',
      videoId: 'WDbRLgzuIsA',
      year: '2024',
    },

    // Cinematic Trailers Section
    {
      id: 9,
      title: 'Cinematic Trailer 1',
      category: 'Trailers',
      description: 'High-impact cinematic trailer with stunning visual effects',
      videoId: 'ys1lmp59fHA',
      year: '2024',
    },
    {
      id: 10,
      title: 'Cinematic Trailer 2',
      category: 'Trailers',
      description: 'Epic cinematic trailer blending storytelling with cutting-edge effects',
      videoId: 'xNOlbEN0kUE',
      year: '2024',
    },

    // Show Promos Section
    {
      id: 11,
      title: 'Show Promo 1',
      category: 'ShowPromos',
      description: 'Cinematic show promotion with seamless motion graphics',
      videoId: 'AESxfmCXHw0',
      year: '2024',
    },
    {
      id: 12,
      title: 'Show Promo 2',
      category: 'ShowPromos',
      description: 'Dynamic show promotion showcasing engaging content',
      videoId: 'IHXjf0VjicI',
      year: '2024',
    },
    {
      id: 13,
      title: 'Show Promo 3',
      category: 'ShowPromos',
      description: 'Professional show promotion with high-quality editing',
      videoId: 'h1DbUntbDaU',
      year: '2024',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Promos':
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'Trailers':
        return 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
      case 'ShowPromos':
        return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      default:
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
  };

  const groupedProjects = {
    'AI Promos': projects.filter((p) => p.category === 'AI Promos'),
    'Trailers': projects.filter((p) => p.category === 'Trailers'),
    'ShowPromos': projects.filter((p) => p.category === 'ShowPromos'),
  };

  return (
    <section id="work" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-gradient">
          Featured Work
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Watch my complete portfolio of trailers, AI promos, and show promotions
        </p>

        {/* AI Generated Promos Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-400 mb-8 flex items-center gap-3">
            <span className="text-2xl">🤖</span> AI Generated Promos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedProjects['AI Promos'].map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{ background: getCategoryColor(project.category) }}
                  ></div>

                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(project.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform group-hover:scale-110">
                      <Play
                        size={32}
                        className="text-black ml-1"
                        fill="black"
                      />
                    </div>
                  </button>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                    <h4 className="text-lg font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-gradient-to-br from-amber-500/5 to-blue-500/5 border border-amber-400/20 rounded-b-2xl p-4 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-amber-500/20 border border-amber-400/50 text-amber-400 px-2 py-1 rounded">
                      {project.year}
                    </span>
                    <button
                      onClick={() => setSelectedVideo(project.id)}
                      className="flex items-center gap-1 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                    >
                      Watch
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Trailers Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-400 mb-8 flex items-center gap-3">
            <span className="text-2xl">🎬</span> Cinematic Trailers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedProjects['Trailers'].map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{ background: getCategoryColor(project.category) }}
                  ></div>

                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(project.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform group-hover:scale-110">
                      <Play
                        size={32}
                        className="text-black ml-1"
                        fill="black"
                      />
                    </div>
                  </button>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                    <h4 className="text-lg font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-gradient-to-br from-amber-500/5 to-blue-500/5 border border-amber-400/20 rounded-b-2xl p-4 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-amber-500/20 border border-amber-400/50 text-amber-400 px-2 py-1 rounded">
                      {project.year}
                    </span>
                    <button
                      onClick={() => setSelectedVideo(project.id)}
                      className="flex items-center gap-1 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                    >
                      Watch
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show Promos Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-amber-400 mb-8 flex items-center gap-3">
            <span className="text-2xl">📺</span> Show Promos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedProjects['ShowPromos'].map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{ background: getCategoryColor(project.category) }}
                  ></div>

                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(project.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform group-hover:scale-110">
                      <Play
                        size={32}
                        className="text-black ml-1"
                        fill="black"
                      />
                    </div>
                  </button>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                    <h4 className="text-lg font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-gradient-to-br from-amber-500/5 to-blue-500/5 border border-amber-400/20 rounded-b-2xl p-4 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-amber-500/20 border border-amber-400/50 text-amber-400 px-2 py-1 rounded">
                      {project.year}
                    </span>
                    <button
                      onClick={() => setSelectedVideo(project.id)}
                      className="flex items-center gap-1 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
                    >
                      Watch
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal - Full Screen Player */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${
                  projects.find((p) => p.id === selectedVideo)?.videoId
                }?autoplay=1&modestbranding=1&rel=0`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Title */}
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">
                {projects.find((p) => p.id === selectedVideo)?.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {projects.find((p) => p.id === selectedVideo)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
