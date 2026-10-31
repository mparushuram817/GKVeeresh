import React from 'react';
import { Phone, MessageCircle, Share2, CheckCircle2, ChevronDown } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';
import { CeilingFanIcon } from './CeilingFanIcon';

interface HeroProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const whatsappShareText = encodeURIComponent(
    lang === 'te'
      ? `కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి గ్రామాల ఎంపీటీసీ అభ్యర్థి బురునదొడ్డి రాజమ్మ గారికి మీ అమూల్యమైన ఓటు వేసి గెలిపించండి. \n\nక్రమ సంఖ్య: 3\nఎన్నికల గుర్తు: సీలింగ్ ఫ్యాన్\nసంప్రదించండి: ${CAMPAIGN_INFO.phone}\nమరిన్ని వివరాలు:`
      : `Vote for Burunadoddi Rajamma - YSRCP MPTC Candidate for Kairuppala, Puppala Doddi, and Chennampalli.\n\nBallot No: 3\nSymbol: Ceiling Fan\nContact: ${CAMPAIGN_INFO.phone}\nCampaign Website:`
  );

  const handleShare = () => {
    const url = window.location.href;
    const shareUrl = `https://api.whatsapp.com/send?text=${whatsappShareText}%20${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-emerald-900 text-white pt-6 pb-14 sm:pb-20">
      {/* Background graphic elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold bg-white text-blue-900 shadow-md border-2 border-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
            {content.partyName}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-800/80 text-emerald-100 border border-emerald-400/50">
            {lang === 'te' ? 'ఎంపీటీసీ ఎన్నికల సంగ్రామం' : 'MPTC General Election'}
          </span>
        </div>

        {/* Main Grid: Photo and Candidate Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Candidate Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-blue-600 via-white to-emerald-600 p-1 group">
              <img
                src={CAMPAIGN_INFO.candidatePhoto}
                alt={lang === 'te' ? 'బురునదొడ్డి రాజమ్మ - ఎంపీటీసీ అభ్యర్థి' : 'Burunadoddi Rajamma - MPTC Candidate'}
                className="w-full h-full object-cover object-top rounded-xl shadow-inner bg-slate-100"
                loading="eager"
              />
              
              {/* Overlay Ballot Tag on Photo */}
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 text-slate-900 shadow-lg border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-black text-lg shadow-sm">
                    3
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-600 uppercase font-bold tracking-wider">
                      {lang === 'te' ? 'ఎన్నికల గుర్తు' : 'Election Symbol'}
                    </div>
                    <div className="text-xs sm:text-sm font-black text-emerald-800">
                      {lang === 'te' ? 'సీలింగ్ ఫ్యాన్' : 'Ceiling Fan'}
                    </div>
                  </div>
                </div>
                <div className="p-1 bg-white rounded-lg border border-slate-200 shadow-xs">
                  <CeilingFanIcon size={34} className="text-slate-900" showCircle={false} />
                </div>
              </div>
            </div>

            {/* Campaign Leader acknowledgment under photo */}
            <div className="mt-3 text-center">
              <p className="text-xs text-blue-100 font-medium">
                {lang === 'te'
                  ? 'ప్రచార సారథ్యం: డా. గొంగళి కురువ వీరేష్'
                  : 'Campaign Led by: Dr. Gongali Kuruva Veeresh'}
              </p>
            </div>
          </div>

          {/* Details & Ballot Box Column */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            {/* Candidate Role Title */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-emerald-300 font-bold text-sm sm:text-base tracking-wide uppercase mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{content.candidateRole}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-sm">
              {lang === 'te' ? CAMPAIGN_INFO.candidateNameTe : CAMPAIGN_INFO.candidateNameEn}
            </h1>

            {/* Three Villages Highlight */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 mb-5 max-w-xl mx-auto lg:mx-0">
              <div className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1.5">
                {content.villagesCoveredTitle}
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {CAMPAIGN_INFO.villages.map((v, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-950/70 border border-emerald-400/40 text-emerald-100 font-extrabold text-sm sm:text-base shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                    {lang === 'te' ? v.te : v.en}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlighted Ballot Box (VOTE FOR SERIAL NO 3 - CEILING FAN) */}
            <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border-4 border-yellow-400 relative mb-6 max-w-xl mx-auto lg:mx-0 overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-950 font-black text-[11px] px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
                {lang === 'te' ? 'ముఖ్యమైన సూచన' : 'Official Ballot'}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="inline-block text-xs uppercase font-extrabold text-blue-900 tracking-wider mb-1">
                    {content.ballotBoxTitle}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-blue-900 leading-tight">
                    {lang === 'te' ? (
                      <>ఓటు వేయండి: <span className="text-emerald-700">సం. 3 — ఫ్యాన్ గుర్తు</span></>
                    ) : (
                      <>Vote for: <span className="text-emerald-700">Serial No. 3 — Fan Symbol</span></>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {content.ballotInstructionShort}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border-2 border-slate-300 shadow-inner">
                  <div className="w-12 h-12 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-2xl shadow-sm">
                    3
                  </div>
                  <div className="p-1 bg-white rounded-lg border border-slate-200">
                    <CeilingFanIcon size={48} className="text-slate-900" showCircle={false} />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Call Button */}
              <a
                href={`tel:${CAMPAIGN_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold text-base shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-current animate-bounce" />
                <span>{content.callNow}: {CAMPAIGN_INFO.phoneDisplay}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`${CAMPAIGN_INFO.whatsappUrl}?text=${encodeURIComponent(
                  lang === 'te'
                    ? 'నమస్కారం రాజమ్మ గారు, డా. వీరేష్ గారు. నేను కైరుప్పల ఎంపీటీసీ పరిధి నుండి సందేశం పంపుతున్నాను.'
                    : 'Namaskaram Rajamma garu, Dr. Veeresh garu. I am reaching out from Kairuppala MPTC constituency.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-base shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{content.whatsappMsg}</span>
              </a>

              {/* WhatsApp Share Button */}
              <button
                onClick={handleShare}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm backdrop-blur-md border border-white/30 transition"
              >
                <Share2 className="w-4 h-4" />
                <span>{content.shareOnWhatsApp}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom anchor scroll prompt */}
        <div className="mt-10 pt-4 flex justify-center">
          <a
            href="#about-rajamma"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/10"
          >
            <span>{lang === 'te' ? 'అభ్యర్థి వివరాలు చదవండి' : 'Read Candidate Profile'}</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
