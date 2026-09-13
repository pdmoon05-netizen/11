import React, { useState } from 'react';
import { Grid3X3, Award, Phone, CheckCircle2, Info } from 'lucide-react';
import { AGENT_INFO } from '../data/apartmentData';

interface BuildingUnitTableProps {
  onOpenConsultation: () => void;
}

export const BuildingUnitTable: React.FC<BuildingUnitTableProps> = ({ onOpenConsultation }) => {
  const [activeGroup, setActiveGroup] = useState<'101-106' | '107-113'>('101-106');

  const unitTypeColors = [
    { type: '59A1', color: 'bg-orange-500 text-white', label: '59A1 (206세대)', hex: '#f97316' },
    { type: '59A2', color: 'bg-pink-500 text-white', label: '59A2 (93세대)', hex: '#ec4899' },
    { type: '59B', color: 'bg-rose-600 text-white', label: '59B (27세대)', hex: '#e11d48' },
    { type: '74A', color: 'bg-emerald-500 text-white', label: '74A (6세대)', hex: '#10b981' },
    { type: '74B', color: 'bg-lime-500 text-slate-950', label: '74B (22세대)', hex: '#84cc16' },
    { type: '84A', color: 'bg-sky-500 text-white', label: '84A (381세대)', hex: '#0ea5e9' },
    { type: '84B', color: 'bg-blue-600 text-white', label: '84B (271세대)', hex: '#2563eb' },
    { type: '84C', color: 'bg-indigo-800 text-white', label: '84C (36세대)', hex: '#3730a3' },
    { type: '101B', color: 'bg-purple-600 text-white', label: '101B (17세대)', hex: '#9333ea' },
    { type: '133P', color: 'bg-slate-700 text-white', label: '133P (1세대)', hex: '#334155' },
    { type: '155P', color: 'bg-amber-600 text-white', label: '155P (1세대)', hex: '#d97706' },
    { type: '필로티', color: 'bg-slate-200 text-slate-700', label: '필로티/주민공동', hex: '#e2e8f0' },
  ];

  // Structural elevation summary for group 101~106
  const group101to106 = [
    { dong: '101동', maxFloor: 32, lines: ['84A', '84B', '84A', '84A'], note: '최고 32층 판상형' },
    { dong: '102동', maxFloor: 36, lines: ['101B', '101A', '84A', '84B', '84A'], note: '22F 스카이라운지' },
    { dong: '103동', maxFloor: 36, lines: ['101B', '101A', '84A', '84B', '84A', '155P'], note: '최고 36층 랜드마크' },
    { dong: '104동', maxFloor: 29, lines: ['84C', '84A', '84A', '84B', '84A'], note: '최고 29층 판상·타워' },
    { dong: '105동', maxFloor: 22, lines: ['59A2', '59A2', '임대', '임대'], note: '지하철 인접동' },
    { dong: '106동', maxFloor: 29, lines: ['59A1', '59A1', '59A1', '59A1'], note: '59A1 전용동' },
  ];

  // Structural elevation summary for group 107~113
  const group107to113 = [
    { dong: '107동', maxFloor: 26, lines: ['74B', '74A', '84A', '84B', '84A'], note: '74타입 집중' },
    { dong: '108동', maxFloor: 26, lines: ['59A1', '59A1', '59A1', '59B', '59A1'], note: '24평형 동' },
    { dong: '109동', maxFloor: 29, lines: ['84B', '84A', '84A', '84B', '84A'], note: '84타입 29층' },
    { dong: '110동', maxFloor: 35, lines: ['101B', '101A', '84A', '84B', '84A'], note: '33F 스카이라운지' },
    { dong: '111동', maxFloor: 29, lines: ['59A1', '59A1', '59A1', '59A1'], note: '59A1 전용동' },
    { dong: '112동', maxFloor: 28, lines: ['84C', '84A', '84A', '84B', '84A', '133P'], note: '26F 133P 펜트' },
    { dong: '113동', maxFloor: 22, lines: ['59A2', '59A2', '59A2', '59A2'], note: '59A2 전용동' },
  ];

  const currentGroupData = activeGroup === '101-106' ? group101to106 : group107to113;

  return (
    <section id="elevation" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
            <Grid3X3 className="w-3.5 h-3.5 text-blue-600" />
            <span>48P · 총 1,670세대 중 일반분양 총 1,061세대</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            동호수 배치표
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            최고 36층 랜드마크 스카이라인! 로얄층 및 일반분양 배정 호수를 확인하시고 VIP 담당자를 통해 실시간 잔여 동호수를 확인하세요.
          </p>

          {/* Group Switch Buttons */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl mt-6 border border-slate-200">
            <button
              onClick={() => setActiveGroup('101-106')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeGroup === '101-106'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              101동 ~ 106동 (48P)
            </button>
            <button
              onClick={() => setActiveGroup('107-113')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeGroup === '107-113'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              107동 ~ 113동 (49P)
            </button>
          </div>
        </div>

        {/* Color Legend (Page 48 Header Color Palette) */}
        <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-700 mb-2.5 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-blue-600" />
            <span>주택형별 색상 범례 (일반분양 1,061세대)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {unitTypeColors.map((c, i) => (
              <span 
                key={i} 
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 shadow-2xs ${c.color}`}
              >
                <span>{c.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Elevation Architecture Visualization Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {currentGroupData.map((dongItem, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 flex flex-col justify-between shadow-xs hover:border-amber-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-black text-slate-900">{dongItem.dong}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                    최고 {dongItem.maxFloor}F
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mb-3">{dongItem.note}</div>

                {/* Vertical Elevation Simulation Blocks */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  {/* Top VIP / Royal Floors (21F ~ Max) */}
                  <div className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-400/40 text-center">
                    <div className="text-[10px] font-black text-amber-900 uppercase">로얄층 (21F~{dongItem.maxFloor}F)</div>
                    <div className="text-[11px] text-amber-800 font-bold">탁 트인 특급 조망권</div>
                  </div>

                  {/* Mid Floors (6F ~ 20F) */}
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-400/30 text-center">
                    <div className="text-[10px] font-black text-blue-900">기준층 (6F~20F)</div>
                    <div className="text-[11px] text-blue-800 font-semibold">채광 및 선호도 우수</div>
                  </div>

                  {/* Lower Floors (1F ~ 5F) */}
                  <div className="p-2.5 rounded-lg bg-slate-200/60 text-center">
                    <div className="text-[10px] font-bold text-slate-700">저층부 (1F~5F)</div>
                    <div className="text-[11px] text-slate-600">합리적 분양가 (필로티 상층)</div>
                  </div>
                </div>
              </div>

              {/* Line types */}
              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="text-[10px] text-slate-500 mb-1">배치 라인 주택형</div>
                <div className="flex flex-wrap gap-1">
                  {dongItem.lines.map((ln, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-bold"
                    >
                      {ln}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Royal Floor Consultation Banner */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-slate-900">VIP 맞춤 동호수 배정</div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                원하시는 로얄층 및 선호 동호수 실시간 잔여 현황 확인
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 mt-1 font-medium">
                {AGENT_INFO.feature} {AGENT_INFO.name}을 통해 가장 전망 좋고 가치 높은 로얄 호수를 우선 안내받으실 수 있습니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${AGENT_INFO.cleanPhone}`}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{AGENT_INFO.phone} 바로연결</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              방문예약 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
