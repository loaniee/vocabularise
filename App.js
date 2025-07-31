import React, { useState, useEffect } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScrollDown = () => {
    setIsExpanded(true);
    // Scroll to the about section
    setTimeout(() => {
      const aboutSection = document.querySelector('#about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Listen for scroll events to auto-expand when scrolling past the arrow
  useEffect(() => {
    const handleScroll = () => {
      if (!isExpanded) {
        const gradientSection = document.querySelector('#gradient-section');
        if (gradientSection) {
          const rect = gradientSection.getBoundingClientRect();
          // If user scrolled past 70% of the gradient section, auto-expand
          if (rect.top + (rect.height * 0.7) < window.innerHeight) {
            setIsExpanded(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  return (
    <div 
      className="min-h-screen bg-black text-white font-serif"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="min-h-screen bg-black/50">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-4 mx-auto mt-16 max-w-6xl bg-gradient-to-r from-white/20 via-gray-600/60 to-black/80 backdrop-blur-md rounded-full font-montserrat">
          {/* Left: Welcome text */}
          <div className="text-lg tracking-wide text-white font-montserrat">
            welcome <span className="font-bold">AMBERT!</span>
          </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-8 text-lg font-light text-white font-montserrat">
          <a href="#" className="hover:text-blue-300">home</a>
          <a href="#" className="hover:text-blue-300">about us</a>
          <a href="#" className="hover:text-blue-300 text-center leading-tight">
            available<br />resources
          </a>
          <a href="#" className="hover:text-blue-300">contact</a>
        </div>

        {/* Right: Account Button */}
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 text-lg font-montserrat">
          my account
        </button>
      </nav>

      {/* Title */}
      <header className="text-center mt-12">
        <h1 className="font-light tracking-widest font-calgary max-w-6xl mx-auto px-8" 
            style={{
              WebkitTextStroke: '1px white',
              WebkitTextFillColor: 'transparent',
              textStroke: '1px white',
              color: 'transparent',
              fontSize: '125px'
            }}>
          VOCABULARISE
        </h1>
      </header>

      {/* About Section */}
      <section id="about-section" className="max-w-3xl mx-auto mt-2 px-4 text-center">
        <h2 className="text-4xl mb-4 text-white font-light font-neue-montreal">ABOUT US</h2>
        
        {/* Top text - always white */}
        <div className="text-white text-base leading-relaxed mt-4 font-montserrat">
          <p className="mb-4">Lorem ipsum dolor sit amet. Ut corporis aperiam non mollitia tempora est repellendus deleniti aut sint obcaecati. Aut numquam eligendi et sapiente omnis sed sapiente soluta et rerum aperiam eos beatae dicta!</p>
          <p className="mb-4">Est natus saepe ut totam sint cum voluptatem minus sit voluptate necessitatibus est consequatur commodi 33 illum vero. At nobis quae sit doloremque magni a voluptatem facere eum blanditiis quos id illum pariatur.</p>
        </div>
        
        {/* Bottom text with gradient overlay effect - only "Vel itaque explicabo..." paragraph */}
        <div id="gradient-section" className="relative">
          <div className={`text-base leading-relaxed mt-4 font-montserrat transition-all duration-700 ${isExpanded ? 'text-white' : 'text-white'}`}>
            <p className="mb-4">Vel itaque explicabo qui eaque neque ut accusamus galisum quo quasi nobis ut incidunt voluptatum aut sunt dignissimos qui consequatur provident. Est laudantium dolore et aspernatur consequuntur ut ducimus quia sed fugiat accusantium! Qui beatae assumenda ut minus doloribus ut recusandae neque eos internos blanditiis eos dignissimos recusandae eos galisum facilis.</p>
          </div>
          
          {/* Gradient overlay with arrow - only show when not expanded */}
          {!isExpanded && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Gradient fade-out effect - fast and heavy fade at the end */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black transition-opacity duration-700"></div>
              
              {/* Arrow overlaid on "mus quia sed fugiat accusanti" text */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                <button 
                  onClick={handleScrollDown}
                  className="group focus:outline-none"
                >
                  <svg className="w-8 h-8 text-white opacity-70 animate-bounce group-hover:opacity-100 transition-opacity cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Last paragraph - always white, no gradient */}
        <div className="text-white text-base leading-relaxed mt-4 font-montserrat">
          <p className="mb-4">Aut deleniti saepe vel fugiat facere sed excepturi nesciunt et quasi laboriosam et nobis facilis ut sunt rerum in provident autem.</p>
        </div>
      </section>

      
      {/* Extra space when expanded */}
      {isExpanded && <div className="h-20"></div>}
      </div>
    </div>
  );
}

export default App;
