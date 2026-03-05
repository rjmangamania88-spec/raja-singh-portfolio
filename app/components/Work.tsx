'use client';

import { useState } from 'react';
import { Play, X, ChevronRight } from 'lucide-react';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const allProjects = [
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

  const categories = [
    {
      name: 'AI Promos',
      icon: '🤖',
      description: 'Innovative promotional videos created with cutting-edge AI technology',
      count: 8,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      name: 'Trailers',
      icon: '🎬',
      description: 'High-impact cinematic trailers with stunning visual effects',
      count: 2,
      color: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    },
    {
      name: 'ShowPromos',
      icon: '📺',
      description: 'Professional show promotions with seamless motion graphics',
      count: 3,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
  ];

  const getCategoryProjects = (categoryName: string) => {
    const categoryMap: { [key: string]: string } = {
      'AI Promos': 'AI Promos',
      'Trailers': 'Trailers',
      'ShowPromos': 'ShowPromos',
    };
    return allProjects.filter((p) => p.category === categoryMap[categoryName]);
  };

  const currentCategoryProjects = selectedCategory
    ? getCategoryProjects(selectedCategory)
    : [];

  const getCategoryIcon = (categoryName: string) => {
    const cat = categories.find((c) => c.name === categoryName);
    return cat?.icon || '';
  };

  const getCategoryColor = (categoryName: string) => {
    const cat = categories.find((c) => c.name === categoryName);
    return cat?.color || '';
  };

  return (
    <section id="work" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-gradient">
          Featured Work
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Click on any category to explore my complete portfolio
        </p>

        {/* Main Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Card Background */}
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden"
                style={{ background: category.color }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-amber-300 font-semibold">
                    View {category.count} Videos
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-sm p-4 border-t border-white/10">
                <p className="text-amber-400 font-semibold text-center">
                  {category.count} {category.count === 1 ? 'Video' : 'Videos'}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full Screen Modal - Category View */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {getCategoryIcon(selectedCategory)}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">
                      {selectedCategory}
                    </h2>
                    <p className="text-gray-400 mt-1">
                      {currentCategoryProjects.length} Videos
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedVideo(null);
                  }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategoryProjects.map((project) => (
                  <div
                    key={project.id}
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
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                        <h4 className="text-lg font-bold text-white">
                          {project.title}
                        </h4>
                        <p className="text-amber-400 text-xs font-semibold mt-1">
                          {project.year}
                        </p>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="bg-gradient-to-br from-amber-500/5 to-blue-500/5 border border-amber-400/20 rounded-b-2xl p-4 backdrop-blur-sm">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
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
                  allProjects.find((p) => p.id === selectedVideo)?.videoId
                }?autoplay=1&modestbranding=1&rel=0`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Title */}
            <div className="mt-6 text-white">
              <h3 className="text-2xl font-bold">
                {allProjects.find((p) => p.id === selectedVideo)?.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {allProjects.find((p) => p.id === selectedVideo)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
