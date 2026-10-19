import React from 'react';
import { Bot, Sparkles, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

interface BenefitsSectionProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenBooking, lang }) => {
  const content = {
    es: {
      preTitle: 'TRANSFORMA TU FORMA DE TRABAJAR',
      title: 'Qué Aprenderás a Hacer desde el Primer Día',
      subtitle: 'Tres capacidades directas que cambiarán la rentabilidad de tu negocio o actividad profesional.',
      columns: [
        {
          id: 'col-1',
          icon: Bot,
          title: 'Automatización y Ahorro Masivo de Tiempo',
          description: 'Aprende a delegar en la IA la redacción de correos, facturación, actas, resúmenes de llamadas, presupuestos y tareas administrativas rutinarias. Recupera hasta 15 horas a la semana para centrarte en vender y atender a tus clientes.',
          badge: 'Ahorro: -70% tiempo administrativo',
          items: [
            'Generación de presupuestos inmediatos',
            'Respuestas bilingües automatizadas a clientes',
            'Gestión documental y resúmenes sin esfuerzo',
          ],
        },
        {
          id: 'col-2',
          icon: Sparkles,
          title: 'Marketing de Alto Impacto y Creación de Contenido',
          description: 'Crea campañas publicitarias, posts para redes sociales, textos persuasivos para tu web y catálogos visuales en minutos. Vende con el impacto de una gran agencia sin asumir sus elevados costes mensuales.',
          badge: 'Impacto comercial inmediato',
          items: [
            'Copies persuasivos que conectan con tu cliente',
            'Generación de imágenes y creatividades',
            'Estrategias de contenido para O Salnés y Galicia',
          ],
        },
        {
          id: 'col-3',
          icon: BarChart3,
          title: 'Toma de Decisiones y Análisis con IA',
          description: 'Sube tus hojas de Excel, listados de ventas o facturas y deja que la IA analice tus números en segundos. Detecta clientes más rentables, estacionalidad y productos estrella para tomar decisiones con certeza.',
          badge: 'Visión estratégica en segundos',
          items: [
            'Análisis automático de datos y hojas de cálculo',
            'Identificación de oportunidades de venta oculta',
            'Informes claros sin necesidad de ser analista',
          ],
        },
      ],
      ctaText: 'Quiero Asistir al Curso Presencial en Vilanova',
      ctaSub: '⚡ Plazas estrictamente limitadas a 15 alumnos · Pazo de Vista Real',
    },
    gl: {
      preTitle: 'TRANSFORMA A TÚA FORMA DE TRABALLAR',
      title: 'Que Aprenderás a Facer dende o Primeiro Día',
      subtitle: 'Tres capacidades directas que mudarán a rendibilidade do teu negocio ou actividade profesional.',
      columns: [
        {
          id: 'col-1',
          icon: Bot,
          title: 'Automatización e Aforro Masivo de Tempo',
          description: 'Aprende a delegar na IA a redacción de correos, facturación, actas, resumos de xuntanzas, orzamentos e tarefas administrativas rutineiras. Recupera até 15 horas á semana para centrarte en vender.',
          badge: 'Aforro: -70% tempo administrativo',
          items: [
            'Xeración de orzamentos inmediatos',
            'Respostas bilingües automatizadas a clientes',
            'Xestión documental e resumos sen esforzo',
          ],
        },
        {
          id: 'col-2',
          icon: Sparkles,
          title: 'Márketing de Alto Impacto e Creación de Contido',
          description: 'Crea campañas publicitarias, publicacións para redes, textos persuasivos para a túa web e catálogos visuais en minutos. Vende co impacto dunha gran axencia sen asumir custos desmesurados.',
          badge: 'Impacto comercial inmediato',
          items: [
            'Copies persuasivos que conectan co teu cliente',
            'Xeración de imaxes e creatividades visuais',
            'Estratexias de contido para o Salnés e Galicia',
          ],
        },
        {
          id: 'col-3',
          icon: BarChart3,
          title: 'Toma de Decisións e Análise con IA',
          description: 'Sube as túas follas de cálculo, listaxes de vendas ou facturas e deixa que a IA analice os teus números en segundos. Detecta clientes máis rendibles e novas oportunidades de negocio.',
          badge: 'Visión estratéxica en segundos',
          items: [
            'Análise automática de datos e follas Excel',
            'Identificación de oportunidades de venda oculta',
            'Informes claros sen ser especialista técnico',
          ],
        },
      ],
      ctaText: 'Quero Asistir ao Curso Presencial en Vilanova',
      ctaSub: '⚡ Prazas estritamente limitadas a 15 alumnos · Pazo de Vista Real',
    },
  }[lang];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest uppercase text-[#3870AC] bg-[#EBF2F9] px-3.5 py-1.5 rounded-full border border-[#3870AC]/20">
            {content.preTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#15283C] mt-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
            {content.subtitle}
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {content.columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.id}
                className="relative flex flex-col p-8 rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#3870AC]/40 hover:-translate-y-1 transition-all group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-lg bg-[#3870AC] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform mb-6">
                  <Icon className="w-7 h-7 text-[#B8D7F5]" />
                </div>

                {/* Badge */}
                <div className="inline-block text-[11px] font-bold text-[#3870AC] uppercase tracking-wider mb-2">
                  {col.badge}
                </div>

                {/* Título de la columna */}
                <h3 className="text-xl font-bold text-[#15283C] group-hover:text-[#3870AC] transition-colors leading-snug">
                  {col.title}
                </h3>

                {/* Breve descripción */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1 font-normal">
                  {col.description}
                </p>

                {/* Bullet points */}
                <ul className="mt-6 pt-5 border-t border-slate-200 space-y-2.5">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#3870AC] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Debajo: Botón CTA centrado */}
        <div className="text-center pt-2 flex flex-col items-center">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#3870AC] hover:bg-[#2B5E94] text-white text-base sm:text-lg font-black shadow-md shadow-[#3870AC]/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer border border-[#275787]"
          >
            <span>{content.ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs text-slate-500 mt-3 font-medium">
            {content.ctaSub}
          </span>
        </div>

      </div>
    </section>
  );
};
