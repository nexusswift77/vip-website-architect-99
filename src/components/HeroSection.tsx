
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const heroTexts = [
    "New Standard of Sophistication",
    "Pinnacle of Excellence",
    "Legacy of Distinction"
  ];

  // Reduced hero photos collection for better performance - only showing key images
  const heroPhotos = [
    "/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png",
    "/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png",
    "/lovable-uploads/3c79f6f7-1682-4d4f-954c-ea88a6d0cb8e.png",
    "/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png",
    "/lovable-uploads/d4fdfea7-8670-4110-9791-f0516ec43e1e.png",
    "/lovable-uploads/48401841-d864-4dae-a945-f26d5cb259d6.png"
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 5000); // Slower transition for better performance
    return () => clearInterval(interval);
  }, [heroPhotos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Optimized Sliding Photo Background with better performance */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-40' 
                : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${photo}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-luxury-black/50 z-1"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-4">The Power for Your Event</span>
            <span className="text-gradient-gold block mt-2 transition-all duration-1000 ease-in-out transform text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
            Where luxury meets logistics. Experience flawless VVIP service that transforms every occasion into an unforgettable moment of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in delay-500 px-4">
            <Link to="/book-meeting" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/40 relative overflow-hidden">
                <span className="relative z-10">Book VVIP Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Discover Excellence
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 animate-fade-in delay-700 px-4">
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">5+ Years Excellence</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">24/7 Premium Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">500+ VVIP Events</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex flex-col items-center text-luxury-white/70 hover:text-luxury-gold transition-all duration-300 group"
            >
              <span className="text-xs sm:text-sm font-medium mb-2 group-hover:scale-110 transition-transform">Discover Excellence</span>
              <div className="relative">
                <ChevronDown size={20} className="sm:w-6 sm:h-6 animate-pulse" />
                <div className="absolute inset-0 bg-luxury-gold/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Simplified decorative elements for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/40 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
