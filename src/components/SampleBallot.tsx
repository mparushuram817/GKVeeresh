import React, { useState } from 'react';
import { Vote, CheckCircle, AlertCircle, HelpCircle, ArrowDown } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';
import { CeilingFanIcon } from './CeilingFanIcon';

interface SampleBallotProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const SampleBallot: React.FC<SampleBallotProps> = ({ content, lang }) => {
  const [stamped, setStamped] = useState(true);

  return (
    <section id="ballot" className="py-12 sm:py-16 bg-gradient-to-b from-white via-blue-50/40 to-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-black uppercase tracking-wider mb-2">
            <Vote className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'te' ? 'ఓటర్ల మార్గదర్శిని' : 'Voter Guide'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.ballotSectionTitle}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-semibold">
            {content.ballotSectionSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Sample Ballot Paper Replica Card */}
        <div className="bg-[#fffdf9] rounded-2xl shadow-xl border-4 border-slate-700 p-4 sm:p-7 relative overflow-hidden">
          {/* Top Paper Texture & Watermark */}
          <div className="text-center pb-4 mb-4 border-b-2 border-dashed border-slate-400">
            {/* Required Label */}
            <div className="inline-block px-4 py-1.5 bg-yellow-300 text-yellow-950 font-black text-sm sm:text-base rounded-md border-2 border-yellow-500 shadow-xs uppercase tracking-wide mb-2">
              {content.sampleBallotNotice}
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-700">
              {lang === 'te'
                ? 'ఎంపీటీసీ సాధారణ ఎన్నికలు — కైరుప్పల, పుప్పాల దొడ్డి, చెన్నంపల్లి'
                : 'MPTC General Election — Kairuppala, Puppala Doddi, Chennampalli'}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">
              {lang === 'te'
                ? '(ఈ క్రింది వరుస 3లో బురునదొడ్డి రాజమ్మ గారి పేరు మరియు ఫ్యాన్ గుర్తు ఎదురుగా స్వస్తిక్ ముద్ర వేయండి)'
                : '(Stamp the Swastik mark firmly in Row 3 against Burunadoddi Rajamma & Ceiling Fan symbol)'}
            </div>
          </div>

          {/* HTML/CSS Ballot Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-slate-900 bg-white">
              <thead>
                <tr className="bg-slate-200 text-slate-900 text-xs sm:text-sm font-extrabold border-b-2 border-slate-900">
                  <th className="py-2.5 px-2 sm:px-4 border-r-2 border-slate-900 w-16 sm:w-20 text-center">
                    {content.tableColSerial}
                  </th>
                  <th className="py-2.5 px-3 sm:px-6 border-r-2 border-slate-900 text-left">
                    {content.tableColName}
                  </th>
                  <th className="py-2.5 px-2 sm:px-4 border-r-2 border-slate-900 w-24 sm:w-32 text-center">
                    {content.tableColSymbol}
                  </th>
                  <th className="py-2.5 px-2 sm:px-4 w-24 sm:w-36 text-center bg-blue-50/60">
                    {content.tableColStamp}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* ROW 1: BLANK */}
                <tr className="border-b-2 border-slate-800 bg-slate-50/50 hover:bg-slate-100/50 transition">
                  <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-900 text-center font-bold text-slate-400 text-lg sm:text-xl">
                    1
                  </td>
                  <td className="py-4 px-3 sm:px-6 border-r-2 border-slate-900">
                    <div className="h-5 bg-slate-200/80 rounded w-3/4 animate-pulse"></div>
                    <span className="text-[11px] text-slate-400 italic">
                      {content.blankCandidateNotice}
                    </span>
                  </td>
                  <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-900 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full border border-dashed border-slate-300 bg-slate-100/70"></div>
                  </td>
                  <td className="py-4 px-2 sm:px-4 text-center bg-slate-50">
                    <div className="w-9 h-9 mx-auto border border-dashed border-slate-300 rounded-lg"></div>
                  </td>
                </tr>

                {/* ROW 2: BLANK */}
                <tr className="border-b-2 border-slate-800 bg-slate-50/50 hover:bg-slate-100/50 transition">
                  <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-900 text-center font-bold text-slate-400 text-lg sm:text-xl">
                    2
                  </td>
                  <td className="py-4 px-3 sm:px-6 border-r-2 border-slate-900">
                    <div className="h-5 bg-slate-200/80 rounded w-2/3 animate-pulse"></div>
                    <span className="text-[11px] text-slate-400 italic">
                      {content.blankCandidateNotice}
                    </span>
                  </td>
                  <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-900 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full border border-dashed border-slate-300 bg-slate-100/70"></div>
                  </td>
                  <td className="py-4 px-2 sm:px-4 text-center bg-slate-50">
                    <div className="w-9 h-9 mx-auto border border-dashed border-slate-300 rounded-lg"></div>
                  </td>
                </tr>

                {/* ROW 3: BURUNADODDI RAJAMMA & CEILING FAN SYMBOL (PROMINENT HIGHLIGHT) */}
                <tr className="bg-emerald-50/90 border-b-2 border-slate-900 relative ring-4 ring-emerald-500 shadow-md">
                  {/* Serial No 3 */}
                  <td className="py-5 px-2 sm:px-4 border-r-2 border-slate-900 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm">
                      3
                    </div>
                  </td>

                  {/* Candidate Name */}
                  <td className="py-5 px-3 sm:px-6 border-r-2 border-slate-900">
                    <div className="flex flex-col">
                      <span className="font-black text-slate-950 text-xl sm:text-2xl md:text-3xl leading-snug">
                        {CAMPAIGN_INFO.candidateNameTe}
                      </span>
                      <span className="font-extrabold text-blue-900 text-sm sm:text-base">
                        {CAMPAIGN_INFO.candidateNameEn}
                      </span>
                      <span className="text-xs font-bold text-emerald-800 mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        {lang === 'te' ? 'వైఎస్సార్ కాంగ్రెస్ పార్టీ (YSRCP)' : 'YSRCP Candidate'}
                      </span>
                    </div>
                  </td>

                  {/* Ceiling Fan Symbol */}
                  <td className="py-5 px-2 sm:px-4 border-r-2 border-slate-900 text-center bg-white">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="p-1 rounded-lg hover:scale-105 transition-transform">
                        <CeilingFanIcon size={64} className="text-slate-900" showCircle={true} />
                      </div>
                      <span className="font-black text-xs sm:text-sm text-slate-900">
                        {lang === 'te' ? 'సీలింగ్ ఫ్యాన్' : 'Ceiling Fan'}
                      </span>
                    </div>
                  </td>

                  {/* Voting Space / Stamp Box */}
                  <td
                    onClick={() => setStamped(!stamped)}
                    className="py-5 px-2 sm:px-4 text-center cursor-pointer bg-white relative hover:bg-emerald-50/50 transition group select-none"
                    title={content.interactiveStampPrompt}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-lg border-2 border-slate-400 relative flex items-center justify-center p-1 bg-white">
                      {stamped ? (
                        <div className="relative flex flex-col items-center justify-center animate-in zoom-in-75 duration-200">
                          {/* Official Indian Ballot Purple Swastika Stamp Replica */}
                          <svg
                            viewBox="0 0 100 100"
                            className="w-14 h-14 sm:w-16 sm:h-16 text-indigo-800 drop-shadow-sm opacity-95 transform rotate-3"
                            fill="currentColor"
                          >
                            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="3 2" />
                            {/* Swastika arms (traditional election stamp symbol used in AP Panchayat ballots) */}
                            <path
                              d="M 50 18 L 50 50 L 82 50 M 50 18 L 74 18 M 82 50 L 82 74 M 50 50 L 50 82 M 50 82 L 26 82 M 50 50 L 18 50 M 18 50 L 18 26"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              strokeLinecap="square"
                            />
                            {/* Center ink dot */}
                            <circle cx="50" cy="50" r="4" fill="currentColor" />
                          </svg>
                          <span className="text-[9px] font-black text-indigo-900 uppercase tracking-tighter mt-0.5">
                            ఓటు (VOTED)
                          </span>
                        </div>
                      ) : (
                        <div className="text-[11px] font-bold text-slate-400 group-hover:text-emerald-700 flex flex-col items-center">
                          <ArrowDown className="w-4 h-4 animate-bounce mb-0.5" />
                          <span>{lang === 'te' ? 'స్టాంప్ వేయండి' : 'Click to Stamp'}</span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive feedback notice */}
          <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-950">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
              <span className="text-xs sm:text-sm font-bold">
                {stamped ? content.stampedSuccessMsg : content.interactiveStampPrompt}
              </span>
            </div>
            <button
              onClick={() => setStamped(!stamped)}
              className="text-xs font-black px-3 py-1.5 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition active:scale-95 shrink-0"
            >
              {stamped
                ? (lang === 'te' ? 'స్టాంప్ రీసెట్ చేయండి' : 'Reset Stamp')
                : (lang === 'te' ? 'స్టాంప్ వేయండి' : 'Stamp Now')}
            </button>
          </div>
        </div>

        {/* 3 Steps on How to Vote Correctly */}
        <div className="mt-10">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <HelpCircle className="w-5 h-5 text-blue-700" />
            <span>{content.votingStepsTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.votingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-base mb-3 shadow-xs">
                    {step.step}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {idx === 0
                      ? 'క్రమ సంఖ్య: 3'
                      : idx === 1
                      ? 'ఫ్యాన్ గుర్తు పైనే ముద్ర'
                      : 'సిరా చెదరకుండా నిలువు మడత'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
