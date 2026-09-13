import React, { useState } from 'react';
import { X, Award, Phone, Calendar, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { AGENT_INFO, UNIT_TYPES } from '../data/apartmentData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('84A');
  const [preferredDate, setPreferredDate] = useState('');
  const [memo, setMemo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMemo('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border-2 border-amber-400/60 shadow-2xl p-6 sm:p-8 text-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>{AGENT_INFO.feature} 직통 상담</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                로얄층 & VIP 맞춤 방문예약
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {AGENT_INFO.name} ({AGENT_INFO.phone})이 빠르고 친절하게 안내해 드립니다.
              </p>
            </div>

            {/* Direct Instant Call Banner */}
            <div className="mb-5 p-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-slate-950" />
                <div>
                  <div className="text-[11px] font-bold">기다림 없는 24시간 전화상담</div>
                  <div className="text-base font-black">{AGENT_INFO.phone}</div>
                </div>
              </div>
              <a
                href={`tel:${AGENT_INFO.cleanPhone}`}
                className="px-3 py-1.5 rounded-lg bg-slate-950 text-amber-400 font-extrabold text-xs hover:bg-slate-900 transition-colors"
              >
                지금 전화연결
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1">성함 / 연락처 *</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="고객명"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="휴대폰 번호"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">관심 주택형</label>
                  <select
                    value={selectedUnit}
                    onChange={(e) => setSelectedUnit(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    {UNIT_TYPES.map(u => (
                      <option key={u.id} value={u.id}>
                        {u.name} ({u.pyeong})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">희망 방문일시</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="예: 이번 주말 오후"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">상담 희망 내용 / 문의사항</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="로얄층 잔여 호수, 분양가, 자금 계획 등 자유롭게 남겨주세요."
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-transform"
                >
                  로얄층 VIP 방문예약 접수하기
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                ※ 입력하신 소중한 정보는 분양 안내 및 방문 예약 확인 목적 외에 사용되지 않습니다.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">
              방문 예약이 접수되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              <strong>{name}</strong> 고객님, {selectedUnit}형 로얄층 잔여 현황 확인 후 <strong>{AGENT_INFO.name}</strong>이 기재해주신 번호로 신속히 연락드리겠습니다.
            </p>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-left text-xs text-slate-300 space-y-1 max-w-xs mx-auto">
              <div>• 담당자: {AGENT_INFO.name} ({AGENT_INFO.feature})</div>
              <div>• 연락처: {AGENT_INFO.phone}</div>
              <div>• 신청타입: {selectedUnit}형</div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <a
                href={`tel:${AGENT_INFO.cleanPhone}`}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                직통전화 걸기 ({AGENT_INFO.phone})
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
