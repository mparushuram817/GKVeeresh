import React from 'react';
import { HeartHandshake, Users, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';

interface AboutRajammaProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const AboutRajamma: React.FC<AboutRajammaProps> = ({ content, lang }) => {
  return (
    <section id="about-rajamma" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>{lang === 'te' ? 'అభ్యర్థి ప్రొఫైల్' : 'Candidate Profile'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.aboutRajammaTitle}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-semibold">
            {content.aboutRajammaSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo Card */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-50 p-2">
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-slate-200">
                <img
                  src={CAMPAIGN_INFO.candidatePhoto}
                  alt={lang === 'te' ? 'బురునదొడ్డి రాజమ్మ గారు' : 'Burunadoddi Rajamma'}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center bg-white rounded-lg mt-2 border border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
                </h3>
                <p className="text-xs font-bold text-emerald-700 mt-0.5">
                  {content.candidateRole} • {lang === 'te' ? 'సంఖ్య 3' : 'Serial No. 3'}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{lang === 'te' ? 'స్థానిక సేవకురాలు' : 'Local Public Representative'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Information */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Overview Box */}
            <div className="bg-gradient-to-br from-blue-50/60 to-emerald-50/60 rounded-2xl p-5 sm:p-6 border border-blue-100/80 shadow-xs">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {content.aboutRajammaIntro}
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {content.aboutRajammaPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-2.5">
                    {idx === 0 && <Users className="w-4 h-4" />}
                    {idx === 1 && <HeartHandshake className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Clearly Marked Required Placeholder Box */}
            <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-4 text-amber-950">
              <div className="flex items-start gap-2.5">
                <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                    <span>{content.rajammaPlaceholderTitle}</span>
                    <span className="bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded text-[10px] font-extrabold">
                      PLACEHOLDER
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-amber-900 leading-relaxed bg-white/70 p-2.5 rounded border border-amber-200">
                    {content.rajammaPlaceholderContent}
                  </p>
                  <p className="text-[11px] text-amber-700 mt-1 italic">
                    {lang === 'te'
                      ? '* ఎన్నికల నిబంధనల ప్రకారం అభ్యర్థి యొక్క వాస్తవ వివరాలు మాత్రమే నమోదు చేయబడతాయి; కల్పిత వివరాలు ఉండవు.'
                      : '* As per election rules, only verified facts are documented; no unverified claims.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
