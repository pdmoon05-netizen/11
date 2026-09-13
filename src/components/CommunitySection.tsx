import React, { useState } from 'react';
import { Users, BookOpen, Dumbbell, Baby, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_FLOORS } from '../data/apartmentData';

export const CommunitySection: React.FC = () => {
  const [selectedFloorIndex, setSelectedFloorIndex] = useState<number>(2); // Default B4F Sports & Relax

  const currentFloor = COMMUNITY_FLOORS[selectedFloorIndex];

  return (
    <section id="community" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-3 border border-purple-200">
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span>56P · 운동, 교육, 여가 등 일상이 더욱 풍요로워지는 원스톱 커뮤니티</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            커뮤니티 센터
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            사상권 최다 커뮤니티 시설! 단지 내 사우나부터 실내골프, 북카페, 어린이집까지 지하 2층~4층에 걸쳐 구성된 하이엔드 라이프 공간
          </p>

          {/* Floor Selection Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            {COMMUNITY_FLOORS.map((fl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFloorIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                  selectedFloorIndex === idx
                    ? 'bg-purple-700 text-white shadow-md ring-2 ring-purple-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{fl.floor}</span>
                <span className="text-[11px] opacity-80 hidden sm:inline">({fl.theme.split(' ')[0]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Floor Presentation */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-extrabold">
                {currentFloor.floor}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {currentFloor.theme}
              </h3>
              <p className="text-sm text-purple-900 font-semibold mt-1">
                {currentFloor.subtitle}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {currentFloor.description}
            </p>
          </div>

          {/* Facilities Badges Grid */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              입주민 전용 편의 시설 목록
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {currentFloor.facilities.map((fac, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6 p-4 rounded-xl bg-purple-50/70 border border-purple-200/80">
            <div className="text-xs font-bold text-purple-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>특화 설계 포인트</span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-purple-950 font-medium">
              {currentFloor.highlights.map((hl, i) => (
                <span key={i} className="inline-flex items-center gap-1">
                  • {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Floors Comparison Overview Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
              <Baby className="w-4 h-4" />
              <span>지하 2층 (B2F)</span>
            </div>
            <div className="font-extrabold text-slate-900 text-base">Family & KIDS</div>
            <p className="text-xs text-slate-500 mt-1">경로당, 어린이집 안심 케어존</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
              <BookOpen className="w-4 h-4" />
              <span>지하 3층 (B3F)</span>
            </div>
            <div className="font-extrabold text-slate-900 text-base">EDU & Culture</div>
            <p className="text-xs text-slate-500 mt-1">북카페, 독서실, 1인 스튜디오, 키즈카페</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
              <Dumbbell className="w-4 h-4" />
              <span>지하 4층 (B4F)</span>
            </div>
            <div className="font-extrabold text-slate-900 text-base">Sports & Relax</div>
            <p className="text-xs text-slate-500 mt-1">실내골프, 피트니스, 호텔식 사우나, 탁구장</p>
          </div>
        </div>
      </div>
    </section>
  );
};
