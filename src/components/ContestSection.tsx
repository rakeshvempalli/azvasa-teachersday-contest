import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, FileText, Video, Mic } from 'lucide-react';
import { ContestCategory } from '../types';

interface ContestSectionProps {
  onSelectContest: (contestId: string) => void;
  selectedContestId: string;
}

export const CONTESTS: ContestCategory[] = [
  {
    id: 'contest-01',
    number: '01',
    title: 'INNOVATIVE\nTEACHING IDEA',
    iconName: 'notebook',
    description:
      'Share a short write-up (max 250 words) OR a 1-minute video on your most innovative teaching idea.',
    highlightTagline: 'SMALL IDEA.\nBIGGER IMPACT.',
    formatGuide: 'Accepts: 250-word text summary (PDF/DOC) or 1-minute MP4 video',
    evaluationCriteria: ['Originality of pedagogical idea', 'Student engagement impact', 'Feasibility in diverse classrooms'],
  },
  {
    id: 'contest-02',
    number: '02',
    title: 'DIGITAL\nCREATIVITY',
    iconName: 'camera',
    description:
      'Create a poster, presentation, reel, or creative digital content based on: "THE FUTURE OF EDUCATION"',
    highlightTagline: 'VISUALIZE A BETTER\nTOMORROW.',
    formatGuide: 'Accepts: Digital poster (PNG/JPG), Slide deck (PDF/PPT), or Short Video/Reel',
    evaluationCriteria: ['Visual storytelling & creativity', 'Vision for the future of schooling', 'Clarity & modern design'],
  },
  {
    id: 'contest-03',
    number: '03',
    title: '30-SECOND\nTEACHER MANTRA',
    iconName: 'mic',
    description:
      'Record a short reel sharing your teaching mantra or a message that inspires your students.',
    highlightTagline: 'SAY IT. INSPIRE IT.',
    formatGuide: 'Accepts: 30-second vertical or horizontal video (MP4/MOV) or audio reel',
    evaluationCriteria: ['Inspirational value', 'Authenticity & teacher voice', 'Emotional resonance & delivery'],
  },
];

export function ContestSection({ onSelectContest, selectedContestId }: ContestSectionProps) {
  return (
    <section id="contests" className="py-16 md:py-24 bg-white relative border-t-2 border-b-2 border-[#072A52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold Orange Heading Banner */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div
            id="contest-banner"
            className="w-full sm:w-auto text-center px-6 sm:px-14 py-4 sm:py-5 bg-[#FF6B00] rounded-xl sm:rounded-2xl border-2 sm:border-[2.5px] border-[#072A52] shadow-navy-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
              CHOOSE ANY ONE CONTEST
            </h2>
          </div>
        </div>

        {/* Contest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {CONTESTS.map((contest) => {
            const isSelected = selectedContestId === contest.id;

            return (
              <div
                key={contest.id}
                id={`contest-card-${contest.number}`}
                className={`card-hover relative flex flex-col justify-between rounded-2xl bg-white border-2 sm:border-[2.5px] border-[#072A52] p-6 sm:p-8 transition-all duration-200 shadow-navy ${
                  isSelected ? 'ring-4 ring-[#FF6B00] ring-offset-2' : ''
                }`}
              >
                {/* Yellow Numbered Circle at top right */}
                <div className="flex items-start justify-between mb-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F0F5FD] border-2 border-[#072A52] text-xs font-black text-[#0055FE]">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Category {contest.number}</span>
                  </div>

                  {/* Number Badge in Logo Sun Gold */}
                  <div
                    id={`contest-number-${contest.number}`}
                    className="w-14 h-14 rounded-full bg-[#FFB703] border-2 border-[#072A52] flex items-center justify-center font-black text-xl text-[#072A52] shadow-navy-sm"
                  >
                    {contest.number}
                  </div>
                </div>

                {/* Card Icon Illustration */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-[#F0F5FD] border-2 border-[#072A52] flex items-center justify-center shadow-navy-sm transition-transform">
                    {contest.iconName === 'notebook' && (
                      <div className="relative">
                        <FileText className="w-10 h-10 text-[#0055FE]" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF6B00] border border-[#072A52] flex items-center justify-center text-[9px] text-white font-bold">
                          ★
                        </span>
                      </div>
                    )}
                    {contest.iconName === 'camera' && (
                      <div className="relative">
                        <Video className="w-10 h-10 text-[#072A52]" />
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#FFB703] border border-[#072A52] flex items-center justify-center text-[9px] text-[#072A52] font-bold">
                          ▶
                        </span>
                      </div>
                    )}
                    {contest.iconName === 'mic' && (
                      <div className="relative">
                        <Mic className="w-10 h-10 text-[#FF6B00]" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFB703] border border-[#072A52] flex items-center justify-center text-[9px] text-[#072A52] font-bold">
                          30s
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Title */}
                <div className="mb-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#072A52] leading-tight uppercase whitespace-pre-line tracking-tight">
                    {contest.title}
                  </h3>
                </div>

                {/* Card Description */}
                <div className="mb-6 text-center">
                  <p className="text-sm sm:text-base font-semibold text-[#072A52]/80 leading-relaxed min-h-[72px]">
                    {contest.description}
                  </p>
                </div>

                {/* Orange Highlight Tagline */}
                <div className="mb-6 text-center bg-orange-50/70 border-2 border-[#072A52] shadow-navy-sm rounded-lg py-3 px-4">
                  <p className="text-sm sm:text-base font-black text-[#FF6B00] uppercase tracking-wider whitespace-pre-line">
                    {contest.highlightTagline}
                  </p>
                </div>

                {/* Format Guidance Hint */}
                <div className="mb-6 text-xs text-[#072A52]/80 bg-[#F0F5FD] rounded-lg p-2.5 border border-[#072A52]/20">
                  <p className="font-bold">{contest.formatGuide}</p>
                </div>

                {/* Action Button: PARTICIPATE NOW */}
                <div className="mt-auto">
                  <button
                    id={`btn-participate-${contest.number}`}
                    onClick={() => onSelectContest(contest.id)}
                    className={`w-full py-3.5 px-6 rounded-lg font-black text-sm tracking-wider uppercase border-2 border-[#072A52] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#072A52] text-white shadow-none'
                        : 'bg-[#FF6B00] text-white shadow-navy hover:bg-[#e05e00] active:translate-x-0.5 active:translate-y-0.5'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#FFB703]" />
                        <span>SELECTED • PROCEED TO SUBMIT</span>
                      </>
                    ) : (
                      <>
                        <span>PARTICIPATE NOW</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Below Cards */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-black text-[#072A52]/70">
            * You can choose any one of the three contest categories. Individual submissions only.
          </p>
        </div>
      </div>
    </section>
  );
}
