import React, { useState } from 'react';
import { Layers, Compass, ArrowUpDown, Building, CheckCircle2, Maximize } from 'lucide-react';
import { SITE_PLAN_INFO } from '../data/apartmentData';

export const SitePlanSection: React.FC = () => {
  const [selectedDong, setSelectedDong] = useState<string>('102동');

  const selectedBuildingData = SITE_PLAN_INFO.buildings.find(b => b.dong === selectedDong) || SITE_PLAN_INFO.buildings[1];

  return (
    <section id="siteplan" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold mb-3 border border-indigo-200">
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

        {/* Feature Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SITE_PLAN_INFO.features.map((feat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-indigo-600 mb-1">{feat.label}</div>
              <div className="text-sm font-semibold text-slate-800">{feat.value}</div>
            </div>
          ))}
        </div>

        {/* Interactive Building Selector & Map Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Building Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-700">13개동별 세부 스펙 선택</span>
                <span className="text-[11px] text-slate-400">클릭 시 상세 정보</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2">
                {SITE_PLAN_INFO.buildings.map((b) => (
                  <button
                    key={b.dong}
                    onClick={() => setSelectedDong(b.dong)}
                    className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                      selectedDong === b.dong
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-102 ring-2 ring-amber-400'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <div>{b.dong}</div>
                    <div className="text-[10px] opacity-80 font-normal">{b.floors}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Building Detail Card */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-black text-amber-400">{selectedBuildingData.dong} 상세 안내</h4>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
                  최고 {selectedBuildingData.floors}
                </span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">배치 주택형</span>
                  <span className="font-bold text-white">{selectedBuildingData.types.join(', ')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">엘리베이터 구성</span>
                  <span className="font-semibold text-emerald-400">{selectedBuildingData.elevators}</span>
                </div>
                {selectedBuildingData.note && (
                  <div className="p-2.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold mt-2">
                    ★ {selectedBuildingData.note}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Architectural Level & Distance Visualizer */}
          <div className="lg:col-span-8 space-y-6">
            {/* Visual Level Difference Box (Page 34) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-bold text-slate-900 text-base">주변 단지 대비 지형 레벨차 (평지 프리미엄)</h4>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  고바위 없는 평지
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed mb-4">
                타 단지는 지형 경사로 인해 최고 +50.0m(더샵리오몬트), +42.0m(엄궁롯데캐슬리버) 언덕에 위치하지만, 
                <strong> 엄궁역 트라비스 하늘채는 엄궁역(+5.3m) 및 엄궁초(+14m)와 평탄하게 이어지는 대표 평지 단지</strong>로 보행 편의성과 시세 방어력이 월등합니다.
              </div>

              {/* Comparative Level Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[11px] text-emerald-700 font-semibold">5호선 엄궁역 지하철</div>
                  <div className="text-lg font-black text-emerald-900 mt-0.5">+5.3m</div>
                  <div className="text-[10px] text-emerald-600">단지 직결 통로</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-[11px] text-blue-700 font-semibold">트라비스 하늘채 (본 단지)</div>
                  <div className="text-lg font-black text-blue-900 mt-0.5">+15.3m</div>
                  <div className="text-[10px] text-blue-600">완만한 평지 대단지</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 opacity-80">
                  <div className="text-[11px] text-slate-600">엄궁 롯데캐슬리버</div>
                  <div className="text-lg font-bold text-slate-700 mt-0.5">+42.0m</div>
                  <div className="text-[10px] text-slate-500">경사 지형 단차</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 opacity-80">
                  <div className="text-[11px] text-slate-600">더샵 리오몬트</div>
                  <div className="text-lg font-bold text-slate-700 mt-0.5">+50.0m</div>
                  <div className="text-[10px] text-slate-500">고지대 경사 단지</div>
                </div>
              </div>
            </div>

            {/* In-Between Building Distance (인동거리 Page 33) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Maximize className="w-5 h-5 text-amber-600" />
                <h4 className="font-bold text-slate-900 text-base">최대 76.16m 쾌적 인동거리</h4>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                동간 거리가 54m~76.16m에 달해 사생활 보호 및 전 세대 남향 위주 풍부한 햇살과 바람길을 누립니다.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">104동 ↔ 107동: 76.16m</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">104동 ↔ 108동: 68m</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">103동 ↔ 109동: 74m</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">109동 ↔ 111동: 61m</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">111동 ↔ 113동: 66m</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">101동 ↔ 104동: 64m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
