import React, { useState } from 'react';
import { 
  Home, 
  Coins, 
  Maximize2, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  Layers, 
  Award, 
  ChevronRight,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { UNIT_TYPES, AGENT_INFO } from '../data/apartmentData';
import { UnitTypeInfo } from '../types';

interface FloorPlanPriceSectionProps {
  onOpenConsultation: () => void;
}

export const FloorPlanPriceSection: React.FC<FloorPlanPriceSectionProps> = ({ onOpenConsultation }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('84A'); // Default 84A
  const [activeSubTab, setActiveSubTab] = useState<'plan' | 'price' | 'option'>('price');
  const [floorFilter, setFloorFilter] = useState<'all' | 'royal' | 'standard' | 'low'>('all');

  const selectedUnit: UnitTypeInfo = UNIT_TYPES.find(u => u.id === selectedTypeId) || UNIT_TYPES[5];

  // Filter price rows based on selected filter
  const filteredPriceRows = selectedUnit.priceRows.filter(row => {
    if (floorFilter === 'royal') return row.floor.includes('11') || row.floor.includes('21') || row.floor.includes('31') || row.floor.includes('로얄') || row.floor.includes('PENT') || row.floor.includes('26F') || row.floor.includes('27F');
    if (floorFilter === 'standard') return row.floor.includes('6~10') || row.floor.includes('4~5');
    if (floorFilter === 'low') return row.floor.includes('1F') || row.floor.includes('2F') || row.floor.includes('3F');
    return true;
  });

  const formatPrice = (val: number) => {
    const eok = Math.floor(val / 100000000);
    const man = Math.floor((val % 100000000) / 10000);
    if (man === 0) return `${eok}억원`;
    return `${eok}억 ${man.toLocaleString()}만원`;
  };

  return (
    <section id="floorplans" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>전 타입 평면도 및 동·호수별 공급금액 완전 분석</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            평면안내 & 공급금액
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            전용 59㎡(24평형)부터 84㎡(34평형), 101㎡(41평형), 그리고 단 1세대 한정 테라스 펜트하우스까지 
            평면 특화사항과 층별 정밀 공급금액을 확인하세요.
          </p>
        </div>

        {/* 11 Unit Type Pills Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {UNIT_TYPES.map((unit) => {
              const isSelected = unit.id === selectedTypeId;
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedTypeId(unit.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400 font-extrabold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{unit.name}</span>
                  <span className={`text-[10px] ml-1 px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {unit.totalGenUnits}세대
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Unit Master Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          {/* Unit Top Summary Header Bar */}
          <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-xs font-black">
                  {selectedUnit.pyeong}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {selectedUnit.structure}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-bold border border-slate-700">
                  일반분양 {selectedUnit.totalGenUnits}세대
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {selectedUnit.name} <span className="text-sm font-normal text-slate-300">({selectedUnit.pyeong})</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                {selectedUnit.rooms}
              </p>
            </div>

            {/* Quick Pricing Badge */}
            <div className="flex flex-col md:items-end">
              <span className="text-xs text-amber-400 font-bold">계약조건 혜택</span>
              <span className="text-lg sm:text-xl font-extrabold text-amber-300">
                계약금 5% · 중도금 60% 무이자
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                1차 계약금 1,000만원 정액제
              </span>
            </div>
          </div>

          {/* Sub Tab Buttons: Plan vs Price vs Balcony/Option */}
          <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6">
            <button
              onClick={() => setActiveSubTab('price')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeSubTab === 'price'
                  ? 'border-amber-500 text-amber-800 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Coins className="w-4 h-4" />
              <span>층별 공급금액 및 납부일정</span>
            </button>
            <button
              onClick={() => setActiveSubTab('plan')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeSubTab === 'plan'
                  ? 'border-amber-500 text-amber-800 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              <span>평면 구조 & 공간 치수</span>
            </button>
            <button
              onClick={() => setActiveSubTab('option')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeSubTab === 'option'
                  ? 'border-amber-500 text-amber-800 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>발코니 확장비 & 옵션</span>
            </button>
          </div>

          {/* Sub Tab Content: 1. Price Table */}
          {activeSubTab === 'price' && (
            <div className="p-6 animate-fadeIn">
              {/* Filter Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-slate-700">층별 필터:</span>
                  <button
                    onClick={() => setFloorFilter('all')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      floorFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setFloorFilter('royal')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      floorFilter === 'royal' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    로얄층 (11층 이상)
                  </button>
                  <button
                    onClick={() => setFloorFilter('standard')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      floorFilter === 'standard' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    기준층 (4~10층)
                  </button>
                  <button
                    onClick={() => setFloorFilter('low')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      floorFilter === 'low' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    저층부 (1~3층)
                  </button>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  단위: 원 / VAT 포함 / 중도금 6회차 전액 무이자
                </div>
              </div>

              {/* Price Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-[11px]">
                      <th className="py-2.5 px-3">동/라인</th>
                      <th className="py-2.5 px-2.5 text-center">층구분</th>
                      <th className="py-2.5 px-2 text-center">세대수</th>
                      <th className="py-2.5 px-3 text-right font-black">공급금액 (총액)</th>
                      <th className="py-2.5 px-3 text-right">공급 평당가</th>
                      <th className="py-2.5 px-3 text-right text-amber-700">1차 계약금</th>
                      <th className="py-2.5 px-3 text-right">계약금 합계(5%)</th>
                      <th className="py-2.5 px-3 text-center text-blue-700 font-bold">중도금(60%)</th>
                      <th className="py-2.5 px-3 text-right">잔금(35%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPriceRows.map((row, idx) => (
                      <tr 
                        key={idx}
                        className={`hover:bg-amber-50/40 transition-colors ${
                          row.floor.includes('로얄') || row.floor.includes('21~') || row.floor.includes('31~')
                            ? 'bg-amber-50/20 font-medium'
                            : ''
                        }`}
                      >
                        <td className="py-3 px-3 font-semibold text-slate-900">{row.building}</td>
                        <td className="py-3 px-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                            row.floor.includes('로얄') || row.floor.includes('21~') || row.floor.includes('31~')
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {row.floor}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center font-bold text-slate-600">{row.count}세대</td>
                        <td className="py-3 px-3 text-right font-black text-slate-900 text-sm">
                          {formatPrice(row.totalPrice)}
                          <div className="text-[10px] text-slate-400 font-normal">{row.totalPrice.toLocaleString()}원</div>
                        </td>
                        <td className="py-3 px-3 text-right text-slate-600 font-mono">{row.pricePerPyeong}</td>
                        <td className="py-3 px-3 text-right text-amber-700 font-bold">
                          {row.contract1.toLocaleString()}원
                          <div className="text-[10px] text-amber-600">1천만원 정액제</div>
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-800">{row.contractSum.toLocaleString()}원</td>
                        <td className="py-3 px-3 text-center">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-black text-[11px]">
                            {row.middleLoan}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right text-slate-600 font-mono">{row.balance.toLocaleString()}원</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Special Terms Note */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <strong>금융 혜택 안내:</strong> 1차 계약금 1,000만원으로 계약 진행 가능하며, 중도금 60%는 전액 무이자 혜택이 적용되어 입주 시점까지 추가 이자 비용이 발생하지 않습니다.
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  로얄층 잔여호수 문의
                </button>
              </div>
            </div>
          )}

          {/* Sub Tab Content: 2. Floor Plan & Dimensions */}
          {activeSubTab === 'plan' && (
            <div className="p-6 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Schematic Plan Box */}
                <div className="lg:col-span-6 bg-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-900 text-white">
                        [확장기본형] 평면도
                      </span>
                      <span className="text-xs text-slate-500">단위: m (미터)</span>
                    </div>

                    {/* Architectural Wireframe Simulation Diagram */}
                    <div className="bg-white rounded-xl p-5 border border-slate-300 shadow-inner space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-slate-400 border-b border-dashed border-slate-200 pb-1 text-[11px]">
                        <span>맞통풍 판상형 설계</span>
                        <span>전용 {selectedUnit.exclusiveArea}㎡ / 공급 {selectedUnit.supplyArea}㎡</span>
                      </div>

                      {/* Room Layout Wireframe */}
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          침실 2<br/>
                          <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.dimensions.bed2 || '2.7 × 3.0m'}</span>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          침실 3<br/>
                          <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.dimensions.bed3 || '2.5 × 3.0m'}</span>
                        </div>
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          침실 1 (안방)<br/>
                          <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.dimensions.bed1 || '3.3 × 3.0m'}</span>
                        </div>
                      </div>

                      {/* Living & Kitchen Center */}
                      <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-bold">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                          주방 / 식당 (ㄷ자형 동선)<br/>
                          <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.dimensions.kitchen || '3.5 × 3.3m'}</span>
                        </div>
                        <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg">
                          와이드 거실 (Living Room)<br/>
                          <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.dimensions.livingRoom || '3.5 × 4.2m'}</span>
                        </div>
                      </div>

                      {/* Storage & Extra Space */}
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                          현관 신발장·창고
                        </div>
                        <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                          복도 대용량 팬트리
                        </div>
                        <div className="p-2 bg-purple-50 border border-purple-200 text-purple-900 rounded font-bold">
                          대형 드레스룸 ({selectedUnit.dimensions.dressRoom || '특화'})
                        </div>
                      </div>

                      {selectedUnit.terraceArea && (
                        <div className="p-2.5 bg-amber-100 border border-amber-300 text-amber-950 font-bold text-center rounded-lg">
                          ★ 프라이빗 야외 루프탑 테라스 (약 {selectedUnit.terraceArea}㎡ / {(selectedUnit.terraceArea * 0.3025).toFixed(1)}평)
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 text-center text-[11px] text-slate-500">
                    ※ 상기 평면은 소비자의 이해를 돕기 위한 구조 도해이며 실제 시공 시 다소 차이가 있을 수 있습니다.
                  </div>
                </div>

                {/* Right: Dimension Specifications & Features */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">면적 상세 제원</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-slate-500">전용면적</div>
                        <div className="font-black text-slate-900 text-sm mt-0.5">{selectedUnit.exclusiveArea}㎡</div>
                        <div className="text-[10px] text-slate-400">({selectedUnit.exclusivePyeong}평)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-slate-500">공급면적</div>
                        <div className="font-black text-slate-900 text-sm mt-0.5">{selectedUnit.supplyArea}㎡</div>
                        <div className="text-[10px] text-slate-400">({selectedUnit.supplyPyeong}평)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-slate-500">계약면적</div>
                        <div className="font-black text-slate-900 text-sm mt-0.5">{selectedUnit.contractArea}㎡</div>
                        <div className="text-[10px] text-slate-400">({selectedUnit.contractPyeong}평)</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="pt-2">
                    <h4 className="font-bold text-slate-900 text-base mb-2">평면 특화사항</h4>
                    <div className="space-y-2">
                      {selectedUnit.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compared to rival developments (더샵리오몬트 대비 우위 포인트) */}
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs">
                    <div className="font-bold text-blue-900 mb-1">인근 단지 대비 평면 특화 우위</div>
                    <ul className="space-y-1 text-blue-800 list-disc list-inside">
                      <li>트라비스 하늘채: 복도 팬트리 수납공간 기본 보유 및 베타룸급 대형 드레스룸 구성</li>
                      <li>타사 대비 실외기실 이전 배치로 안방 침실 소음 완벽 차단</li>
                      <li>“ㄷ”자형 와이드 대면형 주방으로 조리 동선 최적화</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub Tab Content: 3. Balcony & Options */}
          {activeSubTab === 'option' && (
            <div className="p-6 animate-fadeIn space-y-6">
              {/* Balcony Cost Table */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-3">
                  {selectedUnit.name} 발코니 확장 공사비
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="py-2.5 px-3">주택형</th>
                        <th className="py-2.5 px-3 text-right font-black">총 공급금액</th>
                        <th className="py-2.5 px-3 text-right">계약금 (10%)</th>
                        <th className="py-2.5 px-3 text-right">중도금 (10%)</th>
                        <th className="py-2.5 px-3 text-right">잔금 (80%)</th>
                        <th className="py-2.5 px-3 text-center">납부일정</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-3 font-bold text-slate-900">{selectedUnit.name}</td>
                        <td className="py-3 px-3 text-right font-black text-amber-700 text-sm">
                          {selectedUnit.balconyCost.total.toLocaleString()}원
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-700">
                          {selectedUnit.balconyCost.contract.toLocaleString()}원
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-700">
                          {selectedUnit.balconyCost.middle.toLocaleString()}원
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-700">
                          {selectedUnit.balconyCost.balance.toLocaleString()}원
                        </td>
                        <td className="py-3 px-3 text-center text-slate-500">
                          계약시 / 2026.12.10 / 입주지정일
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Major Custom Upgrades */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  선택 유상 옵션 품목 가이드
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-semibold text-slate-800">시스템 에어컨</div>
                    <div className="text-slate-500 mt-1">삼성/LG 무풍 고급형</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-semibold text-slate-800">엔지니어드스톤</div>
                    <div className="text-slate-500 mt-1">주방 상판 및 벽체 고급화</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-semibold text-slate-800">현관 3연동 중문</div>
                    <div className="text-slate-500 mt-1">소음 및 단열 특화 슬라이딩</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-semibold text-slate-800">빌트인 가전패키지</div>
                    <div className="text-slate-500 mt-1">냉장고, 식기세척기, 인덕션</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* VIP Inquiry Prompt Box */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              {selectedUnit.name} 전담 상담
            </div>
            <h4 className="text-lg font-black text-white mt-0.5">
              현재 {selectedUnit.name} 로얄층 및 층별 견적 상담이 필요하신가요?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {AGENT_INFO.name} ({AGENT_INFO.feature})에게 직접 문의하시면 실시간 잔여 동호수를 즉시 조회해 드립니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${AGENT_INFO.cleanPhone}`}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{AGENT_INFO.phone} 전화상담</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm border border-slate-700 transition-colors"
            >
              상담예약
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
