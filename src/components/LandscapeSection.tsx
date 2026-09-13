import React, { useState } from 'react';
import { Trees, Droplets, Bus, Sun, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';
import { LANDSCAPE_FEATURES } from '../data/apartmentData';

const iconList = [Droplets, Bus, Sun, Dumbbell, Sparkles];

export const LandscapeSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  const activeFeature = LANDSCAPE_FEATURES.find(f => f.number === selectedItem) || LANDSCAPE_FEATURES[0];
  const ActiveIcon = iconList[selectedItem - 1] || Trees;

  return (
    <section id="landscape" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Trees className="w-3.5 h-3.5 text-emerald-600" />
            <span>자연과 일상이 조화를 이루는 단지 내 5대 특화 조경</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            단지 조경 특화 설계
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            16.39%의 낮은 건폐율로 완성한 쾌적한 녹지율! 365일 숲세권 힐링과 사계절의 아름다움을 만끽하는 리조트형 조경 단지
          </p>
        </div>

        {/* 5 Feature Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {LANDSCAPE_FEATURES.map((item, idx) => {
            const Icon = iconList[idx] || Trees;
            const isSelected = selectedItem === item.number;
            return (
              <button
                key={item.number}
                onClick={() => setSelectedItem(item.number)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{['➊', '➋', '➌', '➍', '➎'][idx]} {item.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Highlight Showcase Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Icon Illustration Block */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-100 rounded-2xl border border-emerald-200 text-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
                <ActiveIcon className="w-10 h-10" />
              </div>
              <span className="text-xs font-black tracking-widest text-emerald-700 uppercase">
                특화조경 NO. {activeFeature.number}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {activeFeature.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                {activeFeature.tag}
              </p>
            </div>

            {/* Description and Key Elements */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold">
                {activeFeature.subtitle}
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeFeature.description}
              </p>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  주요 특화 설계 구성요소
                </h4>
                <div className="space-y-2">
                  {activeFeature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Landscape Quick Cards Matrix */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {LANDSCAPE_FEATURES.map((item, idx) => {
            const Icon = iconList[idx] || Trees;
            return (
              <div 
                key={item.number}
                onClick={() => setSelectedItem(item.number)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedItem === item.number
                    ? 'bg-emerald-50 border-emerald-400 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">{item.name.split(' ')[0]}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
