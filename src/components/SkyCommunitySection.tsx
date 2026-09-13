import React, { useState } from 'react';
import { Eye, Sunset, Moon, Sparkles, Building, CheckCircle2, Award } from 'lucide-react';
import { SKY_COMMUNITY_INFO, AGENT_INFO } from '../data/apartmentData';

export const SkyCommunitySection: React.FC = () => {
  const [selectedLounge, setSelectedLounge] = useState<number>(0);

  const activeItem = SKY_COMMUNITY_INFO[selectedLounge];

  return (
    <section id="skycommunity" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 border border-amber-500/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>60P · 서부산에 없던 스카이 커뮤니티 라이프와 프리미엄 게스트하우스</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            서부산 최초 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">SKY Community</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            해운대 엘시티, 아이파크 등 최고급 하이엔드 아파트에만 있던 스카이 라운지를 사상 최초로 도입! 
            지상 22층(102동)과 33층(110동) 듀얼 스카이 라운지에서 낙조와 야경의 감동을 누립니다.
          </p>

          {/* Lounge Switcher */}
          <div className="inline-flex p-1 bg-slate-900 rounded-xl mt-6 border border-slate-800">
            {SKY_COMMUNITY_INFO.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLounge(idx)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedLounge === idx
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{item.floor} ({item.building})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Main Showcase */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
                  {activeItem.floor} · {activeItem.building}
                </span>
                <span className="text-xs text-slate-400 font-medium">스카이 전용 E/V 직통 운행</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeItem.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  시설 구성 안내
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeItem.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  파노라마 조망 포인트
                </h4>
                <div className="space-y-1.5">
                  {activeItem.viewPoints.map((v, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Sunset className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Panoramic Sky View Visualizer (63P, 64P Sunset & Night View) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Sunset View Visual Card */}
              <div className="rounded-xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-orange-950/60 via-amber-950/40 to-slate-900 p-5">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-2">
                  <Sunset className="w-4 h-4 text-amber-400" />
                  <span>승학산 낙조 뷰 (63P)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  낙동강을 붉게 물들이는 환상적인 일몰과 승학산의 능선이 펼쳐지는 골든 아워 전망.
                  일상에 특별한 감동을 선사합니다.
                </p>
              </div>

              {/* Night View Visual Card */}
              <div className="rounded-xl overflow-hidden border border-blue-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 p-5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm mb-2">
                  <Moon className="w-4 h-4 text-blue-400" />
                  <span>승학산 야경 뷰 & 도심 라이트업 (64P)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  서부산 도심 불빛과 대교 조명이 어우러지는 파노라마 나이트뷰.
                  스카이라운지와 파티룸에서 와인 한 잔의 품격을 만끽하세요.
                </p>
              </div>

              {/* VIP Booking Notice */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 font-bold">VIP 로얄층 상담: </span>
                  <span>스카이라운지 조망 및 고층 로얄 호수 특별 배정</span>
                </div>
                <a
                  href={`tel:${AGENT_INFO.cleanPhone}`}
                  className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0"
                >
                  문의 {AGENT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
