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

  // Lock body scroll when mobile menu is open to prevent background scrolling jank on iOS & Android
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

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
          ? 'border-b border-[#303034] bg-[#0B0B0D]/95 backdrop-blur-md shadow-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 0.75rem)',
        paddingBottom: scrolled ? '0.75rem' : '1.25rem',
      }}
    >
      <nav 
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-6 md:px-10"
        style={{
          paddingLeft: 'max(env(safe-area-inset-left, 0px), 1.25rem)',
          paddingRight: 'max(env(safe-area-inset-right, 0px), 1.25rem)',
        }}
      >
        <a
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          className="group font-heading text-base font-bold tracking-tight text-[#F2F0EA] flex items-center gap-2 py-2"
        >
          <span className="text-[#B7FF5A] group-hover:rotate-12 transition-transform duration-200">✦</span>
          <span>SUDHIR</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-[#A7A5A0] transition-colors hover:text-[#F2F0EA] py-1"
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

        {/* Mobile Hamburger Button with standard 44px touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-[#F2F0EA] transition-colors hover:text-[#B7FF5A] focus:outline-none focus:ring-1 focus:ring-[#B7FF5A] md:hidden"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown with Safe Area Bottom Padding */}
      {mobileMenuOpen && (
        <div 
          className="border-t border-[#303034] bg-[#0B0B0D]/98 backdrop-blur-xl px-6 py-6 md:hidden shadow-2xl transition-all duration-300 max-h-[calc(100dvh-5rem)] overflow-y-auto"
          style={{
            paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 2rem)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] py-3 font-mono text-sm uppercase tracking-[0.18em] text-[#A7A5A0] transition-colors hover:text-[#B7FF5A] border-b border-[#303034]/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] rounded bg-[#B7FF5A] py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#0B0B0D] font-semibold"
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
