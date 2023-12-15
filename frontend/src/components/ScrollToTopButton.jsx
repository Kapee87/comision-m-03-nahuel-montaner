import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-16 right-10 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 z-10`}
    >
      <button
        className="bg-slate-600/50 hover:bg-slate-600 transition-all duration-300 p-2 rounded-full text-white focus:outline-none text-3xl tooltip"
        onClick={scrollToTop}
        data-tip="Ir arriba"
      >
        <span className='hue-rotate-30'>
          🔺
        </span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;