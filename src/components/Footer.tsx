import React from 'react';
import { Phone, Award, Building, ShieldCheck, MapPin } from 'lucide-react';
import { AGENT_INFO, PROJECT_OVERVIEW } from '../data/apartmentData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-12 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/80">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-black text-white">엄궁역 트라비스 하늘채</span>
              <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-bold text-[10px]">
                코오롱글로벌
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              부산광역시 사상구 엄궁동 412번지 일원 (엄궁1구역 재개발정비사업).
              지하 5층 ~ 지상 36층 13개동 총 1,670세대 대단지 브랜드 타운.
            </p>
            <div className="mt-3 text-slate-500 text-[11px]">
              시공사: 코오롱글로벌(주) · 입주예정: 2030년 02월 예정
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>로얄층 & VIP 분양 담당자</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-slate-300">
              <div className="font-bold text-white text-sm">{AGENT_INFO.name} ({AGENT_INFO.role})</div>
              <div className="text-amber-400 font-semibold">{AGENT_INFO.feature}</div>
              <div className="text-slate-400 text-xs">문의전화: {AGENT_INFO.phone} (연중무휴 24시간 상담)</div>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">유의사항 안내</h4>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              ※ 본 웹페이지에 사용된 CG 이미지, 조감도, 배치도, 면적 및 일러스트는 소비자의 이해를 돕기 위한 것으로 실제 시공 및 인허가 과정에서 일부 변경될 수 있습니다. 
              정확한 공급계약 조건 및 분양금액은 입주자모집공고 및 견본주택 방문 상담을 통해 반드시 확인하시기 바랍니다.
            </p>
          </div>
        </div>

        <div className="pt-6 text-center text-slate-600 text-[11px]">
          Copyright © 2026 엄궁역 트라비스 하늘채 공식 분양관 All rights reserved.
        </div>
      </div>
    </footer>
  );
};
