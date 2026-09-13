import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Grid3X3, 
  Sparkles, 
  Trees, 
  Users, 
  Eye, 
  Cpu, 
  Home, 
  Phone
} from 'lucide-react';
import { AGENT_INFO } from '../data/apartmentData';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const navItems = [
  { id: 'premium7', label: 'PREMIUM 7', icon: Sparkles },
  { id: 'overview', label: '사업개요', icon: Building2 },
  { id: 'location', label: '위치도·입지', icon: MapPin },
  { id: 'siteplan', label: '단지배치도', icon: Layers },
  { id: 'elevation', label: '동호수표', icon: Grid3X3 },
  { id: 'landscape', label: '단지조경', icon: Trees },
  { id: 'community', label: '커뮤니티', icon: Users },
  { id: 'skycommunity', label: '스카이커뮤니티', icon: Eye },
  { id: 'system', label: '특화시스템', icon: Cpu },
  { id: 'floorplans', label: '평면 및 공급금액', icon: Home, highlight: true },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="nav-bar" 
      className={`z-40 transition-all duration-200 ${
        isSticky 
          ? 'sticky top-0 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/80 py-2' 
          : 'bg-slate-900 border-y border-slate-800 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Minimal in Sticky */}
          {isSticky && (
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <span className="font-extrabold text-amber-400 text-sm tracking-tight">트라비스 하늘채</span>
              <span className="text-xs text-slate-400">VIP {AGENT_INFO.name}</span>
            </div>
          )}

          {/* Horizontal scrollable navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full lg:w-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-150 shrink-0 ${
                    item.highlight && !isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      : isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Direct call button in bar */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={`tel:${AGENT_INFO.cleanPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{AGENT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
