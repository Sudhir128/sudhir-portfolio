import React from 'react';
import { ArrowUpRight, GithubIcon, MailIcon, InstagramIcon } from './icons';

export default function Footer() {
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <section className="border-t border-[#303034] px-6 py-28 md:px-10 md:py-36 bg-[#0B0B0D]">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="mx-auto max-w-4xl font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-[#F2F0EA]">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#A7A5A0]">
            Have an idea, problem, or project you want to explore? Start a conversation.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#B7FF5A] px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-[#0B0B0D] font-semibold transition-all duration-200 hover:bg-[#c9ff7a] hover:shadow-[0_0_25px_rgba(183,255,90,0.35)]"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#303034] px-6 py-12 md:px-10 bg-[#0E0E11]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-heading text-2xl font-bold tracking-tight text-[#F2F0EA]">
                SUDHIR
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                AI & Software Developer
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#8E8C86]">
                Chennai, India
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                Navigate
              </div>
              <ul className="mt-4 space-y-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-body text-sm text-[#F2F0EA] transition-colors hover:text-[#B7FF5A]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A7A5A0]">
                Connect
              </div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:sudhiraugusto28@gmail.com"
                    className="inline-flex items-center gap-2 font-body text-sm text-[#F2F0EA] transition-colors hover:text-[#B7FF5A]"
                  >
                    <MailIcon size={14} className="text-[#A7A5A0]" />
                    <span>sudhiraugusto28@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sudhir128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-[#F2F0EA] transition-colors hover:text-[#B7FF5A]"
                  >
                    <GithubIcon size={14} className="text-[#A7A5A0]" />
                    <span>github.com/Sudhir128</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/the_techmonkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-[#F2F0EA] transition-colors hover:text-[#B7FF5A]"
                  >
                    <InstagramIcon size={14} className="text-[#A7A5A0]" />
                    <span>instagram.com/the_techmonkey</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
