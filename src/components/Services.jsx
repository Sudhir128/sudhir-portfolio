import React from 'react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'AI Agents & Automation',
      desc: 'AI-powered agents, intelligent workflows and automation systems built around practical tasks and business processes.',
    },
    {
      num: '02',
      title: 'Apps & Websites',
      desc: 'Responsive websites and applications built around real requirements, clean code, and usable experiences.',
    },
    {
      num: '03',
      title: 'Generative AI Solutions',
      desc: 'AI-powered features and applications using modern Generative AI, RAG, and LLM technologies.',
    },
    {
      num: '04',
      title: 'AI Integrations',
      desc: 'Connecting AI capabilities with APIs, cloud applications, databases, vector stores, and existing business workflows.',
    },
    {
      num: '05',
      title: 'Software Prototypes',
      desc: 'Turning early ideas into functional, interactive prototypes that can be tested, validated, and improved quickly.',
    },
  ];

  return (
    <section id="services" className="border-t border-[#303034] px-5 sm:px-6 py-20 sm:py-24 md:px-10 md:py-32 scroll-mt-20 md:scroll-mt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-4 border-b border-[#303034] pb-8 sm:pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
              02 — What I Build
            </span>
            <h2 className="mt-3 sm:mt-4 font-heading text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[#F2F0EA]">
              What I can help with.
            </h2>
          </div>
        </div>

        <div className="mt-2">
          {services.map((item) => (
            <div
              key={item.num}
              className="group relative overflow-hidden border-b border-[#303034] transition-all duration-300"
            >
              <div className="absolute inset-0 origin-left scale-x-0 bg-[#B7FF5A] transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <div className="relative grid grid-cols-1 items-center gap-4 py-8 transition-colors duration-300 group-hover:text-[#0B0B0D] md:grid-cols-12 md:py-10">
                <span className="font-mono text-sm text-[#A7A5A0] transition-colors duration-300 group-hover:text-[#0B0B0D] md:col-span-2">
                  {item.num}
                </span>

                <h3 className="font-heading text-2xl font-semibold tracking-tight text-[#F2F0EA] transition-colors duration-300 group-hover:text-[#0B0B0D] md:col-span-5 md:text-3xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#A7A5A0] transition-colors duration-300 group-hover:text-[#1a1a1f] md:col-span-5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
