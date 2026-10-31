import React from 'react';
import { Stethoscope, Award, Heart, FileText, CheckCircle2 } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';

interface AboutDrVeereshProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const AboutDrVeeresh: React.FC<AboutDrVeereshProps> = ({ content, lang }) => {
  return (
    <section id="about-veeresh" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
            <span>{content.drVeereshRoleBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.aboutDrVeereshTitle}
          </h2>
          <p className="mt-2 text-base text-blue-800 font-semibold">
            {content.aboutDrVeereshSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Service Points */}
          <div className="md:col-span-7 order-2 md:order-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {content.aboutDrVeereshIntro}
              </p>
            </div>

            {/* Service Focus Points */}
            <div className="space-y-3">
              {content.drVeereshPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {idx === 0 && <Heart className="w-5 h-5 text-blue-700" />}
                    {idx === 1 && <Stethoscope className="w-5 h-5 text-emerald-700" />}
                    {idx === 2 && <Award className="w-5 h-5 text-blue-700" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clearly Marked Required Placeholder Box for Dr. Veeresh */}
            <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-4 text-amber-950">
              <div className="flex items-start gap-2.5">
                <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                    <span>{content.drVeereshPlaceholderTitle}</span>
                    <span className="bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded text-[10px] font-extrabold">
                      PLACEHOLDER
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-amber-900 leading-relaxed bg-white/70 p-2.5 rounded border border-amber-200">
                    {content.drVeereshPlaceholderContent}
                  </p>
                  <p className="text-[11px] text-amber-700 mt-1 italic">
                    {lang === 'te'
                      ? '* నియమావళి ప్రకారం క్లినిక్ పేర్లు లేదా వాణిజ్య సమాచారం లేకుండా కేవలం ప్రజా సేవకుడిగా మాత్రమే ప్రచారం నడుపబడుతోంది.'
                      : '* As per campaign guidelines, purely presented in the capacity of a dedicated public servant without commercial references.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Photo Card */}
          <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white p-2">
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-slate-200">
                <img
                  src={CAMPAIGN_INFO.drVeereshPhoto}
                  alt={lang === 'te' ? 'డా. గొంగళి కురువ వీరేష్' : 'Dr. Gongali Kuruva Veeresh'}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center bg-slate-50 rounded-lg mt-2 border border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {lang === 'te' ? CAMPAIGN_INFO.drVeereshNameTe : CAMPAIGN_INFO.drVeereshNameEn}
                </h3>
                <p className="text-xs font-bold text-blue-700 mt-0.5">
                  {lang === 'te' ? 'వైద్యులు • ప్రచార సారథి' : 'Doctor • Campaign Leader'}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'te' ? 'నిస్వార్థ ప్రజా సేవ' : 'Dedicated Public Service'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
