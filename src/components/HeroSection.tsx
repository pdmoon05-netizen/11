import React, { useState } from 'react';
import { 
  Phone, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  MapPin, 
  Building, 
  Calendar,
  Maximize2,
  X,
  Eye,
  Sun,
  Moon
} from 'lucide-react';
import { AGENT_INFO } from '../data/apartmentData';
import clearPanoramaImg from '../assets/images/apartment_panorama_clear_1789282375385.jpg';
import twilightPanoramaImg from '../assets/images/apartment_panorama_1789282202684.jpg';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'day' | 'twilight'>('day');

  const currentPanorama = viewMode === 'day' ? clearPanoramaImg : twilightPanoramaImg;

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-white min-h-[750px]">
      {/* Background Apartment Panorama Image - High Clarity & Vividness */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentPanorama}
          alt="엄궁역 트라비스 하늘채 아파트 전경 조감도"
          className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-110"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge-only vignettes so the center & buildings remain crystal-clear and crisp */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent z-10" />
      </div>

      {/* Decorative Brand Top Banner */}
      <div className="relative z-20 border-b border-white/15 bg-slate-950/80 backdrop-blur-md px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-500 text-slate-950 shadow-sm">
              5호선 엄궁역(2027년 개통예정) 단지 내 직통연결
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-white font-semibold drop-shadow-sm">서부산 랜드마크 1,670세대</span>
          </div>
          
          <div className="flex items-center gap-2.5">
            {/* Day / Twilight View Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-black/40 border border-white/20">
              <button
                onClick={() => setViewMode('day')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-colors ${
                  viewMode === 'day' 
                    ? 'bg-amber-400 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="선명한 주간 전경"
              >
                <Sun className="w-3.5 h-3.5" />
                <span>선명한 주간 전경</span>
              </button>
              <button
                onClick={() => setViewMode('twilight')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-colors ${
                  viewMode === 'twilight' 
                    ? 'bg-amber-400 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="황혼 야경 뷰"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>황혼 뷰</span>
              </button>
            </div>

            <button
              onClick={() => setIsPhotoModalOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-md transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-slate-950" />
              <span>전경 원본 확대</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 md:pt-8 md:pb-20 flex flex-col justify-between min-h-[690px]">
        {/* Top Floating Badges */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-amber-400/80 text-amber-300 text-xs sm:text-sm font-black tracking-wide shadow-xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>아파트 전경 조감도 & VIP 특별 분양관</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mt-2">
            엄궁역 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow">트라비스 하늘채</span>
          </h1>
          <p className="mt-1 text-sm sm:text-base md:text-lg text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            지하 5층~지상 36층 13개동 총 1,670세대 대단지 브랜드 타운
          </p>
        </div>

        {/* [USER REQUEST CORE]: 사진 중앙에 이름과 연락처, 특징을 배치하는 프리미엄 VIP 센터 카드 */}
        <div className="max-w-xl w-full mx-auto my-auto">
          <div className="relative rounded-3xl bg-slate-950/90 p-6 sm:p-8 border-2 border-amber-400 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-4 ring-black/40">
            {/* Corner Luxury Golden Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

            {/* VIP Assigned Badge on Top Center */}
            <div className="flex justify-center -mt-11 sm:-mt-13 mb-2">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-2xl border-2 border-white">
                <Award className="w-5 h-5 text-slate-950 fill-current" />
                <span>{AGENT_INFO.feature}</span>
              </div>
            </div>

            {/* Agent Details in the Center */}
            <div className="text-center space-y-3">
              {/* Duty Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-wider">
                <span>업무 : {AGENT_INFO.role}</span>
                <span>|</span>
                <span>특징 : {AGENT_INFO.feature}</span>
              </div>

              {/* Name Display */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-400/90 font-bold block mb-0.5">
                  공식 분양 총괄
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow">
                  {AGENT_INFO.name}
                </h2>
              </div>

              {/* Direct Click-to-Call Contact Number Display */}
              <div className="py-2">
                <p className="text-xs text-slate-300 mb-1.5 font-medium">
                  24시간 VIP 직통 상담 & 로얄층 우선 배정
                </p>
                <a
                  href={`tel:${AGENT_INFO.cleanPhone}`}
                  id="hero-call-button"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-2xl sm:text-3xl md:text-4xl tracking-wider shadow-2xl shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 fill-current animate-bounce" />
                  <span>{AGENT_INFO.phone}</span>
                </a>
              </div>

              {/* Key Features & Benefits */}
              <div className="pt-1 pb-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-xs text-slate-200">
                  {AGENT_INFO.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-semibold text-[11px] sm:text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`tel:${AGENT_INFO.cleanPhone}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>전화 상담 바로연결 ({AGENT_INFO.phone})</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  id="hero-vip-reserve-btn"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-amber-400/80 text-amber-300 font-extrabold text-center text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>로얄층 VIP 방문예약</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Specs Cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto text-center w-full">
          <div className="p-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-md shadow-lg">
            <Building className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <div className="text-slate-400 text-[11px]">총 세대수</div>
            <div className="text-white font-bold text-xs sm:text-sm">1,670세대 (일반 1,061)</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-md shadow-lg">
            <MapPin className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <div className="text-slate-400 text-[11px]">교통 인프라</div>
            <div className="text-white font-bold text-xs sm:text-sm">5호선 엄궁역 직통통로</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-md shadow-lg">
            <Award className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <div className="text-slate-400 text-[11px]">계약 조건</div>
            <div className="text-white font-bold text-xs sm:text-sm">계약금 5% · 중도금 무이자</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-md shadow-lg">
            <Calendar className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <div className="text-slate-400 text-[11px]">입주 예정</div>
            <div className="text-white font-bold text-xs sm:text-sm">2030년 02월 예정</div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-4 text-center">
          <a
            href="#nav-bar"
            className="inline-flex items-center gap-1.5 text-xs text-white font-bold hover:text-amber-300 transition-colors drop-shadow"
          >
            <span>상세 분양 안내 및 공급금액 바로보기</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Panorama High-Resolution Lightbox Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs">
                  아파트 전경 초고화질 조감도
                </span>
                <span className="text-sm font-bold text-white hidden sm:inline">
                  엄궁역 트라비스 하늘채 (지하 5층~지상 36층, 13개동 1,670세대)
                </span>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image View */}
            <div className="relative aspect-video w-full bg-black">
              <img
                src={currentPanorama}
                alt="엄궁역 트라비스 하늘채 아파트 전경 조감도 고화질"
                className="w-full h-full object-contain brightness-105 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-bold text-amber-400">담당자: {AGENT_INFO.name} ({AGENT_INFO.feature})</span>
                  <span className="ml-2">| 문의전화: {AGENT_INFO.phone}</span>
                </div>
                <a
                  href={`tel:${AGENT_INFO.cleanPhone}`}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
                >
                  직통전화 걸기 ({AGENT_INFO.phone})
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
