import React from 'react';
import { Award, Building2, CheckCircle2 } from 'lucide-react';
import { PoloLogo, XuntaBadge } from './PoloLogo.tsx';

interface AuthoritySectionProps {
  lang: 'es' | 'gl';
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({ lang }) => {
  const content = {
    es: {
      badge: 'AVAL INSTITUCIONAL · REDE DE POLOS DE GALICIA',
      quote: '«Un programa práctico diseñado para que autónomos, pymes y emprendedores de O Salnés y Barbanza apliquen la IA real sin tecnicismos y con resultados tangibles.»',
      metrics: [
        { value: '+340', label: 'Proyectos Acompañados', sub: 'en el Polo de Vilanova' },
        { value: '27', label: 'Municipios Cubiertos', sub: 'O Salnés, Barbanza y Pontevedra' },
        { value: '100%', label: 'Práctica y Aplicada', sub: 'directo a tu negocio' },
        { value: '15', label: 'Alumnos por Grupo', sub: 'atención garantizada' },
      ],
      logosTitle: 'Entidades y Redes Oficiales:',
      features: [
        'Instalaciones equipadas en el Pazo de Vista Real',
        'Técnicos especializados de la Rede de Polos',
        'Diploma acreditativo y repositorio de prompts',
        'Espacio de coworking y asesoramiento posterior',
      ],
    },
    gl: {
      badge: 'AVAL INSTITUCIONAL · REDE DE POLOS DE GALICIA',
      quote: '«Un programa práctico deseñado para que autónomos, pemes e emprendedores do Salnés e Barbanza apliquen a IA real sen tecnicismos e con resultados intanxibles e medibles.»',
      metrics: [
        { value: '+340', label: 'Proxectos Acompañados', sub: 'no Polo de Vilanova' },
        { value: '27', label: 'Municipios Atendidos', sub: 'O Salnés, Barbanza e Pontevedra' },
        { value: '100%', label: 'Práctica e Aplicada', sub: 'directo ao teu negocio' },
        { value: '15', label: 'Alumnos por Grupo', sub: 'atención garantida' },
      ],
      logosTitle: 'Entidades e Redes Oficiais:',
      features: [
        'Instalacións equipadas no Pazo de Vista Real',
        'Técnicos especializados da Rede de Polos',
        'Diploma acreditativo e repositorio de prompts',
        'Espazo de coworking e asesoramento posterior',
      ],
    },
  }[lang];

  return (
    <section id="autoridad" className="relative bg-[#3870AC] text-white py-16 sm:py-20 overflow-hidden border-y border-[#2B5E94]">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-black tracking-widest uppercase bg-[#15283C]/40 text-white border border-white/20">
            <Award className="w-3.5 h-3.5 text-[#B8D7F5]" /> {content.badge}
          </span>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-4 leading-snug">
            {content.quote}
          </h3>
        </div>

        {/* Métricas destacadas en bloque horizontal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-white/20 my-8">
          {content.metrics.map((metric, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#B8D7F5] tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-sky-100 mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Logos institucionales con el logo de /public */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-bold text-sky-100 uppercase tracking-wider text-center md:text-left">
            {content.logosTitle}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Rede de Polos Official Logo */}
            <div className="bg-[#15283C]/50 backdrop-blur-xs px-4 py-2.5 rounded-lg border border-white/20 flex items-center">
              <PoloLogo variant="white" />
            </div>

            {/* Xunta de Galicia Badge */}
            <div className="bg-[#15283C]/50 backdrop-blur-xs px-4 py-2 rounded-lg border border-white/20 flex items-center">
              <XuntaBadge isDark={true} />
            </div>

            {/* Pazo de Vista Real Tag */}
            <div className="bg-[#15283C]/50 backdrop-blur-xs px-3.5 py-2.5 rounded-lg border border-white/20 flex items-center gap-2 text-xs font-semibold text-slate-100">
              <Building2 className="w-4 h-4 text-[#B8D7F5]" />
              <span>Pazo de Vista Real · Vilanova</span>
            </div>
          </div>
        </div>

        {/* Confidence highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15 text-xs text-slate-100">
          {content.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8D7F5] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
