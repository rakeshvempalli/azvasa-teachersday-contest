import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ContestSection } from './components/ContestSection';
import { PrizesSection } from './components/PrizesSection';
import { ImportantInfoSection } from './components/ImportantInfoSection';
import { SubmissionSection } from './components/SubmissionSection';
import { Footer } from './components/Footer';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export default function App() {
  const [selectedContestId, setSelectedContestId] = useState<string>('contest-01');
  const [showFaq, setShowFaq] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContests = () => {
    handleNavigate('contests');
  };

  const handleSelectContest = (contestId: string) => {
    setSelectedContestId(contestId);
    // Smooth scroll to submission section so teacher can proceed immediately
    handleNavigate('submission');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'Can I submit entries in more than one category?',
      a: 'We encourage each teacher to choose their single strongest category (Contest 01, 02, or 03) so our national panel can thoroughly evaluate every submission.',
    },
    {
      q: 'What language can I submit my write-up or video in?',
      a: 'Submissions are accepted in English, Hindi, and regional languages. If submitting in a regional language, a brief English summary or subtitles are welcomed.',
    },
    {
      q: 'What are the file size and format limits in the Google Form?',
      a: 'The Google Form allows direct file upload (up to 100MB) or submission of a cloud link (Google Drive, OneDrive, YouTube unlisted link, or Canva view link).',
    },
    {
      q: 'When will the winners be announced?',
      a: 'Finalists will be notified via email by September 25, 2026, with the Grand National Teachers Showcase broadcast in early October 2026.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#072A52]">
      {/* Top Header Navigation */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section 1 – Hero Section */}
        <HeroSection onScrollToContests={handleScrollToContests} />

        {/* Section 2 – Contest Introduction */}
        <ContestSection
          onSelectContest={handleSelectContest}
          selectedContestId={selectedContestId}
        />

        {/* Section 3 – Why Participate / Prizes */}
        <PrizesSection />

        {/* Section 4 – Important Information */}
        <ImportantInfoSection />

        {/* Section 5 – Submission CTA */}
        <SubmissionSection
          selectedContestId={selectedContestId}
          onSelectContest={setSelectedContestId}
        />

        {/* Optional Interactive FAQ & Guidelines Accordion */}
        <section className="py-12 bg-[#F0F5FD] border-t-2 border-[#072A52]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <button
                onClick={() => setShowFaq(!showFaq)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-[#072A52] text-xs sm:text-sm font-black text-[#072A52] hover:bg-[#FF6B00] hover:text-white transition-all shadow-navy cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#FF6B00] group-hover:text-white" />
                <span>{showFaq ? 'HIDE CONTEST FAQ & GUIDELINES' : 'VIEW CONTEST FAQ & GUIDELINES'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showFaq ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {showFaq && (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-white border-2 border-[#072A52] shadow-navy"
                  >
                    <h4 className="text-base font-black text-[#072A52] mb-1.5 flex items-start gap-2">
                      <span className="text-[#FF6B00] font-black">Q.</span>
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#072A52]/80 font-medium pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}

                <div className="p-4 rounded-xl bg-white border-2 border-[#072A52] shadow-navy text-xs text-[#072A52]/90 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#0055FE] flex-shrink-0" />
                  <span>
                    Need help or have queries? Contact the AZVASA Contest Coordination Committee at{' '}
                    <strong className="text-[#072A52] font-bold">support@azvasa.com</strong>
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Section 6 – Inspirational Footer */}
      <Footer onScrollToTop={handleScrollToTop} onNavigate={handleNavigate} />
    </div>
  );
}
