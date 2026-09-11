import React, { useState } from 'react';

export default function TechStack() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const tools = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'Node.js',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Firebase',
    'Supabase',
    'Git',
    'GitHub',
    'AI / LLM APIs'
  ];

  return (
    <section className="border-t border-[#303034] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
            Stack
          </span>
          <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] text-[#F2F0EA]">
            Tools I work with.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 select-none">
          {tools.map((tool, idx) => {
            const isHovered = hoveredIdx === idx;
            const isDimmed = hoveredIdx !== null && !isHovered;

            return (
              <span
                key={tool}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`cursor-default font-heading text-3xl font-semibold tracking-tight transition-all duration-300 md:text-5xl lg:text-6xl ${
                  isHovered
                    ? 'text-[#B7FF5A] scale-105'
                    : isDimmed
                    ? 'text-[#2A2A30]'
                    : 'text-[#F2F0EA]'
                }`}
              >
                {tool}
              </span>
            );
          })}
        </div>

        <p className="mt-12 max-w-md font-mono text-xs leading-relaxed text-[#A7A5A0]">
          Not equal expertise in every tool — these are the ones I reach for depending on the problem and project constraints.
        </p>
      </div>
    </section>
  );
}
