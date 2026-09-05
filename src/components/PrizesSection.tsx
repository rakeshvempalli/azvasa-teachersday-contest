import React from 'react';
import { Award, Sparkles, Star, Trophy, Medal } from 'lucide-react';
import { TrophyIllustration, StarSparkleDoodle } from './Doodles';

export function PrizesSection() {
  const prizeHighlights = [
    {
      title: 'Grand Winner Trophies',
      description: 'Exclusive commemorative Teachers’ Day 2026 trophies for top category innovators.',
      icon: Trophy,
      badge: 'TOP HONORS',
    },
    {
      title: 'National Recognition Certificates',
      description: 'Official digital and printed Certificates of Excellence awarded to top finalists.',
      icon: Medal,
      badge: 'PRESTIGE',
    },
    {
      title: 'Educator Spotlight Showcase',
      description: 'Winning entries showcased across national educational publications and social media.',
      icon: Sparkles,
      badge: 'NATIONAL REACH',
    },
    {
      title: 'School Memento & Honor',
      description: 'Institutional citations celebrating your school and leadership in education.',
      icon: Award,
      badge: 'CAMPUS PRIDE',
    },
  ];

  return (
    <section
      id="prizes"
      className="py-16 md:py-24 bg-gradient-to-r from-white via-[#F0F5FD] to-white border-y-2 border-[#072A52] relative overflow-hidden"
    >
      {/* Background celebratory star elements in logo colors */}
      <div className="absolute top-6 left-10 opacity-75 animate-float pointer-events-none">
        <StarSparkleDoodle size={32} color="#FF6B00" />
      </div>
      <div className="absolute top-12 right-12 opacity-80 animate-float-reverse pointer-events-none">
        <StarSparkleDoodle size={36} color="#FFB703" />
      </div>
      <div className="absolute bottom-6 left-1/4 opacity-60 pointer-events-none">
        <StarSparkleDoodle size={24} color="#0055FE" />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-70 pointer-events-none">
        <StarSparkleDoodle size={28} color="#FF6B00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Trophy Illustration & Celebratory Badge */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left flex-shrink-0">
            <div className="relative mb-6">
              {/* Glow aura */}
              <div className="absolute inset-0 bg-[#FFB703]/25 rounded-full blur-2xl -z-10 transform scale-125" />
              <TrophyIllustration size={130} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border-2 border-[#072A52] shadow-navy-sm mb-4">
              <Star className="w-4 h-4 text-[#FFB703] fill-[#FFB703]" />
              <span className="text-xs sm:text-sm font-black text-[#072A52] uppercase tracking-wider">
                REWARDING EXCELLENCE
              </span>
              <Star className="w-4 h-4 text-[#FFB703] fill-[#FFB703]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#072A52] uppercase leading-tight tracking-tight max-w-md">
              EXCITING PRIZES
              <span className="block text-[#FF6B00] mt-1">TO BE WON!</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base font-semibold text-[#072A52]/80 max-w-md leading-relaxed">
              Every outstanding teacher deserves the spotlight. Stand a chance to earn prestigious awards, mementos, and widespread recognition for your school.
            </p>
          </div>

          {/* Right Column: Celebratory Recognition Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {prizeHighlights.map((prize, index) => {
              const IconComp = prize.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-[#072A52] p-5 sm:p-6 shadow-navy card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F0F5FD] border-2 border-[#072A52] flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-[#FF6B00]" />
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded bg-[#072A52] text-[#FFB703] uppercase tracking-wider">
                        {prize.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#072A52] uppercase tracking-tight mb-2">
                      {prize.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#072A52]/75 leading-relaxed">
                      {prize.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t-2 border-dashed border-[#072A52]/20 flex items-center gap-1.5 text-xs font-black text-[#072A52]">
                    <Sparkles className="w-3.5 h-3.5 text-[#0055FE]" />
                    <span>Awarded to Top Nominees</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
