import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TranslationStrings, CAMPAIGN_INFO } from '../data/campaignData';

interface ContactSectionProps {
  content: TranslationStrings;
  lang: 'te' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content, lang }) => {
  const [selectedVillage, setSelectedVillage] = useState('');
  const [messageText, setMessageText] = useState('');
  const [senderName, setSenderName] = useState('');

  const constructMessage = () => {
    let msg = '';
    if (senderName.trim()) {
      msg += `${lang === 'te' ? 'పేరు' : 'Name'}: ${senderName.trim()}\n`;
    }
    if (selectedVillage) {
      msg += `${lang === 'te' ? 'గ్రామం' : 'Village'}: ${selectedVillage}\n`;
    }
    msg += `\n${lang === 'te' ? 'సందేశం' : 'Message'}:\n${messageText.trim()}`;
    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const body = constructMessage();
    const url = `${CAMPAIGN_INFO.whatsappUrl}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === 'te'
        ? `కైరుప్పల ఎంపీటీసీ సందేశం - ${selectedVillage || 'గ్రామస్తుడు'}`
        : `Message for MPTC Campaign - ${selectedVillage || 'Citizen'}`
    );
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${CAMPAIGN_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5 text-blue-700" />
            <span>{content.contactTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {content.contactTitle}
          </h2>
          <p className="mt-2 text-base text-blue-800 font-semibold">
            {content.contactSubtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Phone Card */}
            <a
              href={`tel:${CAMPAIGN_INFO.phone}`}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {content.phoneNumberLabel}
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {CAMPAIGN_INFO.phoneDisplay}
                </div>
                <span className="inline-block text-xs font-semibold text-emerald-700 mt-1">
                  {lang === 'te' ? 'నేరుగా కాల్ చేయడానికి ట్యాప్ చేయండి' : 'Tap to call directly'}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CAMPAIGN_INFO.email}`}
              className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {content.emailLabel}
                </span>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors break-all">
                  {CAMPAIGN_INFO.email}
                </div>
                <span className="inline-block text-xs font-semibold text-blue-700 mt-1">
                  {lang === 'te' ? 'ఈమెయిల్ పంపడానికి ట్యాప్ చేయండి' : 'Tap to send email'}
                </span>
              </div>
            </a>

            {/* Covered Villages Card */}
            <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {content.villagesLabel}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {CAMPAIGN_INFO.villages.map((v, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                      >
                        {lang === 'te' ? v.te : v.en}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {lang === 'te'
                      ? 'ఆంధ్రప్రదేశ్ ఎంపీటీసీ నియోజకవర్గం'
                      : 'Andhra Pradesh MPTC Constituency'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Interactive Message Form (No data collection or storage) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md">
            <div className="mb-5 pb-3 border-b border-slate-100">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{content.quickMessageTitle}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900">
                {content.quickMessageSubtitle}
              </h3>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'te' ? 'మీ పేరు (ఐచ్ఛికం)' : 'Your Name (Optional)'}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={lang === 'te' ? 'ఉదాహరణ: రాముడు / లక్ష్మి' : 'e.g., Ramesh Kumar'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {content.formVillageSelect} *
                </label>
                <select
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                  required
                >
                  <option value="">{content.formSelectVillagePrompt}</option>
                  {CAMPAIGN_INFO.villages.map((v, idx) => (
                    <option key={idx} value={lang === 'te' ? v.te : v.en}>
                      {lang === 'te' ? v.te : v.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {content.formMessageLabel} *
                </label>
                <textarea
                  rows={3}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={content.formMessagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-y"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-sm shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{content.formSendWhatsApp}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{content.formSendEmail}</span>
                </button>
              </div>

              {/* Privacy protection notice */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-slate-500 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>{content.privacyNotice}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
