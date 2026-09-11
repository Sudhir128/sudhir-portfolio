import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const current = Math.min(100, Math.max(0, Math.round((window.scrollY / scrollHeight) * 100)));
        setPercent(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-40 hidden h-screen w-px md:block" aria-hidden="true">
      <div className="absolute inset-0 bg-[#303034]" />
      <div
        className="absolute left-0 top-0 w-px origin-top bg-[#B7FF5A] transition-all duration-75 shadow-[0_0_8px_#B7FF5A]"
        style={{ height: `${percent}%` }}
      />
    </div>
  );
}
