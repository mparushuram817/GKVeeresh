import React from 'react';
import { Phone, MessageCircle, CheckSquare, Globe } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';
import { CeilingFanIcon } from './CeilingFanIcon';

interface MobileBottomBarProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
  setLang: (lang: 'te' | 'en') => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ content, lang, setLang }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-300 shadow-2xl sm:hidden no-print">
      <div className="grid grid-cols-4 h-15">
        {/* Call Button */}
        <a
          href={`tel:${CAMPAIGN_INFO.phone}`}
          className="flex flex-col items-center justify-center text-slate-700 active:bg-slate-100 border-r border-slate-200"
        >
          <Phone className="w-5 h-5 text-emerald-700" />
          <span className="text-[10px] font-bold mt-0.5 text-slate-800">
            {content.callNow}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`${CAMPAIGN_INFO.whatsappUrl}?text=${encodeURIComponent(
            lang === 'te'
              ? 'నమస్కారం, కైరుప్పల ఎంపీటీసీ ఎన్నికల సంబంధించి సందేశం.'
              : 'Namaskaram, message regarding Kairuppala MPTC election.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-slate-700 active:bg-slate-100 border-r border-slate-200"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          <span className="text-[10px] font-bold mt-0.5 text-slate-800">
            WhatsApp
          </span>
        </a>

        {/* Sample Ballot Jump */}
        <a
          href="#ballot"
          className="flex flex-col items-center justify-center bg-emerald-50 text-emerald-950 active:bg-emerald-100 border-r border-slate-200"
        >
          <div className="flex items-center gap-0.5">
            <span className="font-black text-xs text-blue-900">#3</span>
            <CeilingFanIcon size={16} className="text-slate-900" showCircle={false} />
          </div>
          <span className="text-[10px] font-extrabold mt-0.5 text-emerald-900">
            {lang === 'te' ? 'బ్యాలెట్' : 'Ballot'}
          </span>
        </a>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'te' ? 'en' : 'te')}
          type="button"
          className="flex flex-col items-center justify-center text-slate-700 active:bg-slate-100"
        >
          <Globe className="w-5 h-5 text-blue-700" />
          <span className="text-[10px] font-bold mt-0.5 text-blue-900">
            {lang === 'te' ? 'English' : 'తెలుగు'}
          </span>
        </button>
      </div>
    </div>
  );
};
