import React from 'react';

export default function WhyWorkWithMe() {
  const points = [
    {
      title: 'Practical',
      desc: 'Build around the actual problem, not unnecessary complexity or buzzwords.',
    },
    {
      title: 'Faster',
      desc: 'Deliver working, functional solutions on time with short feedback loops.',
    },
    {
      title: 'Hands-on',
      desc: 'Deep familiarity from building, breaking, and shipping real AI and web systems.',
    },
    {
      title: 'Focused',
      desc: 'Keep code modular, interfaces understandable, and features genuinely useful.',
    },
  ];

  return (
    <section className="border-t border-[#303034] px-5 sm:px-6 py-20 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
          Principles
        </span>
        <h2 className="mt-3 sm:mt-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] text-[#F2F0EA]">
          Why work with me.
        </h2>

        <div className="mt-8 sm:mt-12 grid gap-px border border-[#303034] bg-[#303034] sm:grid-cols-2 lg:grid-cols-4">
          {points.map((pt, idx) => (
            <div
              key={pt.title}
              className="group h-full bg-[#0B0B0D] p-6 sm:p-8 transition-colors duration-300 hover:bg-[#141416]"
            >
              <span className="font-mono text-xs text-[#B7FF5A] font-semibold">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[#F2F0EA] group-hover:text-[#B7FF5A] transition-colors">
                {pt.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7A5A0]">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
