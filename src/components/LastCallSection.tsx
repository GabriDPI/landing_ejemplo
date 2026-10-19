import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { PoloLogo } from './PoloLogo.tsx';

interface LastCallSectionProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const LastCallSection: React.FC<LastCallSectionProps> = ({ onOpenBooking, lang }) => {
  const content = {
    es: {
      badge: 'ÚLTIMA LLAMADA · CONVOCATORIA EN VILANOVA DE AROUSA',
      title: 'El Futuro no Espera: Transforma tu Negocio con Inteligencia Artificial en el Polo de Vilanova',
      subtitle: 'Solo 15 plazas disponibles por estricto orden de inscripción para garantizar una experiencia formativa 100% práctica y adaptada a cada empresa. ¡No dejes que tu competencia dé el salto antes que tú!',
      ctaText: '¡Asegurar mi Plaza en la Próxima Edición!',
      highlights: [
        'Instalaciones equipadas en el Pazo de Vista Real',
        'Casos reales y prompts listos para tu negocio',
        'Asesoramiento continuo y networking empresarial',
      ],
      notice: 'Inscripción directa online · Confirmación inmediata en pantalla · Plazas limitadas',
    },
    gl: {
      badge: 'ÚLTIMA CHAMADA · CONVOCATORIA EN VILANOVA DE AROUSA',
      title: 'O Futuro non Agarda: Transforma o teu Negocio con Intelixencia Artificial no Polo de Vilanova',
      subtitle: 'Só 15 prazas dispoñibles por rigorosa orde de inscrición para garantir unha experiencia formativa 100% práctica e adaptada a cada empresa. ¡Non deixes que a túa competencia dea o salto antes ca ti!',
      ctaText: '¡Asegurar a miña Praza na Próxima Edición!',
      highlights: [
        'Instalacións equipadas no Pazo de Vista Real',
        'Casos reais e prompts listos para o teu negocio',
        'Asesoramento continuo e networking empresarial',
      ],
      notice: 'Inscrición directa online · Confirmación inmediata en pantalla · Prazas limitadas',
    },
  }[lang];

  return (
    <section className="relative bg-[#15283C] text-white py-20 sm:py-28 overflow-hidden border-t border-[#2C5F94]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3870AC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#3870AC]/40 border border-sky-300/30 text-[#B8D7F5] text-xs font-black tracking-widest uppercase mb-6 shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#B8D7F5]" />
          <span>{content.badge}</span>
        </div>

        {/* Título que refuerce la oferta */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {content.title}
        </h2>

        {/* Subtítulo persuasivo */}
        <p className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed max-w-2xl mx-auto font-normal">
          {content.subtitle}
        </p>

        {/* 3 bullet highlights */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-8 text-xs sm:text-sm text-slate-200">
          {content.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-md backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-[#B8D7F5]" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Botón CTA Final llamativo estilo Xunta / Image 2 */}
        <div className="pt-2 flex flex-col items-center">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-md bg-[#B8D7F5] hover:bg-[#a1cdf7] text-[#13273D] text-lg sm:text-xl font-black tracking-wide shadow-xl shadow-sky-950/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer border border-white/40"
          >
            <span>{content.ctaText}</span>
            <ArrowRight className="w-6 h-6 text-[#13273D] group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-xs text-slate-400 mt-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{content.notice}</span>
          </p>
        </div>

        {/* Brand stamp footer inside last call */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <PoloLogo variant="white" />
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-4 h-4 text-[#B8D7F5]" />
            <span>Pazo de Vista Real · Camiño de Boutrín 7, 36629 Vilanova de Arousa</span>
          </div>
        </div>

      </div>
    </section>
  );
};
