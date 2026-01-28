import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/445/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-6">
          NEW COLLECTION DROP 001
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Curated for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Modern Lifestyle</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover a selection of premium goods designed to elevate your everyday. 
          Minimalist aesthetics meet maximum utility.
        </p>
        <button 
          onClick={onShopNow}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
        >
          <span className="mr-2">Explore Products</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;