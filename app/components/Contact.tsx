'use client';

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            Let's Create Together
          </h2>
          <p className="text-gray-400 text-lg">
            Ready for your next cinematic project? Let's talk about bringing your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-8">
          {/* Email */}
          <a
            href="mailto:rajadking88@gmail.com"
            className="card-hover hover:scale-105 transform"
          >
            <Mail className="mx-auto mb-4" size={32} style={{ color: '#FCD34D' }} />
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <p className="font-semibold text-amber-400 break-all">
              rajadking88@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+917988114273"
            className="card-hover hover:scale-105 transform"
          >
            <Phone className="mx-auto mb-4" size={32} style={{ color: '#FCD34D' }} />
            <p className="text-sm text-gray-400 mb-2">Phone</p>
            <p className="font-semibold text-amber-400">+91 79881 14273</p>
          </a>

          {/* Location */}
          <div className="card-hover hover:scale-105 transform">
            <MapPin className="mx-auto mb-4" size={32} style={{ color: '#FCD34D' }} />
            <p className="text-sm text-gray-400 mb-2">Location</p>
            <p className="font-semibold text-amber-400">Ambala Cantt, Haryana</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://linkedin.com/in/raja-singh-5b7036234"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-blue-500/20 border border-amber-400/30 rounded-full flex items-center justify-center hover:border-amber-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} style={{ color: '#FCD34D' }} />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#home"
          className="inline-block btn-primary mt-8"
        >
          Back to Top
        </a>
      </div>
    </section>
  );
}
