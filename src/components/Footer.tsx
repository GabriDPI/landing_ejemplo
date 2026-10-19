import React from 'react';
import { PoloLogo, XuntaBadge } from './PoloLogo.tsx';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isGl = lang === 'gl';

  return (
    <footer className="bg-[#040B15] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <PoloLogo variant="white" />
            <p className="text-slate-400 text-xs leading-relaxed">
              {isGl
                ? 'Espazo de formación práctica da Rede de Polos de Emprendemento e Apoio ao Emprego de Galicia en Vilanova de Arousa.'
                : 'Espacio de formación práctica de la Rede de Polos de Emprendemento e Apoio ao Emprego de Galicia en Vilanova de Arousa.'}
            </p>
            <div className="pt-1">
              <XuntaBadge isDark={true} />
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isGl ? 'Sede e Contacto' : 'Sede y Contacto'}
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#B8D7F5] shrink-0 mt-0.5" />
              <span>
                Pazo de Vista Real<br />
                Camiño de Boutrín nº 7<br />
                36629 Vilanova de Arousa (Pontevedra)
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#B8D7F5] shrink-0" />
              <span>polo.vilanova@polosemprendemento.gal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isGl ? 'Navegación' : 'Navegación'}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  {isGl ? 'Beneficios para o teu negocio' : 'Beneficios para tu negocio'}
                </a>
              </li>
              <li>
                <a href="#autoridad" className="hover:text-white transition-colors">
                  {isGl ? 'Aval institucional e métricas' : 'Aval institucional y métricas'}
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  {isGl ? 'Testemuños de emprendedores' : 'Testimonios de emprendedores'}
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  {isGl ? 'Pazo de Vista Real e Temario' : 'Pazo de Vista Real y Temario'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {isGl ? 'Preguntas Frecuentes' : 'Preguntas Frecuentes'}
                </a>
              </li>
            </ul>
          </div>

          {/* Registration CTA card */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="text-xs font-bold text-white">
              {isGl ? 'Próxima Edición Presencial' : 'Próxima Edición Presencial'}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              {isGl
                ? 'Prazas limitadas a 15 asistentes para garantir atención individualizada.'
                : 'Plazas limitadas a 15 asistentes para garantizar atención individualizada.'}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-3 rounded-md bg-[#3870AC] hover:bg-[#2B5E94] text-white font-bold text-xs transition-colors cursor-pointer border border-[#275A8E]"
            >
              {isGl ? 'Solicitar Praza Agora' : 'Solicitar Plaza Ahora'}
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Polo de Emprendemento de Vilanova de Arousa · Rede de Polos de Galicia.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Compatible con Cloudflare Pages y GitHub Pages
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
