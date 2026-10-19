import React from 'react';
import { Star, Quote, CheckCircle, MapPin } from 'lucide-react';

interface SocialProofSectionProps {
  lang: 'es' | 'gl';
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ lang }) => {
  const content = {
    es: {
      preTitle: 'CASOS DE ÉXITO EN O SALNÉS',
      title: 'Lo que Opinan Quienes Ya se Formaron en el Polo de Vilanova',
      subtitle: 'Emprendedores y profesionales locales que ya han multiplicado su productividad con Inteligencia Artificial.',
      testimonials: [
        {
          id: 'test-1',
          name: 'María Gómez Souto',
          role: 'Directora en Adega & Enoturismo Arousa',
          location: 'Vilanova de Arousa / Cambados',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
          rating: 5,
          headline: '«Ahorramos más de 10 horas a la semana desde la primera sesión»',
          quote: 'Llegué a la formación con respeto a no entender nada y salí con un asistente de IA configurado para contestar a turistas en inglés, alemán y castellano, además de redactar las fichas técnicas de nuestros vinos en segundos. El entorno del Pazo de Vista Real es inspirador y las explicaciones fueron 100% al grano.',
          metric: 'Ahorro: 10h/semana',
        },
        {
          id: 'test-2',
          name: 'Carlos Rey Rial',
          role: 'Gerente en Soluciones Técnicas do Salnés',
          location: 'Vilanova de Arousa',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
          rating: 5,
          headline: '«Redacto presupuestos y partes de trabajo el triple de rápido»',
          quote: 'Pensaba que la inteligencia artificial era solo para programadores de Silicon Valley. En este curso aprendí a crear presupuestos detallados en menos de 3 minutos, ordenar partes de trabajo y preparar emails comerciales. Ha sido una de las mejores decisiones para mi empresa en 2025.',
          metric: 'Presupuestos en 3 min',
        },
      ],
      socialSummary: 'El 98% de los asistentes califica el curso como «Excelente y Directamente Aplicable».',
    },
    gl: {
      preTitle: 'CASOS DE ÉXITO NO SALNÉS',
      title: 'O que Opinan Quen Xa se Formou no Polo de Vilanova',
      subtitle: 'Emprendedores e profesionais locais que xa multiplicaron a súa produtividade con Intelixencia Artificial.',
      testimonials: [
        {
          id: 'test-1',
          name: 'María Gómez Souto',
          role: 'Directora en Adega & Enoturismo Arousa',
          location: 'Vilanova de Arousa / Cambados',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
          rating: 5,
          headline: '«Aforramos máis de 10 horas á semana dende a primeira sesión»',
          quote: 'Cheguei á formación con respecto a non entender nada e saín cun asistente de IA configurado para contestar a clientes en varios idiomas e redactar as fichas dos nosos viños en segundos. O marco do Pazo de Vista Real é inmellorable e o trato do formador, moi achegado.',
          metric: 'Aforro: 10h/semana',
        },
        {
          id: 'test-2',
          name: 'Carlos Rey Rial',
          role: 'Xerente en Solucións Técnicas do Salnés',
          location: 'Vilanova de Arousa',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
          rating: 5,
          headline: '«Redacto orzamentos e partes de traballo o triplo de rápido»',
          quote: 'Pensaba que a intelixencia artificial era só para programadores. Neste curso aprendín a xerar orzamentos completos en menos de 3 minutos e organizar as quendas de traballo. Unha formación imprescindible para calquera autónomo ou autónoma.',
          metric: 'Orzamentos en 3 min',
        },
      ],
      socialSummary: 'O 98% dos asistentes cualifica o curso como «Excelente e Directamente Aplicable».',
    },
  }[lang];

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-[#F4F7FA] relative">
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

        {/* Dos testimonios con foto circular, nombre y opinión del cliente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {content.testimonials.map((test) => (
            <div
              key={test.id}
              className="relative flex flex-col justify-between p-8 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
            >
              {/* Quote watermark icon at bottom right */}
              <div className="absolute bottom-6 right-6 text-slate-100 pointer-events-none">
                <Quote className="w-14 h-14 stroke-1 fill-slate-50 opacity-40" />
              </div>

              <div>
                {/* 5-star rating and metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="relative z-10 text-[11px] font-extrabold text-[#3870AC] bg-[#EBF2F9] px-2.5 py-1 rounded border border-[#3870AC]/20 shadow-2xs">
                    {test.metric}
                  </span>
                </div>

                {/* Headline */}
                <h4 className="text-lg font-bold text-[#15283C] mb-3 leading-snug">
                  {test.headline}
                </h4>

                {/* Customer opinion */}
                <p className="text-sm text-slate-600 leading-relaxed italic font-normal">
                  "{test.quote}"
                </p>
              </div>

              {/* Cliente info: foto (circular), nombre y cargo */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                {/* Foto circular */}
                <div className="relative shrink-0">
                  <img
                    src={test.photo}
                    alt={test.name}
                    className="w-16 h-16 rounded-full object-cover ring-3 ring-[#3870AC]/20 shadow-2xs"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#3870AC] rounded-full border-2 border-white flex items-center justify-center text-white">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                </div>

                {/* Nombre y detalles */}
                <div>
                  <h5 className="text-base font-extrabold text-[#15283C]">
                    {test.name}
                  </h5>
                  <p className="text-xs font-semibold text-slate-700">
                    {test.role}
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#3870AC]" /> {test.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5 text-[#3870AC] font-bold">
            <CheckCircle className="w-4 h-4" />
            <span>Alumnos 100% satisfechos</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>{content.socialSummary}</span>
        </div>

      </div>
    </section>
  );
};
