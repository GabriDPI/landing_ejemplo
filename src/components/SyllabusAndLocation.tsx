import React, { useState } from 'react';
import { BookOpen, MapPin, CheckCircle, Clock, Laptop, Wifi, Car, Shield, Sparkles, ChevronRight } from 'lucide-react';

interface SyllabusAndLocationProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const SyllabusAndLocation: React.FC<SyllabusAndLocationProps> = ({ onOpenBooking, lang }) => {
  const [activeModule, setActiveModule] = useState(0);

  const content = {
    es: {
      syllabusTitle: 'Programa Formativo 100% Aplicado',
      syllabusSubtitle: 'Diseñado para que cada minuto se traduzca en una mejora directa de tu operativa diaria.',
      modules: [
        {
          num: '01',
          title: 'Fundamentos y Dominio de Prompts Profesionales',
          time: 'Sesión 1 · 4 Horas',
          desc: 'Aprende a formular órdenes exactas a ChatGPT y modelos de lenguaje para obtener respuestas profesionales, precisas y sin alucinaciones.',
          topics: [
            'Estructura maestra de un prompt de alto rendimiento',
            'Configuración de instrucciones personalizadas para tu empresa',
            'Subida y tratamiento seguro de documentos y tarifas',
            'Casos prácticos: correos, resúmenes y redactado bilingüe',
          ],
        },
        {
          num: '02',
          title: 'Automatizaciones y Eliminación de Tareas Rutinarias',
          time: 'Sesión 2 · 4 Horas',
          desc: 'Conecta herramientas cotidianas (Gmail, WhatsApp, Excel, formularios) para que la IA trabaje mientras tú te dedicas a tu negocio.',
          topics: [
            'Generación automática de presupuestos en PDF',
            'Clasificación y respuesta a consultas de clientes 24/7',
            'Procesamiento de facturas y tickets sin teclear a mano',
            'Alertas inteligentes de seguimiento de cobros y pedidos',
          ],
        },
        {
          num: '03',
          title: 'Marketing, Contenido y Ventas con IA',
          time: 'Sesión 3 · 4 Horas',
          desc: 'Diseña y ejecuta campañas comerciales que captan clientes en O Salnés, Barbanza y el resto de Galicia o España.',
          topics: [
            'Redacción de copies de venta con fórmulas probadas (AIDA / PAS)',
            'Generación de imágenes y fotografías comerciales con IA',
            'Creación de guiones de vídeo y carruseles para redes sociales',
            'Estrategias de posicionamiento local en Google Maps y SEO',
          ],
        },
        {
          num: '04',
          title: 'Asistentes a Medida (GPTs) y Análisis de Datos',
          time: 'Sesión 4 · 4 Horas',
          desc: 'Crea tu propio asistente inteligente entrenado exclusivamente con las reglas, catálogos y políticas de tu empresa.',
          topics: [
            'Construcción de un GPT propio sin programar código',
            'Análisis avanzado de ventas y finanzas en hojas de cálculo',
            'Protección de datos y buenas prácticas de confidencialidad',
            'Plan de acción individualizado para los próximos 6 meses',
          ],
        },
      ],
      locationTitle: 'Dónde se Imparte: Pazo de Vista Real',
      locationSubtitle: 'Un enclave histórico y emblemático en Vilanova de Arousa transformado en polo de innovación y emprendimiento.',
      facilities: [
        { icon: Laptop, text: 'Aulas informáticas totalmente equipadas con ordenadores de alta potencia o trae tu portátil' },
        { icon: Wifi, text: 'Fibra óptica de alta velocidad y pantallas interactivas de última generación' },
        { icon: Car, text: 'Aparcamiento gratuito y amplio dentro del propio recinto del Pazo' },
        { icon: Shield, text: 'Acompañamiento posterior con el equipo de tutores del Polo de Emprendemento' },
      ],
      address: 'Pazo de Vista Real, Camiño de Boutrín nº 7, 36629 Vilanova de Arousa (Pontevedra)',
      action: 'Ver Disponibilidad y Fechas',
    },
    gl: {
      syllabusTitle: 'Programa Formativo 100% Aplicado',
      syllabusSubtitle: 'Deseñado para que cada minuto se traduza nunha mellora directa da túa operativa diaria.',
      modules: [
        {
          num: '01',
          title: 'Fundamentos e Dominio de Prompts Profesionais',
          time: 'Sesión 1 · 4 Horas',
          desc: 'Aprende a formular ordes exactas a ChatGPT e modelos de linguaxe para obter respostas profesionais e precisas.',
          topics: [
            'Estrutura mestra dun prompt de alto rendemento',
            'Configuración de instrucións personalizadas para a túa empresa',
            'Subida e tratamento seguro de documentos e prezos',
            'Casos prácticos: correos, resumos e redactado bilingüe',
          ],
        },
        {
          num: '02',
          title: 'Automatizacións e Eliminación de Tarefas Rutineiras',
          time: 'Sesión 2 · 4 Horas',
          desc: 'Conecta ferramentas cotiás (Gmail, WhatsApp, Excel) para que a IA traballe mentres ti te dedicas ao teu negocio.',
          topics: [
            'Xeración automática de orzamentos en PDF',
            'Clasificación e resposta a consultas de clientes 24/7',
            'Procesamento de facturas sen teclear a man',
            'Alertas intelixentes de seguimento de pedidos',
          ],
        },
        {
          num: '03',
          title: 'Márketing, Contido e Vendas con IA',
          time: 'Sesión 3 · 4 Horas',
          desc: 'Deseña e executa campañas comerciais que captan clientes no Salnés, Barbanza e toda Galicia.',
          topics: [
            'Redacción de textos comerciais con fórmulas comprobadas',
            'Xeración de imaxes e fotografías comerciais con IA',
            'Creación de guións de vídeo e publicacións para redes',
            'Estratexias de posicionamento local en Google Maps',
          ],
        },
        {
          num: '04',
          title: 'Asistentes a Medida (GPTs) e Análise de Datos',
          time: 'Sesión 4 · 4 Horas',
          desc: 'Crea o teu propio asistente intelixente adestrado exclusivamente coas normas e catálogos da túa empresa.',
          topics: [
            'Construción dun GPT propio sen escribir código',
            'Análise avanzada de vendas e finanzas en follas de cálculo',
            'Protección de datos e boas prácticas de seguridade',
            'Plan de acción individualizado para os vindeiros meses',
          ],
        },
      ],
      locationTitle: 'Onde se Imparte: Pazo de Vista Real',
      locationSubtitle: 'Un enclave histórico e emblemático en Vilanova de Arousa transformado en polo de innovación e emprendemento.',
      facilities: [
        { icon: Laptop, text: 'Aulas informáticas totalmente equipadas con ordenadores de alta potencia ou leva o teu portátil' },
        { icon: Wifi, text: 'Fibra óptica de alta velocidade e pantallas interactivas de última xeración' },
        { icon: Car, text: 'Aparcamento gratuíto e amplo dentro do propio recinto do Pazo' },
        { icon: Shield, text: 'Acompañamento posterior co equipo de titores do Polo de Emprendemento' },
      ],
      address: 'Pazo de Vista Real, Camiño de Boutrín nº 7, 36629 Vilanova de Arousa (Pontevedra)',
      action: 'Ver Dispoñibilidade e Datas',
    },
  }[lang];

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Syllabus Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-[#3870AC] bg-[#EBF2F9] px-3.5 py-1.5 rounded-full border border-[#3870AC]/20">
              TEMARIO PRÁCTICO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#15283C] mt-4 tracking-tight">
              {content.syllabusTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              {content.syllabusSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector list */}
            <div className="lg:col-span-5 space-y-3">
              {content.modules.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    activeModule === idx
                      ? 'border-[#3870AC] bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl font-black font-mono px-3 py-1 rounded-lg ${
                      activeModule === idx
                        ? 'bg-[#3870AC] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {m.num}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#3870AC] uppercase tracking-wider">
                        {m.time}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {m.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    activeModule === idx ? 'text-[#3870AC] translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              ))}
            </div>

            {/* Right details card */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <span className="text-xs font-extrabold text-[#3870AC] tracking-wider uppercase">
                  Módulo {content.modules[activeModule].num}
                </span>
                <span className="text-xs font-bold text-[#15283C] bg-white px-3 py-1 rounded border border-slate-200">
                  {content.modules[activeModule].time}
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#15283C] mb-3">
                {content.modules[activeModule].title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                {content.modules[activeModule].desc}
              </p>

              <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Lo que dominarás en esta sesión:
                </div>
                {content.modules[activeModule].topics.map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#3870AC] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Ejercicios sobre casos reales de tu sector</span>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#3870AC] hover:bg-[#2B5E94] text-white text-xs font-bold rounded-md transition-colors cursor-pointer"
                >
                  Reservar este Módulo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Facility Section */}
        <div className="pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-black tracking-widest uppercase text-[#3870AC] bg-[#EBF2F9] px-3.5 py-1.5 rounded-full border border-[#3870AC]/20">
                UBICACIÓN OFICIAL
              </span>
              <h3 className="text-3xl font-black text-[#15283C] tracking-tight">
                {content.locationTitle}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {content.locationSubtitle}
              </p>

              <div className="p-4 rounded-xl bg-[#EBF2F9] border border-[#3870AC]/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3870AC] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-800">
                  <span className="font-bold block text-[#15283C]">Dirección Oficial:</span>
                  <span>{content.address}</span>
                  <span className="block text-slate-500 mt-1">A 5 min de Vilagarcía de Arousa y Cambados. Excelente conexión por Vía Rápida do Salnés.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {content.facilities.map((fac, idx) => {
                  const Icon = fac.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <Icon className="w-4 h-4 text-[#3870AC] shrink-0 mt-0.5" />
                      <span>{fac.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#3870AC] hover:bg-[#2B5E94] text-white font-bold text-sm shadow-sm transition-all cursor-pointer border border-[#235384]"
                >
                  <span>{content.action}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Location Map & Pazo Preview */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-linear-to-br from-[#003B6F] to-[#002D62]">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80"
                  alt="Instalaciones Pazo de Vista Real Vilanova de Arousa"
                  className="w-full h-80 object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Graceful fallback if offline
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white text-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-extrabold text-[#003B6F]">Polo de Vilanova de Arousa</div>
                      <div className="text-[11px] text-slate-500">Pazo de Vista Real · Caleiro, Vilanova</div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Pazo+Vista+Real+Vilanova+de+Arousa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#F26522] hover:underline flex items-center gap-1"
                    >
                      <MapPin className="w-3.5 h-3.5" /> Abrir en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
