import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import {
  PaperAirplaneDoodle,
  PencilDoodle,
  BookDoodle,
  LightBulbDoodle,
  StarSparkleDoodle,
} from './Doodles';
import { AzvasaLogo } from './AzvasaLogo';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onScrollToTop, onNavigate }: FooterProps) {
  return (
    <footer id="footer" className="bg-white border-t-2 border-[#072A52] text-[#072A52] relative overflow-hidden">
      {/* Inspirational Quote Hero Block */}
      <div className="py-16 sm:py-20 border-b-2 border-[#072A52]/10 relative bg-[#F0F5FD]">
        {/* Subtle decorative educational doodles positioned around the quote */}
        <div className="absolute top-8 left-6 sm:left-16 opacity-75 pointer-events-none animate-float">
          <PaperAirplaneDoodle size={36} />
        </div>
        <div className="absolute top-8 right-8 sm:right-20 opacity-75 pointer-events-none animate-float-reverse">
          <LightBulbDoodle size={34} />
        </div>
        <div className="absolute bottom-6 left-10 sm:left-24 opacity-60 pointer-events-none hidden sm:block">
          <PencilDoodle size={32} />
        </div>
        <div className="absolute bottom-6 right-10 sm:right-28 opacity-60 pointer-events-none hidden sm:block">
          <BookDoodle size={32} />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-1.5 mb-4">
            <StarSparkleDoodle size={20} color="#FFB703" />
            <StarSparkleDoodle size={26} color="#FF6B00" />
            <StarSparkleDoodle size={20} color="#0055FE" />
          </div>

          {/* Inspirational Quote: Elegant combination of navy blue and orange typography */}
          <blockquote className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
            <span className="text-[#072A52] block">“Great teachers change lives.</span>
            <span className="text-[#FF6B00] block mt-1">Let's celebrate them!”</span>
          </blockquote>

          <p className="mt-4 text-xs sm:text-sm font-black text-[#0055FE] uppercase tracking-widest">
            ★ AZVASA Enriching Education — Honoring Educators Shaping Tomorrow ★
          </p>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* AZVASA Brand Logo */}
          <div className="flex items-center gap-3">
            <AzvasaLogo height={42} className="h-10 w-auto" />
            <div className="pl-3 border-l-2 border-[#072A52]/20">
              <p className="font-black text-[#072A52] tracking-tight uppercase text-xs sm:text-sm">
                TEACHERS' DAY CONTEST 2026
              </p>
              <p className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider">
                Celebrating Our Education Heroes
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-[#072A52]/80">
            <button
              onClick={() => onNavigate('contests')}
              className="hover:text-[#0055FE] transition-colors cursor-pointer"
            >
              Categories
            </button>
            <button
              onClick={() => onNavigate('prizes')}
              className="hover:text-[#0055FE] transition-colors cursor-pointer"
            >
              Prizes
            </button>
            <button
              onClick={() => onNavigate('info')}
              className="hover:text-[#0055FE] transition-colors cursor-pointer"
            >
              Deadlines
            </button>
            <button
              onClick={() => onNavigate('submission')}
              className="hover:text-[#FF6B00] transition-colors cursor-pointer"
            >
              Google Form
            </button>
          </div>

          {/* Back to top button */}
          <button
            id="btn-scroll-top"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#072A52] shadow-navy-sm text-xs font-black uppercase text-[#072A52] hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-8 pt-8 border-t-2 border-[#072A52]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#072A52]/70 text-center sm:text-left">
          <p>© 2026 AZVASA • Enriching Education. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00]" />
            <span>for educators everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
