import React from 'react';

export default function Marquee() {
  const items = ['AI AGENTS', 'AUTOMATION', 'WEB APPS', 'GENAI', 'INTEGRATIONS'];

  return (
    <div className="w-full max-w-[100vw] overflow-hidden border-y border-[#303034] bg-[#0B0B0D] py-4 sm:py-5 select-none">
      <div className="flex w-max animate-marquee will-change-transform">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="px-5 sm:px-8 font-heading text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.18em] text-[#F2F0EA]">
              {item}
            </span>
            <span className="text-[#B7FF5A] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
