import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  GraduationCap, 
  ShoppingBag, 
  Maximize2,
  X,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { LOCATION_INFO } from '../data/apartmentData';
import locationMapImg from '../assets/images/location_map_1789302299387.jpg';

export const LocationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState<'traffic' | 'education' | 'amenity'>('traffic');

  return (
    <section id="location" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>사통팔달 교통망과 풍부한 인프라</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {LOCATION_INFO.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {LOCATION_INFO.description}
          </p>
        </div>

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution Location Map Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-300 shadow-xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={locationMapImg}
              alt="엄궁역 트라비스 하늘채 광역 및 입지 위치도"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-300 text-xs font-black border border-emerald-400/50 shadow-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>입지 환경 및 광역 위치도</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-emerald-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-emerald-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>위치도 크게보기</span>
            </button>

            {/* Bottom Floating Info Summary */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>사상~하단선 5호선 엄궁역 직통연결 + 엄궁초 안심 도보통학권</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  승학산 청정 숲세권과 낙동강 수변공원, 더현대 부산(예정) 중심 생활권
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors shrink-0"
              >
                고화질 원본 확인
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Infra Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Traffic */}
          <div 
            onClick={() => setActiveHighlight('traffic')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeHighlight === 'traffic'
                ? 'bg-emerald-50/70 border-emerald-400 shadow-md ring-2 ring-emerald-200'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-700">트리플 역세권</span>
                <h3 className="text-base font-bold text-slate-900">교통 프리미엄</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              사상~하단선 엄궁역(2027년 개통예정) 단지 직통 연결. 사상역(2호선·경전철), 하단역(1호선), 부전~마산 복선전철 연계.
            </p>
          </div>

          {/* Education */}
          <div 
            onClick={() => setActiveHighlight('education')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeHighlight === 'education'
                ? 'bg-emerald-50/70 border-emerald-400 shadow-md ring-2 ring-emerald-200'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-700">도보 2분 초품아</span>
                <h3 className="text-base font-bold text-slate-900">교육 프리미엄</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              단지 바로 앞 엄궁초등학교를 품은 안심 통학로. 동궁초, 엄궁중, 학장중, 건국중·고 등 명문 학군 밀집.
            </p>
          </div>

          {/* Amenity */}
          <div 
            onClick={() => setActiveHighlight('amenity')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeHighlight === 'amenity'
                ? 'bg-emerald-50/70 border-emerald-400 shadow-md ring-2 ring-emerald-200'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-amber-600 text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-700">원스톱 인프라</span>
                <h3 className="text-base font-bold text-slate-900">생활 프리미엄</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              롯데마트, 엄궁 농산물도매시장 도보권. 더현대 부산(서부산점 추진) 및 엄궁 복합체육센터 인접.
            </p>
          </div>
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-xs">
                  위치도 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 광역 위치도 및 교통·교육·생활망
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <img
                src={locationMapImg}
                alt="엄궁역 트라비스 하늘채 위치도 고화질 원본"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
