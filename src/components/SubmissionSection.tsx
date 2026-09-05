import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTESTS } from './ContestSection';

// OFFICIAL GOOGLE FORM URL FOR TEACHERS' DAY CONTEST 2026
export const OFFICIAL_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScHCUEEXSjT2r_ETXKOjEsKTYFgnA8JH9vJgcgInIf7ifyr9w/viewform?usp=sharing&ouid=106989837725686006412';

interface SubmissionSectionProps {
  selectedContestId: string;
  onSelectContest: (contestId: string) => void;
}

export function SubmissionSection({ selectedContestId, onSelectContest }: SubmissionSectionProps) {
  const activeContest = CONTESTS.find((c) => c.id === selectedContestId) || CONTESTS[0];

  const handleSubmitClick = () => {
    // Trigger celebratory confetti in logo colors
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.7 },
        colors: ['#0055FE', '#FF6B00', '#FFB703', '#00A8FF', '#FFFFFF'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="submission"
      className="py-20 md:py-28 bg-[#072A52] text-white relative overflow-hidden"
    >
      {/* Subtle Geometric Graphic Accents in Orange & Royal Blue */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00A8FF 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Orange and Royal Blue Halos matching logo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF6B00]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#0055FE]/35 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#001D3D] border-2 border-white/20 text-xs sm:text-sm font-black text-[#FFB703] uppercase tracking-wider mb-6 shadow-[2px_2px_0px_#00A8FF]">
          <Sparkles className="w-4 h-4 text-[#FF6B00]" />
          <span>Official AZVASA Submission Portal</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
          READY TO SHOWCASE
          <span className="block text-[#FF6B00] mt-2">YOUR TALENT?</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl font-medium text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Choose your contest category and submit your entry via the official Google Form.
        </p>

        {/* Category Selector Tabs */}
        <div className="mt-10 mb-8 max-w-3xl mx-auto">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-3">
            Confirm Your Selected Contest Category:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CONTESTS.map((contest) => {
              const isSelected = activeContest.id === contest.id;
              return (
                <button
                  key={contest.id}
                  id={`submit-category-select-${contest.number}`}
                  onClick={() => onSelectContest(contest.id)}
                  className={`py-3 px-4 rounded-lg border-2 transition-all text-left flex items-center gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF6B00] text-white border-white shadow-[3px_3px_0px_#FFFFFF]'
                      : 'bg-[#001D3D] text-slate-300 border-white/20 hover:border-white/50'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-md flex items-center justify-center font-black text-xs ${
                      isSelected ? 'bg-white text-[#072A52]' : 'bg-[#FFB703] text-[#072A52]'
                    }`}
                  >
                    {contest.number}
                  </span>
                  <div className="overflow-hidden">
                    <span className="block font-black text-xs sm:text-sm truncate">
                      {contest.title.replace('\n', ' ')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlight of Selected Category */}
        <div className="max-w-2xl mx-auto mb-10 p-5 rounded-xl bg-[#001D3D] border-2 border-white/20 text-left shadow-[4px_4px_0px_0px_#0055FE]">
          <div className="flex items-center gap-2 text-xs font-black text-[#FFB703] uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
            <span>Category {activeContest.number} Selected: {activeContest.title.replace('\n', ' ')}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
            {activeContest.description}
          </p>
        </div>

        {/* Main Orange CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <a
            id="btn-submit-entry"
            href={OFFICIAL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSubmitClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-5 sm:py-6 rounded-lg bg-[#FF6B00] text-white font-black text-lg sm:text-2xl tracking-wider uppercase border-2 sm:border-[2.5px] border-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_0px_#FFFFFF] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-150 group cursor-pointer"
          >
            <Sparkles className="w-6 h-6 text-[#FFB703] group-hover:rotate-12 transition-transform" />
            <span>SUBMIT YOUR ENTRY</span>
            <ExternalLink className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Submission Checklist */}
        <div className="mt-14 pt-8 border-t-2 border-white/15 max-w-3xl mx-auto">
          <p className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
            Quick Checklist Before Submitting:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-200">
            <div className="flex items-center gap-2 justify-center sm:justify-start bg-[#001D3D] p-3 rounded-lg border-2 border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
              <span>Full Name & School Info</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start bg-[#001D3D] p-3 rounded-lg border-2 border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
              <span>Prepared Entry File / URL</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start bg-[#001D3D] p-3 rounded-lg border-2 border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#FFB703] flex-shrink-0" />
              <span>Submit Before 15th Sep 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
