import React, { useState } from 'react';
import { Grid3X3, Award, Phone, CheckCircle2, Maximize2, X, Sparkles, ShieldCheck } from 'lucide-react';
import { AGENT_INFO } from '../data/apartmentData';
import dongHosuImg from '../assets/images/dong_hosu_1789302340306.jpg';

interface BuildingUnitTableProps {
  onOpenConsultation: () => void;
}

export const BuildingUnitTable: React.FC<BuildingUnitTableProps> = ({ onOpenConsultation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unitTypeColors = [
    { type: '59A1', color: 'bg-orange-500 text-white', label: '59A1 (206세대)' },
    { type: '59A2', color: 'bg-pink-500 text-white', label: '59A2 (93세대)' },
    { type: '59B', color: 'bg-rose-600 text-white', label: '59B (27세대)' },
    { type: '74A', color: 'bg-emerald-500 text-white', label: '74A (6세대)' },
    { type: '74B', color: 'bg-lime-500 text-slate-950', label: '74B (22세대)' },
    { type: '84A', color: 'bg-sky-500 text-white', label: '84A (381세대)' },
    { type: '84B', color: 'bg-blue-600 text-white', label: '84B (271세대)' },
    { type: '84C', color: 'bg-indigo-800 text-white', label: '84C (36세대)' },
    { type: '101B', color: 'bg-purple-600 text-white', label: '101B (17세대)' },
    { type: '133펜트', color: 'bg-slate-700 text-white', label: '133 펜트 (1세대)' },
    { type: '155펜트', color: 'bg-amber-600 text-white', label: '155 펜트 (1세대)' },
  ];

  return (
    <section id="elevation" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
            <Grid3X3 className="w-3.5 h-3.5 text-blue-600" />
            <span>총 1,670세대 중 일반분양 총 1,061세대</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            동호수 배치표
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            101동부터 113동까지 최고 36층 랜드마크! 타입별 층수 배치와 로얄동·로얄층 호수 배치 현황
          </p>
        </div>

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution Dong-Hosu Elevation Diagram Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-blue-300 shadow-xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={dongHosuImg}
              alt="엄궁역 트라비스 하늘채 동호수표 및 전 동 입면도"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-blue-300 text-xs font-black border border-blue-400/50 shadow-md flex items-center gap-1.5">
                <Grid3X3 className="w-3.5 h-3.5 text-blue-400" />
                <span>101동~113동 전체 동호수 및 층별 배치도</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-blue-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-blue-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>동호수표 크게보기</span>
            </button>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{AGENT_INFO.name} 특별 관리: 103동·110동 고층 스카이뷰 및 판상형 로얄 라인</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  총 1,061세대 일반분양 물량 중 선호도 높은 로얄층 우선 배정 상담 가능
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="self-start sm:self-auto px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors shrink-0 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>로얄동호수 잔여확인</span>
              </button>
            </div>
          </div>
        </div>

        {/* Unit Type Color Legend */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <div className="text-xs font-bold text-slate-700 mb-3">타입별 범례 및 세대수</div>
          <div className="flex flex-wrap gap-2">
            {unitTypeColors.map((item, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs ${item.color}`}
              >
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-400/40">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500 text-slate-950 rounded-xl font-black">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-bold">{AGENT_INFO.feature} {AGENT_INFO.name}</div>
              <div className="text-sm font-extrabold text-white">원하시는 평형의 로얄층 및 조망권 잔여 호수를 즉시 조회해 드립니다.</div>
            </div>
          </div>
          <a
            href={`tel:${AGENT_INFO.cleanPhone}`}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>{AGENT_INFO.phone} 호수조회</span>
          </a>
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-blue-500/40 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-500 text-white font-black text-xs">
                  동호수표 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 13개동 전체 층별 동호수 배치표
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
                src={dongHosuImg}
                alt="엄궁역 트라비스 하늘채 동호수표 고화질 원본"
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
