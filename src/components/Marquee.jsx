import React from 'react';

export default function Marquee() {
  const items = ['AI AGENTS', 'AUTOMATION', 'WEB APPS', 'GENAI', 'INTEGRATIONS'];

  return (
    <div className="overflow-hidden border-y border-[#303034] bg-[#0B0B0D] py-5 select-none">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="px-8 font-heading text-base font-medium uppercase tracking-[0.18em] text-[#F2F0EA] md:text-lg">
              {item}
            </span>
            <span className="text-[#B7FF5A] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
