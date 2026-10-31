import React from 'react';
import { Calendar, Heart, Shield, Activity, FileText } from 'lucide-react';
import { TranslationStrings } from '../data/campaignData';

interface ServiceWorkProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const ServiceWork: React.FC<ServiceWorkProps> = ({ content, lang }) => {
  return (
    <section id="service" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-blue-700" />
            <span>{lang === 'te' ? 'సేవా ప్రస్థానం' : 'Service Journey'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.serviceTitle}
          </h2>
          <p className="mt-2 text-base text-blue-800 font-semibold">
            {content.serviceSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {content.serviceTimeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    {idx === 0 && <Activity className="w-4 h-4 text-emerald-700" />}
                    {idx === 1 && <Heart className="w-4 h-4 text-emerald-700" />}
                    {idx === 2 && <Shield className="w-4 h-4 text-emerald-700" />}
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>{lang === 'te' ? 'ప్రజాహితం కోసం నిరంతర శ్రమ' : 'Continuous community dedication'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clearly Marked Required Placeholder Box for Service Activities */}
        <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-4 text-amber-950">
          <div className="flex items-start gap-2.5">
            <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                <span>{content.servicePlaceholderTitle}</span>
                <span className="bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded text-[10px] font-extrabold">
                  PLACEHOLDER
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-amber-900 leading-relaxed bg-white/70 p-2.5 rounded border border-amber-200">
                {content.servicePlaceholderContent}
              </p>
              <p className="text-[11px] text-amber-700 mt-1 italic">
                {lang === 'te'
                  ? '* గ్రామాలలో నిర్దిష్టమైన సేవా కార్యక్రమాల ఫోటోలు, నివేదికలు మరియు తేదీలతో కూడిన సమగ్ర నివేదికను క్రోడీకరించి ఈ విభాగంలో చేర్చవచ్చు.'
                  : '* Exact photographic documentation, dates, and village event records can be uploaded into this placeholder.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
