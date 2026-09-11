import React from 'react';

export default function About() {
  return (
    <section id="about" className="border-t border-[#303034] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
          03 — About
        </span>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#F2F0EA]">
              An IT graduate who likes building things.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#A7A5A0]">
              I'm an Information Technology graduate based in Chennai, interested in building useful software across web development, AI, and automation. I enjoy taking an idea, understanding the real problem behind it, and turning it into something functional that people can actually use.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#8E8C86]">
              Currently focused on AI agents, Generative AI, full-stack applications, modern websites, and robust API integrations.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#8E8C86]">
              I prefer building practical things rather than over-engineering solutions. If you need something built cleanly and delivered reliably, let's connect.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between border-t border-[#303034] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Role</span>
                <div className="mt-2 font-heading text-xl font-semibold text-[#F2F0EA]">
                  Independent Developer
                </div>
                <div className="mt-0.5 text-sm text-[#A7A5A0]">AI & Full Stack Software</div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Location</span>
                <div className="mt-2 font-heading text-xl font-semibold text-[#F2F0EA]">
                  Chennai, Tamil Nadu, India
                </div>
                <div className="mt-0.5 font-mono text-xs text-[#8E8C86]">13.0827° N, 80.2707° E</div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">Availability</span>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#B7FF5A] animate-pulse" />
                  <span className="font-mono text-sm text-[#B7FF5A]">Open for Freelance & Contract</span>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-[#303034] bg-[#141416] p-6">
              <div className="font-mono text-xs text-[#B7FF5A]">"Practical over complex."</div>
              <p className="mt-2 text-xs leading-relaxed text-[#A7A5A0]">
                Every line of code should serve the user's intent. Start simple, deliver value early, and iterate with real feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
