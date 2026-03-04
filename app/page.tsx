import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
