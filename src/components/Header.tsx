import React, { useState, useEffect } from 'react';
import { PoloLogo } from './PoloLogo.tsx';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
  setLang: (lang: 'es' | 'gl') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    es: {
      urgency: 'Polo de Vilanova de Arousa · Pazo de Vista Real · Próxima edición de Inteligencia Artificial',
      cta: 'Reservar Plaza',
    },
    gl: {
      urgency: 'Polo de Vilanova de Arousa · Pazo de Vista Real · Próxima edición de Intelixencia Artificial',
      cta: 'Reservar Praza',
    },
  }[lang];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar: Official dark navy strip like polosemprendemento.gal (#15283C) */}
      <div className="bg-[#15283C] text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="text-slate-300 font-medium truncate">
              {content.urgency}
            </span>
          </div>

          {/* Language Switcher: Galego | Castellano as seen in image 2 */}
          <div className="flex items-center gap-2 shrink-0 text-slate-300 text-[11px]">
            <Globe className="w-3.5 h-3.5 text-sky-300" />
            <button
              onClick={() => setLang('gl')}
              className={`hover:text-white transition-colors cursor-pointer ${
                lang === 'gl' ? 'font-bold text-white underline decoration-sky-400 decoration-2' : 'text-slate-400'
              }`}
            >
              Galego
            </button>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setLang('es')}
              className={`hover:text-white transition-colors cursor-pointer ${
                lang === 'es' ? 'font-bold text-white underline decoration-sky-400 decoration-2' : 'text-slate-400'
              }`}
            >
              Castellano
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav: Official Xunta Blue (#3870AC) - STRICTLY NO TEXT LINKS, ONLY RESERVAR */}
      <nav
        className={`bg-[#3870AC] transition-all duration-200 border-b border-[#2C5F94] ${
          isScrolled ? 'py-2.5 shadow-lg' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Official Logo from /public/logo_poloemprendemento.png */}
          <a href="#" className="flex items-center group focus:outline-hidden">
            <PoloLogo variant="header" />
          </a>

          {/* Right: STRICTLY ONLY THE "RESERVAR PLAZA" CTA BUTTON (NO TEXT LINKS IN NAV) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-md bg-[#B8D7F5] hover:bg-[#a4cdf2] text-[#13273D] text-xs sm:text-sm font-extrabold shadow-sm active:scale-98 transition-all cursor-pointer border border-[#8FBDE8]"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#13273D]" />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};
