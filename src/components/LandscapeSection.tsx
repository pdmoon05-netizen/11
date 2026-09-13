import React, { useState } from 'react';
import { Trees, Droplets, Bus, Sun, Dumbbell, Sparkles, Maximize2, X, CheckCircle2 } from 'lucide-react';
import { LANDSCAPE_FEATURES } from '../data/apartmentData';
import landscapeImg from '../assets/images/landscape_garden_1789302356014.jpg';

const iconList = [Droplets, Bus, Sun, Dumbbell, Sparkles];

export const LandscapeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(1);

  const activeFeature = LANDSCAPE_FEATURES.find(f => f.number === selectedItem) || LANDSCAPE_FEATURES[0];
  const ActiveIcon = iconList[selectedItem - 1] || Trees;

  return (
    <section id="landscape" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
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

        {/* [MAIN IMAGE SHOWCASE]: High-Resolution Landscape Garden Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-300 shadow-xl bg-slate-950 mb-10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={landscapeImg}
              alt="엄궁역 트라비스 하늘채 단지 내 수변공원 및 특화 조경 전경"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-300 text-xs font-black border border-emerald-400/50 shadow-md flex items-center gap-1.5">
                <Trees className="w-3.5 h-3.5 text-emerald-400" />
                <span>에코 힐링 센트럴 파크 조경 전경</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-emerald-600 text-white text-xs font-bold backdrop-blur-md border border-white/20 hover:border-emerald-400 shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>조경 전경 크게보기</span>
            </button>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>단지 중심 잔디광장 · 워터라운지 분수 · 사계절 테마숲길 산책로</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  아이들이 안전하게 뛰어노는 테마 어린이놀이터와 패밀리 힐링 쉼터 완비
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors shrink-0"
              >
                고화질 원본 확인
              </button>
            </div>
          </div>
        </div>

        {/* 5 Landscape Themes Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {LANDSCAPE_FEATURES.map((item, idx) => {
            const Icon = iconList[idx] || Trees;
            const isSelected = selectedItem === item.number;
            return (
              <div
                key={item.number}
                onClick={() => setSelectedItem(item.number)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-400 shadow-md ring-2 ring-emerald-200'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs text-slate-900 mb-1">{item.name}</h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Full-Screen Image Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-xs">
                  단지 조경 원본 고화질
                </span>
                <span className="text-sm font-bold text-white">
                  엄궁역 트라비스 하늘채 단지 내 5대 특화 조경 및 센트럴 수변공원
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
                src={landscapeImg}
                alt="엄궁역 트라비스 하늘채 조경 고화질 원본"
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
