import React, { useState } from 'react';
import { MapPin, Droplets, Construction, Sprout, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { TranslationStrings } from '../data/campaignData';

interface VillageCommitmentsProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const VillageCommitments: React.FC<VillageCommitmentsProps> = ({ content, lang }) => {
  const [selectedVillageIndex, setSelectedVillageIndex] = useState(0);
  const activeVillage = content.villageTabs[selectedVillageIndex];

  return (
    <section id="commitments" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'te' ? 'గ్రామ వికాసం' : 'Village Development'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.commitmentsTitle}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-semibold">
            {content.commitmentsSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Village Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {content.villageTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVillageIndex(idx)}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
                selectedVillageIndex === idx
                  ? 'bg-blue-900 text-white shadow-md scale-102 ring-2 ring-blue-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <MapPin className={`w-4 h-4 ${selectedVillageIndex === idx ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Active Village Card */}
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/70 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-100">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">
                {lang === 'te' ? 'ప్రత్యేక ప్రాధాన్యతలు' : 'Village Priorities'}
              </span>
              <h3 className="text-2xl font-black text-blue-950 mt-0.5">
                {activeVillage.name}
              </h3>
            </div>
            <p className="text-sm text-slate-700 font-medium max-w-lg">
              {activeVillage.description}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeVillage.focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Universal Village Commitments Grid */}
        <div className="mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{content.universalCommitmentsTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.universalCommitments.map((comm, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-blue-900 flex items-center justify-center mb-3 shadow-xs border border-slate-200">
                  {idx === 0 && <Droplets className="w-5 h-5 text-blue-600" />}
                  {idx === 1 && <Construction className="w-5 h-5 text-amber-600" />}
                  {idx === 2 && <Sprout className="w-5 h-5 text-emerald-600" />}
                  {idx === 3 && <ShieldAlert className="w-5 h-5 text-red-600" />}
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1.5">
                  {comm.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {comm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clearly Marked Required Placeholder Box for Commitments */}
        <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-4 text-amber-950">
          <div className="flex items-start gap-2.5">
            <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                <span>{content.commitmentsPlaceholderTitle}</span>
                <span className="bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded text-[10px] font-extrabold">
                  PLACEHOLDER
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-amber-900 leading-relaxed bg-white/70 p-2.5 rounded border border-amber-200">
                {content.commitmentsPlaceholderContent}
              </p>
              <p className="text-[11px] text-amber-700 mt-1 italic">
                {lang === 'te'
                  ? '* ఎన్నికల ప్రవర్తనా నియమావళి ప్రకారం నిరాధారమైన వాగ్దానాలు చేయకుండా వాస్తవ అవసరాల మేరకే ప్రణాళిక రూపొందించబడుతుంది.'
                  : '* Adhering strictly to campaign integrity standards without exaggerated or unsubstantiated electoral claims.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
