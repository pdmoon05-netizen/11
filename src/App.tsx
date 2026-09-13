import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { Premium7Section } from './components/Premium7Section';
import { ProjectOverview } from './components/ProjectOverview';
import { LocationSection } from './components/LocationSection';
import { SitePlanSection } from './components/SitePlanSection';
import { BuildingUnitTable } from './components/BuildingUnitTable';
import { LandscapeSection } from './components/LandscapeSection';
import { CommunitySection } from './components/CommunitySection';
import { SkyCommunitySection } from './components/SkyCommunitySection';
import { SystemSection } from './components/SystemSection';
import { FloorPlanPriceSection } from './components/FloorPlanPriceSection';
import { QuickFloatBar } from './components/QuickFloatBar';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* 1P Hero Section: Apartment Panorama with Manager Kim Se-bi's info centered */}
      <HeroSection onOpenConsultation={handleOpenConsultation} />

      {/* Navigation Tab Bar for quick jumping */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections requested by user */}
      <main>
        {/* 23P PREMIUM 7 */}
        <Premium7Section />

        {/* 24P 사업개요 */}
        <ProjectOverview />

        {/* 27P 위치도 (교통, 학군, 생활편의 인프라) */}
        <LocationSection />

        {/* 31P 단지배치도 */}
        <SitePlanSection />

        {/* 48P 동호수표 */}
        <BuildingUnitTable onOpenConsultation={handleOpenConsultation} />

        {/* 50P 조경 */}
        <LandscapeSection />

        {/* 56P 커뮤니티 센터 */}
        <CommunitySection />

        {/* 60P 스카이 커뮤니티 */}
        <SkyCommunitySection />

        {/* 65P 시스템 */}
        <SystemSection />

        {/* 평면안내 및 공급금액 (66~98P) */}
        <FloorPlanPriceSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Contact & Reservation Bar */}
      <QuickFloatBar onOpenConsultation={handleOpenConsultation} />

      {/* VIP Consultation & Visit Reservation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
}
