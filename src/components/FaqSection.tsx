import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const content = {
    es: {
      tag: 'DUDAS FRECUENTES',
      title: 'Resolvemos Todas tus Preguntas',
      subtitle: 'Todo lo que necesitas saber antes de reservar tu plaza en el Polo de Vilanova.',
      faqs: [
        {
          q: '¿Necesito conocimientos previos de programación o informática?',
          a: 'No, en absoluto. La formación está diseñada desde cero para personas reales con negocios reales: hostelería, bodegas, comercios, autónomos, servicios y consultoría. Te enseñamos a usar herramientas cotidianas en lenguaje natural sin tocar una sola línea de código.',
        },
        {
          q: '¿Quién puede participar en estos cursos en el Polo de Vilanova?',
          a: 'Cualquier autónomo, profesional independiente, emprendedor o trabajador de microempresas y pymes ubicado en Vilanova de Arousa, O Salnés, Barbanza, Pontevedra o comarcas próximas. La prioridad es el impacto positivo en el tejido empresarial local.',
        },
        {
          q: '¿Tengo que llevar mi propio ordenador portátil?',
          a: 'El aula del Pazo de Vista Real cuenta con equipos informáticos preparados con conexión a internet de alta velocidad. No obstante, te recomendamos traer tu propio portátil si prefieres dejar las herramientas y cuentas ya configuradas para tu trabajo habitual.',
        },
        {
          q: '¿Se entrega algún tipo de certificado o diploma al terminar?',
          a: 'Sí. Todos los participantes que completen la formación presencial recibirán el Certificado Oficial de Asistencia emitido con el aval de la Rede de Polos de Emprendemento de Galicia, además de acceso permanente al repositorio de prompts y plantillas de automatización.',
        },
        {
          q: '¿Por qué las plazas están limitadas a solo 15 alumnos?',
          a: 'Para asegurar que el formador pueda atenderte a ti y a las particularidades de tu negocio de forma individualizada. No es una charla teórica multitudinaria: es un taller de trabajo 100% práctico donde sales con soluciones aplicadas.',
        },
        {
          q: '¿Dónde está exactamente el Polo y cómo se accede?',
          a: 'El Polo de Emprendemento de Vilanova está ubicado en el emblemático Pazo de Vista Real (Camiño de Boutrín nº 7, 36629 Vilanova de Arousa). Dispone de amplio aparcamiento gratuito para todos los asistentes y acceso directo desde las vías principales de O Salnés.',
        },
      ],
      ctaText: '¿Tienes otra pregunta? Reserva tu plaza y consúltanos directamente',
    },
    gl: {
      tag: 'DÚBIDAS FRECUENTES',
      title: 'Resolvemos Todas as túas Preguntas',
      subtitle: 'Todo o que cómpre saber antes de reservar a túa praza no Polo de Vilanova.',
      faqs: [
        {
          q: '¿Preciso coñecementos previos de programación ou informática?',
          a: 'Non, en absoluto. A formación está concibida dende cero para persoas reais con negocios reais: hostalaría, adegas, comercios, autónomos e servizos. Amosámosche como empregar ferramentas en linguaxe natural sen escribir código.',
        },
        {
          q: '¿Quen pode participar nestes cursos no Polo de Vilanova?',
          a: 'Calquera autónomo, autónoma, profesional independente, persoa emprendedora ou traballadora de pemes do Salnés, Barbanza, Pontevedra e comarcas achegadas. A prioridade é dinamizar o tecido empresarial.',
        },
        {
          q: '¿Teño que levar o meu propio ordenador portátil?',
          a: 'A aula do Pazo de Vista Real dispón de postos informáticos con fibra óptica de alta velocidade. Non obstante, recomendamos levar o teu portátil se prefires deixar as contas e ferramentas xa configuradas no teu equipo de traballo.',
        },
        {
          q: '¿Entrégase algún diploma ou certificado ao rematar?',
          a: 'Si. Todos os participantes recibirán o Certificado Oficial de Asistencia avalado pola Rede de Polos de Emprendemento de Galicia, xunto co repositorio de prompts e modelos de automatización.',
        },
        {
          q: '¿Por que as prazas están limitadas a só 15 alumnos?',
          a: 'Para garantir que o formador poida atenderte a ti e ás necesidades do teu negocio de maneira personalizada. Non é unha conferencia pasiva: é un obradoiro de traballo práctico con resultados inmediatos.',
        },
        {
          q: '¿Onde está exactamente o Polo e como se accede?',
          a: 'O Polo de Emprendemento de Vilanova sitúase no Pazo de Vista Real (Camiño de Boutrín nº 7, 36629 Vilanova de Arousa). Conta con aparcamento gratuíto e doado acceso dende as vías rápidas do Salnés.',
        },
      ],
      ctaText: '¿Tes outra dúbida? Reserva a túa praza e coméntanolo directamente',
    },
  }[lang];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black tracking-widest uppercase text-[#3870AC] bg-[#EBF2F9] px-3.5 py-1.5 rounded-full border border-[#3870AC]/20">
            {content.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#15283C] mt-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {content.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#3870AC] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#3870AC] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#3870AC]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="text-xs font-bold text-[#3870AC] hover:text-[#2B5E94] underline transition-colors cursor-pointer"
          >
            {content.ctaText} →
          </button>
        </div>

      </div>
    </section>
  );
};
