import React from 'react';
import { Cpu, Shield, Zap, Smartphone, Warehouse, Car, CheckCircle2, Award } from 'lucide-react';
import { SYSTEM_INFO } from '../data/apartmentData';

export const SystemSection: React.FC = () => {
  return (
    <section id="system" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold mb-3 border border-cyan-200">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>첨단 IoT 스마트홈과 안전·웰빙·친환경 에너지 시스템</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {SYSTEM_INFO.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            생활의 편리함과 안전을 극대화하고 에너지 관리비를 혁신적으로 절감하는 코오롱 하늘채의 스마트 주거 시스템
          </p>
        </div>

        {/* Top Two Mega Highlights: 1:1 Storage & 1.5 Parking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 1:1 Storage */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 shadow-sm flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
              <Warehouse className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-amber-200 text-amber-900 text-xs font-black mb-1">
                사상구 최초 전세대 무상
              </div>
              <h3 className="text-xl font-black text-slate-900">
                전 세대 1:1 개별 지하창고 제공
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                부피가 큰 캠핑용품, 골프백, 계절 가전, 캐리어 등을 집 안에 보관할 필요 없이 세대 전용 지하창고에 안전하고 편리하게 보관할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 1.5 Parking */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-sm flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-blue-200 text-blue-900 text-xs font-black mb-1">
                주차난 ZERO
              </div>
              <h3 className="text-xl font-black text-slate-900">
                세대당 1.5대 여유로운 주차대수 (총 2,505대)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                인근 단지(1.0~1.2대) 대비 압도적인 주차공간 확보! 광폭 주차면과 주차유도 시스템, 전기차 급속/완속 충전 스테이션을 완비했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Categories of Systems (Page 65 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SYSTEM_INFO.categories.map((cat, idx) => {
            const icons = [Zap, Shield, Cpu, Smartphone];
            const CatIcon = icons[idx] || Cpu;
            return (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-slate-800 border border-slate-200 flex items-center justify-center shadow-2xs">
                    <CatIcon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{cat.title}</h4>
                    <p className="text-xs text-slate-500">{cat.desc}</p>
                  </div>
                </div>

                <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-200">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">{item.name}: </span>
                        <span className="text-slate-600">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
