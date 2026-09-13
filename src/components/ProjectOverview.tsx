import React from 'react';
import { Building, MapPin, Maximize2, Users, Car, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { PROJECT_OVERVIEW } from '../data/apartmentData';

export const ProjectOverview: React.FC = () => {
  return (
    <section id="overview" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>24P · 서부산의 新주거중심에서 브랜드 타운의 완성작</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {PROJECT_OVERVIEW.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            부산광역시 사상구 엄궁1구역 재개발정비사업을 통해 공급되는 총 1,670세대 랜드마크 대단지
          </p>
        </div>

        {/* 2-Column Info Grid: Overview Specs & Unit Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Key Specifications (Table Cards) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Building className="w-5 h-5 text-amber-600" />
                <span>건축 및 사업 개요 상세</span>
              </h3>

              <dl className="divide-y divide-slate-100 text-sm">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">사업명</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.projectName}</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 font-medium shrink-0">주소지</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.location}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">대지면적</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.siteArea}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">연면적</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.totalFloorArea}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">건폐율 / 용적률</dt>
                  <dd className="font-semibold text-amber-600 text-right">{PROJECT_OVERVIEW.buildingCoverageRate} / {PROJECT_OVERVIEW.floorAreaRatio}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">건축규모</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.scale}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">공급세대</dt>
                  <dd className="font-semibold text-blue-600 text-right">{PROJECT_OVERVIEW.totalUnits}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">주차대수</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.parkingCapacity}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-500 font-medium">입주예정일</dt>
                  <dd className="font-semibold text-slate-900 text-right">{PROJECT_OVERVIEW.moveInDate}</dd>
                </div>
              </dl>
            </div>

            {/* Quick highlight points */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 text-amber-900">
              <div className="flex items-center gap-2 font-bold text-sm mb-2 text-amber-950">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>24P 핵심 체크 포인트</span>
              </div>
              <ul className="text-xs space-y-1.5 text-amber-800">
                <li>• 총 1,670세대 중 일반분양 1,061세대로 로얄층 및 좋은 동호수 선택의 폭이 넓음</li>
                <li>• 세대당 1.5대의 쾌적한 지하 주차공간 (사상권 신축 대비 최고 수준)</li>
                <li>• 16.39%의 낮은 건폐율로 단지 내 쾌적한 바람길 및 넓은 동간 인동거리 확보</li>
              </ul>
            </div>
          </div>

          {/* Right: Supply Breakdown Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-blue-600" />
                  <span>주택형별 일반분양 및 면적 안내</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">일반분양 총 1,061세대</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-2.5 px-3">타입</th>
                      <th className="py-2.5 px-3 text-center">일반분양</th>
                      <th className="py-2.5 px-3 text-center">비율</th>
                      <th className="py-2.5 px-3 text-right">전용면적 (㎡/평)</th>
                      <th className="py-2.5 px-3 text-right">공급면적 (㎡/평)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {PROJECT_OVERVIEW.unitBreakdown.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`hover:bg-slate-50 transition-colors ${
                          row.type.startsWith('84') ? 'bg-blue-50/40 font-medium' : ''
                        }`}
                      >
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          {row.type}㎡
                          {row.type.startsWith('84') && (
                            <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">주력</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-blue-600">{row.generalUnits}세대</td>
                        <td className="py-2.5 px-3 text-center text-slate-500">{row.ratio}</td>
                        <td className="py-2.5 px-3 text-right text-slate-700">
                          {row.exclusiveM2.toFixed(2)}㎡ <span className="text-slate-400">({row.exclusivePy}P)</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-slate-700">
                          {row.supplyM2.toFixed(2)}㎡ <span className="text-slate-400">({row.supplyPy}P)</span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-slate-100/80 font-bold text-slate-900 border-t-2 border-slate-300">
                      <td className="py-3 px-3">소계</td>
                      <td className="py-3 px-3 text-center text-blue-700">1,061세대</td>
                      <td className="py-3 px-3 text-center">100.0%</td>
                      <td className="py-3 px-3 text-right" colSpan={2}>
                        총 1,670세대 중 일반분양 공급
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
