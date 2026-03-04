'use client';

import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-amber-400 font-semibold text-lg tracking-widest uppercase">
              Welcome to my creative space
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Raja Singh</span>
            </h1>
            <p className="text-3xl text-gray-300 font-light">Senior AI Video Editor</p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Crafting cinematic stories through cutting-edge AI technology and meticulous video editing. 6+ years transforming concepts into visual masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#work"
              className="btn-primary text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative h-96 md:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-amber-400/30 rounded-3xl backdrop-blur-sm"></div>
          <div className="absolute inset-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="text-center space-y-4">
              <Play
                className="mx-auto animate-bounce"
                size={64}
                style={{ color: '#FCD34D' }}
              />
              <p className="text-amber-400 font-semibold">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
