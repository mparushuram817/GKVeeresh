import React, { useState } from 'react';
import { Phone, Globe, Menu, X, CheckSquare } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';
import { CeilingFanIcon } from './CeilingFanIcon';

interface HeaderProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
  setLang: (lang: 'te' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({ content, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'te' ? 'en' : 'te');
  };

  const navLinks = [
    { href: '#home', label: content.navHome },
    { href: '#about-rajamma', label: content.navAboutRajamma },
    { href: '#about-veeresh', label: content.navAboutDrVeeresh },
    { href: '#commitments', label: content.navCommitments },
    { href: '#service', label: content.navService },
    { href: '#ballot', label: content.navBallot, highlight: true },
    { href: '#contact', label: content.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-emerald-600 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-700 text-white text-xs font-medium py-1 px-3 text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-white/20 font-bold tracking-wide">
          YSRCP
        </span>
        <span className="truncate">
          {lang === 'te'
            ? 'కైరుప్పల • పుప్పాల దొడ్డి • చెన్నంపల్లి ఎంపీటీసీ ఎన్నికలు'
            : 'Kairuppala • Puppala Doddi • Chennampalli MPTC Elections'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Candidate ID */}
          <a
            href="#home"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-emerald-600 overflow-hidden shrink-0 shadow-sm bg-blue-50">
              <img
                src={CAMPAIGN_INFO.candidatePhoto}
                alt={lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                {lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
                {content.candidateRole}
                <span className="font-bold text-blue-800 ml-1">
                  (సంఖ్య 3)
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                  link.highlight
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1.5'
                    : 'text-slate-700 hover:text-blue-800 hover:bg-blue-50'
                }`}
              >
                {link.highlight && <CheckSquare className="w-3.5 h-3.5 text-emerald-700" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang toggle & Call Button */}
          <div className="flex items-center gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-300 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition shadow-xs focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle language"
              title={lang === 'te' ? 'Switch to English' : 'తెలుగులోకి మార్చండి'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>{lang === 'te' ? 'English' : 'తెలుగు'}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${CAMPAIGN_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-sm transition"
              aria-label={`Call ${CAMPAIGN_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span className="hidden xs:inline">{content.callNow}</span>
              <span className="xs:hidden">Call</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="py-2 mb-2 flex items-center justify-between border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {lang === 'te' ? 'మెనూ ఎంపికలు' : 'Navigation'}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600">భాష / Lang:</span>
              <button
                onClick={toggleLanguage}
                className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-900 border border-blue-200"
              >
                {lang === 'te' ? 'English కి మార్చండి' : 'Switch to తెలుగు'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-between ${
                  link.highlight
                    ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200'
                    : 'text-slate-800 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">
                    <CeilingFanIcon size={16} className="text-white" showCircle={false} />
                    సం. 3
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CAMPAIGN_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-700 text-white rounded-lg font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              {content.callNow}: {CAMPAIGN_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
