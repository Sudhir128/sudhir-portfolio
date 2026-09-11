import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MenuIcon, XIcon } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#303034] bg-[#0B0B0D]/90 backdrop-blur-md py-3.5 shadow-lg'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="group font-heading text-base font-bold tracking-tight text-[#F2F0EA] flex items-center gap-2"
        >
          <span className="text-[#B7FF5A] group-hover:rotate-12 transition-transform duration-200">✦</span>
          <span>SUDHIR</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-[#A7A5A0] transition-colors hover:text-[#F2F0EA]"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#B7FF5A] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 border border-[#303034] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#F2F0EA] transition-all duration-200 hover:border-[#B7FF5A] hover:text-[#B7FF5A]"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="text-[#F2F0EA] p-1.5 md:hidden"
        >
          {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[#303034] bg-[#0B0B0D] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.15em] text-[#A7A5A0] hover:text-[#F2F0EA]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.15em] text-[#B7FF5A]"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
