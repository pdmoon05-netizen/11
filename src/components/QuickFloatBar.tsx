import React from 'react';
import { Phone, Award, ShieldCheck, ChevronUp } from 'lucide-react';
import { AGENT_INFO } from '../data/apartmentData';

interface QuickFloatBarProps {
  onOpenConsultation: () => void;
}

export const QuickFloatBar: React.FC<QuickFloatBarProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t-2 border-amber-500/50 shadow-2xl py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Agent Profile */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center font-black text-sm shrink-0 shadow-md">
            <Award className="w-5 h-5 text-slate-950" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold text-sm sm:text-base">{AGENT_INFO.name}</span>
              <span className="text-[10px] sm:text-xs px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {AGENT_INFO.feature}
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              엄궁역 트라비스 하늘채 공식 분양관
            </div>
          </div>
        </div>

        {/* Center & Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollToTop}
            className="hidden md:flex p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            title="맨 위로 이동"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>방문예약 신청</span>
          </button>

          <a
            href={`tel:${AGENT_INFO.cleanPhone}`}
            id="floating-call-btn"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-102"
          >
            <Phone className="w-4 h-4 text-slate-950 fill-current animate-pulse" />
            <span>{AGENT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
