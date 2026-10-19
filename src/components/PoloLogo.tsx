import React from 'react';

interface PoloLogoProps {
  variant?: 'white' | 'dark' | 'header';
  className?: string;
  showSubPolo?: boolean;
}

export const PoloLogo: React.FC<PoloLogoProps> = ({ 
  variant = 'white', 
  className = '',
  showSubPolo = true 
}) => {
  // If variant is dark, we can apply an invert filter or show the white logo on a Xunta blue container
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official PNG logo placed in /public by the user */}
      <div className={`relative flex items-center ${isDark ? 'bg-[#3870AC] p-2 rounded-lg' : ''}`}>
        <img
          src="/logo_poloemprendemento.png"
          alt="Rede de Polos de Emprendemento e Apoio ao Emprego - Xunta de Galicia"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </div>

      {showSubPolo && (
        <div className="flex flex-col border-l border-white/30 pl-3 leading-tight text-left">
          <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
            Polo de Vilanova
          </span>
          <span className="text-[10px] sm:text-[11px] text-sky-100 font-medium">
            Pazo de Vista Real
          </span>
        </div>
      )}
    </div>
  );
};

export const XuntaBadge: React.FC<{ isDark?: boolean; className?: string }> = ({ isDark = false, className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg border transition-all ${
      isDark 
        ? 'bg-[#15283C] border-slate-700 text-white' 
        : 'bg-white/90 border-[#3870AC]/20 shadow-xs text-slate-800'
    } ${className}`}>
      {/* Official Galicia Escudo */}
      <svg className="w-5 h-6 shrink-0" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3C2 3 12 1 12 1C12 1 22 3 22 3V15C22 21.5 12 27 12 27C12 27 2 21.5 2 15V3Z" fill="#3870AC" />
        <path d="M12 25C12 25 20 20 20 14.5V4.5C20 4.5 12 3 12 3C12 3 4 4.5 4 4.5V14.5C4 20 12 25 12 25Z" fill="#245180" />
        <path d="M10 9H14V13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13V9Z" fill="#F4B400" />
        <path d="M11.5 15V18.5H8.5V20H15.5V18.5H12.5V15" stroke="#F4B400" strokeWidth="1.2" />
        <circle cx="12" cy="7" r="1.2" fill="#FFFFFF" />
        <circle cx="8" cy="8" r="0.9" fill="#FFFFFF" />
        <circle cx="16" cy="8" r="0.9" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col text-[10px] leading-tight text-left">
        <span className={`font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-[#15283C]'}`}>
          Xunta de Galicia
        </span>
        <span className={`text-[9px] ${isDark ? 'text-sky-200' : 'text-slate-500'}`}>
          Consellería de Emprego
        </span>
      </div>
    </div>
  );
};
