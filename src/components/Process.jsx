import React from 'react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Understand the core problem, user expectations, and desired measurable outcome.' },
    { num: '02', title: 'Explore', desc: 'Choose a suitable technical architecture and design the simplest viable system.' },
    { num: '03', title: 'Build', desc: 'Develop the responsive application, website, AI agent, or automation workflow.' },
    { num: '04', title: 'Test', desc: 'Test corner cases, debug edge flows, optimize performance, and refine the UX.' },
    { num: '05', title: 'Ship', desc: 'Deploy to production, configure monitoring, and iterate based on real usage.' },
  ];

  return (
    <section className="border-t border-[#303034] px-5 sm:px-6 py-20 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-4 border-b border-[#303034] pb-8 sm:pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
              04 — Process
            </span>
            <h2 className="mt-3 sm:mt-4 font-heading text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[#F2F0EA]">
              From idea to working software.
            </h2>
          </div>
        </div>

        <div className="mt-16 hidden md:block">
          <div className="relative grid grid-cols-5 gap-0">
            <div className="absolute left-0 top-3 h-px w-full bg-[#303034]" />

            {steps.map((step) => (
              <div key={step.num} className="relative pr-6">
                <div className="relative mb-6 h-6 w-6 flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#B7FF5A] ring-4 ring-[#0B0B0D]" />
                </div>
                <div className="font-mono text-xs text-[#B7FF5A] font-semibold">{step.num}</div>
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-[#F2F0EA]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[210px] text-sm leading-relaxed text-[#A7A5A0]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:hidden">
          <div className="relative border-l border-[#303034] pl-6 space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#B7FF5A] ring-4 ring-[#0B0B0D]" />
                <div className="font-mono text-xs text-[#B7FF5A] font-semibold">{step.num}</div>
                <h3 className="mt-1 font-heading text-lg font-semibold tracking-tight text-[#F2F0EA]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#A7A5A0]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
