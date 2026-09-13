import React, { useState } from 'react';
import { Users, Dumbbell, BookOpen, Baby, Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_FLOORS } from '../data/apartmentData';
import communityImg from '../assets/images/community_center_1789302375537.jpg';

export const CommunitySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFloorIndex, setSelectedFloorIndex] = useState<number>(2); // Default B4F Sports & Relax

  const currentFloor = COMMUNITY_FLOORS[selectedFloorIndex];

  return (
    <section id="community" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-3 border border-purple-200">
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span>운동, 교육, 여가 등 일상이 더욱 풍요로워지는 원스톱 커뮤니티</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            커뮤니티 센터
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            사상권 최다 시설! 실내 스크린골프, 대형 피트니스, 건식·습식 사우나, 북카페와 어린이집까지 지하 2층~4층에 걸쳐 구성된 하이엔드 라이프 공간
          </p>
        </div>

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution Community Center Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-purple-300 shadow-xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={communityImg}
              alt="엄궁역 트라비스 하늘채 고품격 커뮤니티 센터 전경"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-purple-300 text-xs font-black border border-purple-400/50 shadow-md flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>호텔급 하이엔드 커뮤니티 시설 전경</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-purple-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-purple-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>커뮤니티 크게보기</span>
            </button>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>실내 골프연습장(GDR) · 대형 피트니스 & GX룸 · 힐링 사우나 완비</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  입주민만을 위한 독서실·북카페, 국공립 어린이집, 시니어클럽 등 맞춤 공간
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-black text-xs transition-colors shrink-0"
              >
                고화질 원본 확인
              </button>
            </div>
          </div>
        </div>

        {/* Floor Selection & Details Cards */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-wrap gap-2 mb-6">
            {COMMUNITY_FLOORS.map((fl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFloorIndex(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                  selectedFloorIndex === idx
                    ? 'bg-purple-700 text-white shadow-md ring-2 ring-purple-400'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{fl.floor}</span>
                <span className="text-[11px] opacity-85">({fl.theme.split(' ')[0]})</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black">
                {currentFloor.floor} 전용 공간
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                {currentFloor.theme}
              </h3>
              <p className="text-xs font-bold text-purple-900 mt-1">
                {currentFloor.subtitle}
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {currentFloor.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {currentFloor.facilities.map((facilityName, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs shadow-2xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{facilityName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-purple-500/40 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-purple-500 text-white font-black text-xs">
                  커뮤니티 센터 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 피트니스, 골프, 북카페 커뮤니티 전경
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
                src={communityImg}
                alt="엄궁역 트라비스 하늘채 커뮤니티 센터 고화질 원본"
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
