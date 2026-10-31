import React from 'react';
import { ArrowUp, Phone, Mail, CheckCircle } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';
import { CeilingFanIcon } from './CeilingFanIcon';

interface FooterProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ content, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-24 sm:pb-12 border-t-4 border-emerald-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Candidate & Campaign Identity */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl border-2 border-emerald-500 overflow-hidden shrink-0 shadow-md bg-blue-900">
                <img
                  src={CAMPAIGN_INFO.candidatePhoto}
                  alt={lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  {content.candidateRole} • {lang === 'te' ? 'వైఎస్సార్సీపీ' : 'YSRCP'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-1">
              {lang === 'te'
                ? 'కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి గ్రామాల సమగ్ర అభివృద్ధి, శుద్ధ తాగునీరు, మహిళా సంక్షేమం మరియు గ్రామీణ వికాసం కోసం పనిచేసే ప్రజా అభ్యర్థి.'
                : 'Dedicated to village infrastructure, clean drinking water, rural women welfare, and responsive grassroots governance.'}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-900/60 border border-emerald-600 text-emerald-200 text-xs font-bold">
                <CeilingFanIcon size={18} className="text-emerald-300" showCircle={false} />
                <span>{lang === 'te' ? 'సంఖ్య 3 — ఫ్యాన్ గుర్తు' : 'Ballot No. 3 — Ceiling Fan'}</span>
              </span>
            </div>
          </div>

          {/* Quick Village & Section Links */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'te' ? 'ముఖ్య విభాగాలు' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#about-rajamma" className="hover:text-emerald-400 transition-colors">
                  • {content.navAboutRajamma}
                </a>
              </li>
              <li>
                <a href="#about-veeresh" className="hover:text-emerald-400 transition-colors">
                  • {content.navAboutDrVeeresh}
                </a>
              </li>
              <li>
                <a href="#commitments" className="hover:text-emerald-400 transition-colors">
                  • {content.navCommitments}
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-emerald-400 transition-colors">
                  • {content.navService}
                </a>
              </li>
              <li>
                <a href="#ballot" className="hover:text-emerald-400 transition-colors font-bold text-emerald-300">
                  • {content.navBallot} ({lang === 'te' ? 'సంఖ్య 3' : 'No. 3'})
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  • {content.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary & Scroll to Top */}
          <div className="md:col-span-3 flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {lang === 'te' ? 'సంప్రదింపుల వివరాలు' : 'Direct Contact'}
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={`tel:${CAMPAIGN_INFO.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{CAMPAIGN_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${CAMPAIGN_INFO.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{CAMPAIGN_INFO.email}</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition active:scale-95 cursor-pointer w-fit"
            >
              <ArrowUp className="w-4 h-4" />
              <span>{content.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Mandatory Legal & Publisher Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-400">
          <div className="space-y-1">
            {/* Required exact disclaimer */}
            <p className="font-semibold text-slate-300">
              {content.footerDisclaimer}
            </p>
            {/* Required exact publisher line */}
            <p className="text-slate-400 font-medium">
              {content.footerPublisher}
            </p>
          </div>

          <div className="text-[11px] text-slate-500">
            {lang === 'te'
              ? 'ప్రజాస్వామ్య ఎన్నికల ప్రచారం • ఓటు మీ హక్కు — సద్వినియోగం చేసుకోండి'
              : 'Democratic Campaign • Your Vote is Your Power'}
          </div>
        </div>
      </div>
    </footer>
  );
};
