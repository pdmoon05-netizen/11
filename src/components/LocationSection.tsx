import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  GraduationCap, 
  ShoppingBag, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Building, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { LOCATION_INFO } from '../data/apartmentData';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'education' | 'amenity'>('traffic');

  return (
    <section id="location" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>사통팔달 교통망과 풍부한 인프라</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {LOCATION_INFO.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {LOCATION_INFO.description}
          </p>

          {/* Sub Tab Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('traffic')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'traffic'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Train className="w-4 h-4" />
              <span>교통환경 (사상~하단선 직결)</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'education'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>교육환경 (도보 2분 초품아)</span>
            </button>
            <button
              onClick={() => setActiveTab('amenity')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'amenity'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>생활편의 (더현대·체육센터)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Traffic Environment */}
        {activeTab === 'traffic' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Subway Direct Connection Highlight */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-500/30 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>부산 상위 0.46% 희소 가치</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    부산 하늘 아래, 역과 <span className="text-emerald-400">직결된 아파트</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-xl">
                    비 맞지 말고 이용하세요! 엄궁역사 내 단지 직결 연결통로를 통해 지하철에서 단지 상가 엘리베이터 및 지하주차장(B1~B2F)으로 다이렉트 이동합니다.
                  </p>
                  <p className="mt-2 text-xs font-semibold text-emerald-400">
                    {LOCATION_INFO.trafficSubway.status}
                  </p>
                </div>

                {/* Connection Box Diagram */}
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 max-w-md w-full">
                  <div className="text-xs font-bold text-slate-300 mb-2 text-center">
                    단지 내 지하철 직통통로 이동 경로
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[11px] text-center font-bold">
                    <div className="p-2 rounded bg-emerald-700/60 text-white flex-1">
                      엄궁역사 내<br/>연결통로
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="p-2 rounded bg-blue-700/60 text-white flex-1">
                      단지상가<br/>엘리베이터
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="p-2 rounded bg-indigo-700/60 text-white flex-1">
                      아파트 주차장<br/>지하1·2층
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Time Reductions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {LOCATION_INFO.trafficSubway.connections.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <div className="text-xs text-slate-500">{c.to}</div>
                  <div className="font-extrabold text-slate-900 text-sm mt-1">{c.time}</div>
                </div>
              ))}
            </div>

            {/* Road Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {LOCATION_INFO.trafficRoads.map((road, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 text-emerald-700">{road.name}</div>
                  <div className="text-xs text-slate-600">{road.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Education Environment */}
        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-black text-lg mb-2">
                <GraduationCap className="w-6 h-6 text-amber-600" />
                <span>안전·거리·학교 모두 갖춘 유해시설 Zero 도보 2분 “초품아”</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                단지와 맞닿은 엄궁초등학교(26m)는 대로를 건너지 않고 통학하는 안전한 초품아 환경입니다. 
                또한 정부 주도의 <span className="font-bold text-amber-900">그린스마트 미래학교</span>로 선정되어 디지털 기반 스마트교실과 친환경 학습공간으로 전면 탈바꿈합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOCATION_INFO.education.schoolDistance.map((sch, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-slate-900">{sch.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{sch.dist}</div>
                  </div>
                  {sch.dist.includes('26m') && (
                    <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      초품아
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Price Premium comparison stat box */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                <strong>초품아 프리미엄 실증:</strong> 초등학교 인접 단지는 비인접 단지 대비 실거래가 매매가 약 1.6억원 차이 형성 및 시장 변동기 가격 방어력 우수.
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Amenities & Lifestyle */}
        {activeTab === 'amenity' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="text-xs font-bold text-blue-700 mb-1">쇼핑 & 생활</div>
                <h4 className="font-black text-slate-900 text-base">롯데마트 & 전통시장 도보권</h4>
                <p className="text-xs text-slate-600 mt-2">
                  롯데마트 사상점 120m(도보 2분), 엄궁전통시장 80m(도보 1분), 엄궁농수산물 도매시장 590m로 완벽한 원스톱 장보기.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200">
                <div className="text-xs font-bold text-indigo-700 mb-1">문화 & 체육</div>
                <h4 className="font-black text-slate-900 text-base">엄궁 복합문화체육센터 (예정)</h4>
                <p className="text-xs text-slate-600 mt-2">
                  워터파크 시설을 갖춘 지상 복합체육센터가 2027년 준공 예정으로 수영 및 사계절 가족 문화생활 향유.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200">
                <div className="text-xs font-bold text-purple-700 mb-1">하이엔드 쇼핑몰</div>
                <h4 className="font-black text-slate-900 text-base">더현대 2.0 부산 (2027 예정)</h4>
                <p className="text-xs text-slate-600 mt-2">
                  서부산의 랜드마크 쇼핑몰로 들어서는 더현대 2.0 부산이 2km 거리에 인접하여 수준 높은 컬처라이프 제공.
                </p>
              </div>
            </div>

            {/* Distance list table */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-sm text-slate-900 mb-4">단지 주변 주요 편의시설 도보 및 직선거리</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
                {LOCATION_INFO.amenities.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="font-semibold text-slate-800">{item.name}</div>
                    <div className="text-slate-500 mt-0.5">{item.dist}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
