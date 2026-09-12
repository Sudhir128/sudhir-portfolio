import React, { useState, useEffect } from 'react';
import PixelAnimation from './PixelAnimation';

export default function Hero() {
  const [istTime, setIstTime] = useState('');

  // Live IST Clock (Asia/Kolkata)
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setIstTime(formatted);
      } catch (e) {
        setIstTime('12:00:00');
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = ['I', 'build', 'things', 'for', 'the', 'web', 'and', 'beyond.'];

  return (
    <section id="top" className="relative overflow-hidden px-5 sm:px-6 pb-16 pt-28 sm:pb-20 sm:pt-36 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Bio & Hero Content */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#A7A5A0]">
              <span className="text-[#B7FF5A] font-bold">[</span>
              <span>AI DEVELOPER / SOFTWARE ENGINEER</span>
              <span className="text-[#B7FF5A] font-bold">]</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 sm:mt-6 font-heading text-[clamp(2.15rem,6.5vw,5.5rem)] font-bold leading-[1.02] sm:leading-[0.96] tracking-[-0.03em] text-[#F2F0EA] break-words">
              {headlineWords.map((word, i) => (
                <span key={i} className="mr-[0.2em] inline-block hover:text-[#B7FF5A] transition-colors duration-200">
                  {word}
                </span>
              ))}
            </h1>

            {/* Description Paragraphs */}
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#A7A5A0]">
              AI agents, automation systems, applications and websites — built from ideas into working software.
            </p>

            <p className="mt-3.5 sm:mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#8E8C86]">
              I'm an Information Technology graduate based in Chennai, focused on building practical software with modern web and AI technologies.
            </p>

            {/* Status Pill */}
            <div className="mt-6 flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7FF5A] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7FF5A]"></span>
              </span>
              <span>Available for freelance projects</span>
            </div>

            {/* Action Buttons: Thumb-friendly on Mobile, Inline on Desktop */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center min-h-[46px] gap-2 bg-[#B7FF5A] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-[#0B0B0D] font-medium transition-all duration-200 hover:bg-[#c9ff7a] hover:shadow-[0_0_20px_rgba(183,255,90,0.3)] text-center"
              >
                <span>View my work</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true">↘</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center min-h-[46px] gap-2 border border-[#303034] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-[#F2F0EA] transition-all duration-200 hover:border-[#F2F0EA] hover:bg-[#141416] text-center"
              >
                <span>Let's work together</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pixel Animation Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[500px] flex flex-col bg-[#141416]/60 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-[#141416]/90">
              
              {/* Minimal Top Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 opacity-75">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
                  Portfolio / 2026
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-[#B7FF5A] font-semibold">
                  {istTime ? `${istTime} IST` : 'LIVE IST'}
                </span>
              </div>

              {/* The Corrected Pixel Animation */}
              <div className="p-3 sm:p-6">
                <PixelAnimation />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
