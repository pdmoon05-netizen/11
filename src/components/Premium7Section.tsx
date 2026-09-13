import React from 'react';
import { 
  Train, 
  Navigation as NavIcon, 
  Building2, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { PREMIUM_7_ITEMS, AGENT_INFO } from '../data/apartmentData';

const iconMap: Record<string, React.ElementType> = {
  Train,
  Navigation: NavIcon,
  Building2,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  TrendingUp,
};

export const Premium7Section: React.FC = () => {
  return (
    <section id="premium7" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>23P · 변화로 새로워질 엄궁 5,000세대 브랜드 타운 대표 평지 대단지</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            엄궁역 트라비스 하늘채 <span className="text-amber-600">PREMIUM 7</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            비교할수록 확실한 가치! 역세권·평지·대단지·초품아·스카이커뮤니티를 모두 갖춘 서부산 최고 중심의 프리미엄 7가지
          </p>
        </div>

        {/* Premium 7 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREMIUM_7_ITEMS.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.number}
                className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Top Number & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center font-black text-lg shadow-md shadow-amber-500/20">
                      <Icon className="w-6 h-6 text-slate-950" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
                        PREMIUM {item.number}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-100/80 text-amber-900 mt-0.5">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    {item.subTitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 7th item takes full width on 2-col or highlighted summary block */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-xs font-extrabold">
                  VIP 특별혜택
                </span>
                <span className="text-xs text-slate-300">로얄층 선점 기회</span>
              </div>
              <h3 className="text-xl font-black text-amber-300">
                로얄층 & VIP 맞춤 호수 지정
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                인근 신축 대비 약 3년 전 수준의 착한 분양가(84타입 6억대). 
                계약금 5% (1차 1천만원) + 중도금 60% 전액 무이자 조건으로 초기 자금 부담을 최소화했습니다.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">분양 상담 문의</div>
                <div className="text-base font-bold text-white">{AGENT_INFO.name} ({AGENT_INFO.feature})</div>
              </div>
              <a
                href={`tel:${AGENT_INFO.cleanPhone}`}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>{AGENT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
