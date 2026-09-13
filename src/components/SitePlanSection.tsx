import React, { useState } from 'react';
import { Layers, Compass, Maximize2, X, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { SITE_PLAN_INFO } from '../data/apartmentData';
import sitePlanImg from '../assets/images/site_plan_1789302318994.jpg';

export const SitePlanSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDong, setSelectedDong] = useState<string>('102동');

  const selectedBuildingData = SITE_PLAN_INFO.buildings.find(b => b.dong === selectedDong) || SITE_PLAN_INFO.buildings[1];

  return (
    <section id="siteplan" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold mb-3 border border-indigo-200">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>남향 위주 혁신설계 및 평지 대단지</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {SITE_PLAN_INFO.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {SITE_PLAN_INFO.description}
          </p>
        </div>

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution 3D Site Plan Master Image */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-300 shadow-xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={sitePlanImg}
              alt="엄궁역 트라비스 하늘채 단지배치도 조감도"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-300 text-xs font-black border border-indigo-400/50 shadow-md flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span>남향 위주 13개동 마스터 단지배치도</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-indigo-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-indigo-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>배치도 크게보기</span>
            </button>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>최대 76m 넉넉한 동간거리 · 지상 차 없는 안심 공원형 단지</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  101동~113동 총 13개동 판상형·타워형 조화 및 22층/33층 듀얼 스카이라운지
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-black text-xs transition-colors shrink-0"
              >
                고화질 원본 확대
              </button>
            </div>
          </div>
        </div>

        {/* 13 Dong Quick Navigator & Specification Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center justify-between">
              <span>단지 내 13개동 바로 선택</span>
              <span className="text-xs text-slate-400 font-normal">동을 클릭하여 층수와 전용타입을 확인하세요</span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
              {SITE_PLAN_INFO.buildings.map((b) => (
                <button
                  key={b.dong}
                  onClick={() => setSelectedDong(b.dong)}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                    selectedDong === b.dong
                      ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-400 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <div className="font-extrabold">{b.dong}</div>
                  <div className="text-[10px] opacity-80">{b.floors}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-indigo-900 text-white p-6 rounded-2xl shadow-md border border-indigo-700">
            <div className="flex items-center justify-between border-b border-indigo-700 pb-3 mb-3">
              <span className="text-xl font-black text-amber-300">{selectedBuildingData.dong} 정보</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-800 text-indigo-200 font-semibold">
                최고 {selectedBuildingData.floors}
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-indigo-300 block mb-1">구성 타입:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBuildingData.types.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-indigo-800 text-white font-bold text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <span className="text-indigo-300 block mb-0.5">승강기 정보:</span>
                <span className="text-slate-100 font-semibold">{selectedBuildingData.elevators}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-indigo-500/40 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-indigo-500 text-white font-black text-xs">
                  단지배치도 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 13개동 전체 배치도 및 단지 내 동선
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
                src={sitePlanImg}
                alt="엄궁역 트라비스 하늘채 단지배치도 고화질 원본"
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
