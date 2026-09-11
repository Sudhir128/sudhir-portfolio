import React from 'react';
import { ArrowUpRight, GithubIcon } from './icons';

export default function SelectedWork() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-[#303034] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7A5A0]">
              01 — Selected Work
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.02em] text-[#F2F0EA]">
              Things I've built.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#A7A5A0]">
            Applications, security tools, business software and AI systems built while learning, experimenting and solving practical problems.
          </p>
        </div>

        {/* Consistent 2-Column Alternating Project List */}
        <div className="mt-16 space-y-24 md:space-y-32">
          
          {/* PROJECT 1: King's Auction App */}
          <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-[#303034] bg-[#141416] transition-all duration-300 group-hover:border-[#B7FF5A]/50 rounded-xl">
                <div className="flex items-center gap-2 border-b border-[#303034] px-4 py-3 bg-[#0E0E10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <div className="ml-3 flex-1 truncate border border-[#303034] bg-[#0B0B0D] px-3 py-1 font-mono text-[10px] text-[#A7A5A0]">
                    https://kings-auction.vercel.app
                  </div>
                </div>
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden bg-white p-6 select-none text-slate-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1E3A8A] text-[#1E3A8A]">
                    <span className="font-heading text-lg font-bold">K</span>
                  </div>
                  <h4 className="mt-3 font-heading text-base font-bold text-[#1E3A8A]">Kings Auction</h4>
                  <p className="text-[11px] text-[#4B5563]">Welcome to the Badminton Auction</p>
                  
                  <div className="mt-4 w-full max-w-[220px] space-y-2">
                    <div className="rounded border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-[10px] text-[#6B7280]">
                      Email
                    </div>
                    <div className="flex items-center justify-between rounded border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-[10px] text-[#6B7280]">
                      <span>Password</span>
                      <span className="text-[#9ca3af]">••••••</span>
                    </div>
                    <div className="rounded bg-[#1E3A8A] py-2 text-center text-[10px] font-medium text-white shadow-sm">
                      Sign In
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">01 / Auction Platform</span>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                King's Auction App
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#A7A5A0]">
                An application built around an auction workflow, with a dedicated interface for managing the auction experience, team bidding, and live player draft tracking.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href="https://kings-auction.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#B7FF5A] hover:underline"
                >
                  <span>View live</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://github.com/Sudhir128/kings-auction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0] hover:text-[#F2F0EA]"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 2: Privacy Risk Guard (Alternating Layout) */}
          <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">02 / Privacy & Security</span>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                Privacy Risk Guard
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#A7A5A0]">
                A privacy-focused project for identifying and assessing potential security vulnerabilities, tracker cookies, and risk scores associated with URLs and online resources.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href="https://github.com/Sudhir128/privacyguard-url-risk-detector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#B7FF5A] hover:underline"
                >
                  <GithubIcon size={14} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="overflow-hidden border border-[#303034] bg-[#141416] transition-all duration-300 group-hover:border-[#B7FF5A]/50 rounded-xl">
                <div className="flex items-center gap-2 border-b border-[#303034] px-4 py-3 bg-[#0E0E10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <div className="ml-3 flex-1 truncate border border-[#303034] bg-[#0B0B0D] px-3 py-1 font-mono text-[10px] text-[#A7A5A0]">
                    github.com/Sudhir128/privacyguard-url-risk-detector
                  </div>
                </div>
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden bg-[#0B0B0D] p-6">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                    [ Security Engine ]
                  </div>
                  <div className="absolute right-4 top-4 font-mono text-[10px] text-[#B7FF5A]">
                    Python · FastAPI
                  </div>
                  <h4 className="relative font-heading text-2xl font-semibold tracking-tight text-[#F2F0EA] sm:text-3xl">
                    Privacy Risk Guard
                  </h4>
                  <span className="relative mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                    URL Risk Detection & Analysis
                  </span>
                  <div className="relative mt-4 flex items-center gap-2 font-mono text-[10px] text-[#B7FF5A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF5A] animate-pulse" />
                    <span>Real-time heuristic scanning</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 3: ProBikers Inventory (Standardized 2-Column Layout) */}
          <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-[#303034] bg-[#141416] transition-all duration-300 group-hover:border-[#B7FF5A]/50 rounded-xl">
                <div className="flex items-center gap-2 border-b border-[#303034] px-4 py-3 bg-[#0E0E10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <div className="ml-3 flex-1 truncate border border-[#303034] bg-[#0B0B0D] px-3 py-1 font-mono text-[10px] text-[#A7A5A0]">
                    github.com/Sudhir128/inventory_probikers
                  </div>
                </div>
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden bg-[#0B0B0D] p-6">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                    [ Business System ]
                  </div>
                  <div className="absolute right-4 top-4 font-mono text-[10px] text-[#B7FF5A]">
                    Database · Workflows
                  </div>
                  <h4 className="relative font-heading text-2xl font-semibold tracking-tight text-[#F2F0EA] sm:text-3xl">
                    ProBikers Inventory
                  </h4>
                  <span className="relative mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                    Inventory Management & Stock Tracking
                  </span>
                  <div className="relative mt-4 flex items-center gap-2 font-mono text-[10px] text-[#B7FF5A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF5A] animate-pulse" />
                    <span>Operational warehouse movements</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">03 / Inventory</span>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                ProBikers Inventory
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#A7A5A0]">
                An inventory management project focused on organizing products, stock movements, supplier batches, and operational business workflows for seamless warehouse tracking.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href="https://github.com/Sudhir128/inventory_probikers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#B7FF5A] hover:underline"
                >
                  <GithubIcon size={14} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 4: QIQ Market Research Agent (Standardized 2-Column Alternating Layout) */}
          <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">04 / AI Agent</span>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                QIQ Market Research Agent
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#A7A5A0]">
                An AI-powered market research application built around an agent-based voice workflow for gathering, synthesizing, and summarizing real-time competitive intel.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href="https://qiq-market-researcher.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#B7FF5A] hover:underline"
                >
                  <span>View live demo</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="overflow-hidden border border-[#303034] bg-[#141416] transition-all duration-300 group-hover:border-[#B7FF5A]/50 rounded-xl">
                <div className="flex items-center gap-2 border-b border-[#303034] px-4 py-3 bg-[#0E0E10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <div className="ml-3 flex-1 truncate border border-[#303034] bg-[#0B0B0D] px-3 py-1 font-mono text-[10px] text-[#A7A5A0]">
                    https://qiq-market-researcher.netlify.app
                  </div>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#162b5a] via-[#1a3a7c] to-[#2d57b5] p-5 sm:p-6 flex items-center justify-center select-none">
                  <div className="mx-auto max-w-sm w-full rounded-xl bg-white p-5 shadow-2xl text-slate-800">
                    <span className="inline-block rounded-full bg-[#dce6fe] px-2.5 py-0.5 text-[10px] font-medium text-[#1e3a8a]">
                      AI Voice Market Research Agent
                    </span>
                    <h4 className="mt-2 font-heading text-lg font-bold text-[#0B0B0D]">QIQ Market Researcher</h4>
                    <p className="mt-1 text-[11px] leading-snug text-[#4B5563]">
                      Voice-driven competitor analysis, customer insights, SWOT, and market sizing.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {[
                        ['Competitor Analysis', 'Pricing & market gaps.'],
                        ['Market Sizing', 'TAM, SAM, SOM calculation.'],
                        ['Industry Trends', 'Emerging market shifts.'],
                        ['SWOT Research', 'Strengths & opportunities.'],
                      ].map(([title, desc], i) => (
                        <div key={i} className="rounded border border-[#e5e7eb] p-1.5 bg-[#f8fafc]">
                          <div className="text-[10px] font-semibold text-[#0B0B0D]">{title}</div>
                          <div className="text-[8px] leading-tight text-[#6b7280]">{desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2.5 text-center text-[8px] text-[#9ca3af] font-mono">
                      Powered by ElevenLabs Conversational AI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 5: AU Sports Management App */}
          <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-[#303034] bg-[#141416] transition-all duration-300 group-hover:border-[#B7FF5A]/50 rounded-xl">
                <div className="flex items-center gap-2 border-b border-[#303034] px-4 py-3 bg-[#0E0E10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#303034]" />
                  <div className="ml-3 flex-1 truncate border border-[#303034] bg-[#0B0B0D] px-3 py-1 font-mono text-[10px] text-[#A7A5A0]">
                    github.com/Sudhir128/au_sportsmangeapp
                  </div>
                </div>
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#0B0B0D]">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative flex h-[85%] w-[130px] flex-col rounded-[22px] border-2 border-[#303034] bg-[#141416] p-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-[#A7A5A0]">AU Sports</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF5A]" />
                    </div>
                    <div className="mt-2 h-px bg-[#303034]" />
                    <div className="mt-2 space-y-1.5">
                      {['Cricket Room', 'Football Room', 'Badminton Room', 'Tennis Room'].map((room, i) => (
                        <div key={i} className="rounded border border-[#303034] bg-[#0E0E10] px-1.5 py-1 text-[7px] text-[#F2F0EA]">
                          {room}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto rounded bg-[#B7FF5A] py-1 text-center text-[7px] font-bold text-[#0B0B0D]">
                      + Create room
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">05 / Mobile & Activities</span>
              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                AU Sports Management App
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-[#A7A5A0]">
                A sports management mobile application designed around creating sports rooms, inviting teammates, managing rosters, and coordinating sports activities.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href="https://github.com/Sudhir128/au_sportsmangeapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#B7FF5A] hover:underline"
                >
                  <GithubIcon size={14} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

        </div>

        {/* Link to More on GitHub */}
        <div className="mt-20">
          <a
            href="https://github.com/Sudhir128"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#A7A5A0] transition-colors hover:text-[#F2F0EA]"
          >
            <span>More on GitHub</span>
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B7FF5A]" />
          </a>
        </div>
      </div>
    </section>
  );
}
