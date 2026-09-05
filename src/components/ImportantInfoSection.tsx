import React, { useState, useEffect } from 'react';
import { Calendar, Users, ClipboardCheck, Clock } from 'lucide-react';

export function ImportantInfoSection() {
  // Countdown to September 15, 2026 23:59:59
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-15T23:59:59');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="info" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border-2 border-[#072A52] shadow-navy-sm text-xs font-black text-[#0055FE] uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Essential Contest Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#072A52] uppercase tracking-tight">
            IMPORTANT INFORMATION
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold text-[#072A52]/70">
            Everything you need to know before submitting your entry
          </p>
        </div>

        {/* Three-Column Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* COLUMN 1: Last Date to Submit */}
          <div
            id="info-column-1"
            className="card-hover rounded-2xl bg-[#F8FAFC] border-2 sm:border-[2.5px] border-[#072A52] p-8 text-center flex flex-col justify-between shadow-navy"
          >
            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-orange-50 border-2 border-[#072A52] shadow-navy-sm flex items-center justify-center mx-auto mb-5">
                <Calendar className="w-8 h-8 text-[#FF6B00]" />
              </div>

              {/* Heading */}
              <h3 className="text-sm font-black text-[#072A52] tracking-widest uppercase mb-2">
                LAST DATE TO SUBMIT
              </h3>

              {/* Large highlighted text in bright orange */}
              <div className="py-3 px-4 bg-white rounded-xl border-2 border-[#072A52] my-4 shadow-navy-sm">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6B00] tracking-tight block">
                  15TH SEP 2026
                </span>
                <span className="text-[11px] font-black text-[#072A52]/70 uppercase tracking-wider">
                  Until 11:59 PM Local Time
                </span>
              </div>
            </div>

            {/* Live Countdown Pills */}
            <div className="pt-4 border-t-2 border-dashed border-[#072A52]/20">
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div className="bg-[#072A52] text-white p-2 rounded-lg border-2 border-[#072A52] shadow-navy-sm">
                  <span className="text-base sm:text-lg font-black block leading-none text-[#FFB703]">
                    {timeLeft.days}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-300">Days</span>
                </div>
                <div className="bg-[#072A52] text-white p-2 rounded-lg border-2 border-[#072A52] shadow-navy-sm">
                  <span className="text-base sm:text-lg font-black block leading-none text-white">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-300">Hours</span>
                </div>
                <div className="bg-[#072A52] text-white p-2 rounded-lg border-2 border-[#072A52] shadow-navy-sm">
                  <span className="text-base sm:text-lg font-black block leading-none text-white">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-300">Mins</span>
                </div>
                <div className="bg-[#072A52] text-white p-2 rounded-lg border-2 border-[#072A52] shadow-navy-sm">
                  <span className="text-base sm:text-lg font-black block leading-none text-[#FF6B00]">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-300">Secs</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Who Can Participate */}
          <div
            id="info-column-2"
            className="card-hover rounded-2xl bg-[#F8FAFC] border-2 sm:border-[2.5px] border-[#072A52] p-8 text-center flex flex-col justify-between shadow-navy"
          >
            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-blue-50 border-2 border-[#072A52] shadow-navy-sm flex items-center justify-center mx-auto mb-5">
                <Users className="w-8 h-8 text-[#0055FE]" />
              </div>

              {/* Heading */}
              <h3 className="text-sm font-black text-[#072A52] tracking-widest uppercase mb-2">
                WHO CAN PARTICIPATE?
              </h3>

              {/* Text */}
              <div className="py-4 px-4 bg-white rounded-xl border-2 border-[#072A52] my-4 shadow-navy-sm">
                <span className="text-2xl sm:text-3xl font-black text-[#072A52] tracking-tight block">
                  Open to all Teachers
                </span>
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block mt-1">
                  Across All Subjects & Grades
                </span>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-[#072A52]/20 text-left text-xs font-semibold text-[#072A52]/85 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
                <span>Primary & Secondary School Educators</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0055FE]" />
                <span>High School & College Professors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB703] border border-[#072A52]" />
                <span>Special Education & Vocational Trainers</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: How to Participate */}
          <div
            id="info-column-3"
            className="card-hover rounded-2xl bg-[#F8FAFC] border-2 sm:border-[2.5px] border-[#072A52] p-8 text-center flex flex-col justify-between shadow-navy"
          >
            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-amber-50 border-2 border-[#072A52] shadow-navy-sm flex items-center justify-center mx-auto mb-5">
                <ClipboardCheck className="w-8 h-8 text-[#072A52]" />
              </div>

              {/* Heading */}
              <h3 className="text-sm font-black text-[#072A52] tracking-widest uppercase mb-2">
                HOW TO PARTICIPATE?
              </h3>

              {/* Text */}
              <div className="py-4 px-4 bg-white rounded-xl border-2 border-[#072A52] my-4 shadow-navy-sm">
                <span className="text-xl sm:text-2xl font-black text-[#072A52] tracking-tight block">
                  Submit your entry through the online Google Form.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-[#072A52]/20 text-left text-xs font-semibold text-[#072A52]/85 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-black text-[#FF6B00] text-sm">1.</span>
                <span>Select your contest category</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-black text-[#FF6B00] text-sm">2.</span>
                <span>Prepare your write-up, poster, or video</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-black text-[#FF6B00] text-sm">3.</span>
                <span>Click submit to open official Google Form</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
