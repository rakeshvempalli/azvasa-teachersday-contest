import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { AzvasaLogo } from './AzvasaLogo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Contest Categories', id: 'contests' },
    { label: 'Prizes & Recognition', id: 'prizes' },
    { label: 'Important Dates', id: 'info' },
    { label: 'How to Submit', id: 'submission' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#072A52] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Official AZVASA Logo from Public Folder */}
          <div
            id="campaign-logo-badge"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            <div className="transition-transform group-hover:scale-[1.02] flex items-center">
              <AzvasaLogo
                height={52}
                className="w-auto object-contain"
              />
            </div>

            {/* Campaign Text */}
            <div className="hidden lg:flex flex-col pl-4 border-l-2 border-[#072A52]/20">
              <span className="text-[11px] font-black tracking-widest text-[#0055FE] uppercase">
                Teachers' Day Contest
              </span>

              <span className="text-[10px] font-bold text-[#072A52]/70 uppercase">
                Campaign 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-black text-[#072A52] hover:text-[#0055FE] transition-colors relative py-1 focus:outline-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-submit-cta"
              onClick={() => handleNavClick('submission')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6B00] text-white font-black text-sm tracking-wide shadow-[3px_3px_0px_#072A52] hover:bg-[#e05e00] active:translate-x-0.5 active:translate-y-0.5 transition-all border-2 border-[#072A52] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FFB703]" />

              <span>SUBMIT ENTRY</span>

              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border-2 border-[#072A52] text-[#072A52] shadow-[2px_2px_0px_#072A52] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b-2 border-[#072A52] px-4 pt-3 pb-6 space-y-3 shadow-[0px_6px_0px_0px_#072A52]"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg font-black text-[#072A52] hover:bg-blue-50 hover:text-[#0055FE] transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('submission')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF6B00] text-white font-black text-sm border-2 border-[#072A52] shadow-[3px_3px_0px_#072A52]"
            >
              <Sparkles className="w-4 h-4 text-[#FFB703]" />

              <span>CHOOSE CONTEST & SUBMIT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
