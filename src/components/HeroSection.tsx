import React from 'react';
import { Sparkles, ArrowDown, Star } from 'lucide-react';
import {
  PaperAirplaneDoodle,
  LightBulbDoodle,
  BookDoodle,
  PencilDoodle,
  StarSparkleDoodle,
  GraduationCapDoodle,
} from './Doodles';

interface HeroSectionProps {
  onScrollToContests: () => void;
}

export function HeroSection({ onScrollToContests }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F0F5FD] to-white"
    >
      {/* Decorative Grid / Subtle Pattern in Royal Blue */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0055FE 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Floating Educational Doodles & Badges */}
      <div
        className="absolute top-12 left-4 sm:left-12 lg:left-24 animate-float pointer-events-none"
        aria-hidden="true"
      >
        <PaperAirplaneDoodle size={48} />
      </div>

      <div
        className="absolute top-16 right-6 sm:right-16 lg:right-28 animate-float-reverse pointer-events-none"
        aria-hidden="true"
      >
        <LightBulbDoodle size={44} />
      </div>

      <div
        className="absolute bottom-12 left-6 sm:left-20 lg:left-32 animate-float-reverse pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <BookDoodle size={40} />
      </div>

      <div
        className="absolute bottom-16 right-8 sm:right-24 lg:right-36 animate-float pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <PencilDoodle size={42} />
      </div>

      <div className="absolute top-1/3 left-2 sm:left-8 animate-pulse-subtle pointer-events-none opacity-90">
        <StarSparkleDoodle size={28} color="#FFB703" />
      </div>

      <div className="absolute top-1/4 right-3 sm:right-10 animate-pulse-subtle pointer-events-none opacity-90">
        <StarSparkleDoodle size={26} color="#FF6B00" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* AZVASA Campaign Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border-2 border-[#072A52] shadow-navy-sm text-xs md:text-sm font-black text-[#0055FE] mb-6">
          <GraduationCapDoodle size={20} />
          <span className="tracking-wider uppercase">AZVASA Enriching Education Presents</span>
          <StarSparkleDoodle size={14} color="#FFB703" />
        </div>

        {/* Motivational Subtext */}
        <p className="text-sm sm:text-base md:text-lg font-bold text-[#072A52]/80 max-w-2xl mx-auto mb-5 tracking-tight italic">
          “Behind every student is an extraordinary teacher.”
        </p>

        {/* Main Hero Title in Bold Typography */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] uppercase select-none">
            <span className="block text-[#072A52] drop-shadow-sm">
              TEACHERS' DAY
            </span>
            <span className="block text-[#FF6B00] mt-1 md:mt-2 drop-shadow-sm">
              CONTEST 2026
            </span>
          </h1>
        </div>

        {/* Bordered Badge: ★ CELEBRATING OUR EDUCATION HEROES ★ */}
        <div className="flex justify-center mb-8">
          <div
            id="hero-celebrating-badge"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-white border-2 border-[#072A52] shadow-navy"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB703] fill-[#FFB703]" />
            <span className="text-xs sm:text-sm md:text-base font-black tracking-wider text-[#072A52] uppercase">
              CELEBRATING OUR EDUCATION HEROES
            </span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB703] fill-[#FFB703]" />
          </div>
        </div>

        {/* Description Overview */}
        <p className="max-w-xl mx-auto text-base sm:text-lg font-semibold text-[#072A52]/85 mb-10 leading-relaxed">
          Honoring the passion, creativity, and tireless dedication of teachers everywhere.
          Share your innovative teaching practices and get celebrated nationally!
        </p>

        {/* Prominent Orange CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-choose-contest-cta"
            onClick={onScrollToContests}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-lg bg-[#FF6B00] text-white font-black text-base sm:text-lg tracking-wider uppercase border-2 sm:border-[2.5px] border-[#072A52] shadow-navy-lg hover:shadow-navy hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-150 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#FFB703] group-hover:rotate-12 transition-transform" />
            <span>CHOOSE YOUR CONTEST</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Highlight Stats / Quick Tags */}
        <div className="mt-14 pt-8 border-t-2 border-dashed border-[#072A52]/20 grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-black text-[#072A52]">3</span>
            <span className="text-xs sm:text-sm font-black text-[#072A52]/80 uppercase tracking-wide">
              Exciting Categories
            </span>
          </div>
          <div className="flex flex-col items-center border-x-2 border-[#072A52]/20 px-2 sm:px-4">
            <span className="text-2xl sm:text-4xl font-black text-[#FF6B00]">100%</span>
            <span className="text-xs sm:text-sm font-black text-[#072A52] uppercase tracking-wide">
              Free to Enter
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-black text-[#0055FE]">15 SEP</span>
            <span className="text-xs sm:text-sm font-black text-[#FF6B00] uppercase tracking-wide">
              Submission Deadline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
