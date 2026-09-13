import React, { useState } from 'react';
import { Eye, Sunset, Moon, Sparkles, Building, Maximize2, X, Award } from 'lucide-react';
import { SKY_COMMUNITY_INFO, AGENT_INFO } from '../data/apartmentData';
import skyCommunityImg from '../assets/images/sky_community_1789302395271.jpg';

export const SkyCommunitySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLounge, setSelectedLounge] = useState<number>(0);

  const activeItem = SKY_COMMUNITY_INFO[selectedLounge];

  return (
    <section id="skycommunity" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 border border-amber-500/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>서부산에 없던 스카이 커뮤니티 라이프와 프리미엄 게스트하우스</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            서부산 최초 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">SKY Community</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            해운대 엘시티 등 최고급 하이엔드 아파트에만 있던 스카이라운지를 사상 최초로 도입! 
            지상 22층(102동)과 33층(110동) 듀얼 스카이 라운지에서 낙조와 야경의 감동을 누립니다.
          </p>
        </div>

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution 36F Sky Lounge Panoramic View Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={skyCommunityImg}
              alt="엄궁역 트라비스 하늘채 최고층 스카이라운지 파노라마 뷰"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-black border border-amber-400/60 shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>지상 33층 승학산 낙조 파노라마 스카이라운지 실물 뷰</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-amber-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>스카이라운지 크게보기</span>
            </button>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Sunset className="w-4 h-4 text-amber-400" />
                  <span>낙동강 낙조와 승학산의 아름다운 사계절을 한눈에 담는 파노라마 전망</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  102동 22F 게스트하우스 & 스카이라운지 / 110동 33F 스카이라운지 & 티하우스
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start sm:self-auto px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs transition-colors shrink-0"
              >
                고화질 원본 확대
              </button>
            </div>
          </div>
        </div>

        {/* 2 Sky Lounges Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKY_COMMUNITY_INFO.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-500/50 transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/40">
                  {item.building} · {item.floor}
                </span>
                <span className="text-xs text-slate-400 font-medium">전용 승강기 직결</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.description}</p>
              
              <div className="space-y-1.5 border-t border-slate-800 pt-3">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-amber-500/50 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs">
                  스카이라운지 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 최고층 스카이라운지 및 승학산 일몰 파노라마 전망
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
                src={skyCommunityImg}
                alt="엄궁역 트라비스 하늘채 스카이라운지 고화질 원본"
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
