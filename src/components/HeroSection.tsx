import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Zap, Users, Bot, BrainCircuit, Star, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  lang: 'es' | 'gl';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, lang }) => {
  const [activeDemoTab, setActiveDemoTab] = useState<'budget' | 'email' | 'marketing'>('budget');

  const content = {
    es: {
      badge: '📍 POLO DE EMPRENDEMENTO DE VILANOVA DE AROUSA · PAZO DE VISTA REAL',
      headlineStart: 'Domina la ',
      headlineAccent: 'Inteligencia Artificial',
      headlineEnd: ' y Multiplica la Productividad de tu Negocio',
      subheadline: 'Formación 100% práctica y presencial en el emblemático Pazo de Vista Real. Aprende a aplicar ChatGPT, automatizaciones sin código y asistentes inteligentes para ahorrar más de 15 horas a la semana y acelerar tus ventas reales.',
      ctaButton: '¡Reserva tu Plaza Ahora — Plazas Limitadas!',
      ctaSubtext: 'Inscripción oficial · 15 plazas por convocatoria · Pazo de Vista Real',
      fastBenefits: [
        {
          title: '100% Práctico con tu negocio',
          desc: 'Sales de cada sesión con tus herramientas y prompts funcionando para tu empresa o proyecto.',
          icon: Zap,
        },
        {
          title: 'En el Pazo de Vista Real',
          desc: 'Instalaciones tecnológicas punteras, asesoramiento del Polo de Emprendemento y coworking gratuito.',
          icon: MapPin,
        },
        {
          title: 'Grupos reducidos (Máx. 15)',
          desc: 'Atención personalizada para resolver los retos reales de autónomos y pymes de O Salnés y Barbanza.',
          icon: Users,
        },
      ],
      interactiveDemo: {
        title: 'Asistente de IA en vivo · Polo de Vilanova',
        subtitle: 'Ejemplo de automatización configurada en clase:',
        tabs: {
          budget: 'Generar Presupuesto',
          email: 'Atención Clientes',
          marketing: 'Post & Campaña',
        },
        samples: {
          budget: {
            prompt: 'Crear presupuesto para catering de 45 personas en Cambados con vino Albariño Rías Baixas',
            output: '✅ Presupuesto desglosado generado en 4 segundos: Menú degustación marinero + Maridaje D.O. Rías Baixas + Descuento por grupo. ¡Listo para enviar en PDF!',
            saving: 'Ahorro: 35 minutos de redacción',
          },
          email: {
            prompt: 'Responder consulta urgente sobre horarios de entrega y facturación en gallego y castellano',
            output: '✅ Respuesta bilingüe impecable redactada con tono profesional y personalizado con tus condiciones de venta en 2 segundos.',
            saving: 'Ahorro: 15 minutos por email',
          },
          marketing: {
            prompt: 'Campaña en redes para promocionar reservas de temporada con ofertas locales de O Salnés',
            output: '✅ 3 propuestas de texto persuasivo + hashtags comarcales + estructura de anuncio listas para publicar.',
            saving: 'Ahorro: 2 horas de planificación',
          },
        },
      },
    },
    gl: {
      badge: '📍 POLO DE EMPRENDEMENTO DE VILANOVA DE AROUSA · PAZO DE VISTA REAL',
      headlineStart: 'Domina a ',
      headlineAccent: 'Intelixencia Artificial',
      headlineEnd: ' e Multiplica a Produtividade do teu Negocio',
      subheadline: 'Formación 100% práctica e presencial no emblemático Pazo de Vista Real. Aprende a aplicar ChatGPT, automatizacións sen código e asistentes intelixentes para aforrar máis de 15 horas á semana e acelerar as túas vendas reais.',
      ctaButton: '¡Reserva a túa Praza Agora — Prazas Limitadas!',
      ctaSubtext: 'Inscrición oficial · 15 prazas por convocatoria · Pazo de Vista Real',
      fastBenefits: [
        {
          title: '100% Práctico co teu negocio',
          desc: 'Saes de cada sesión coas túas ferramentas e prompts funcionando para a túa empresa ou proxecto.',
          icon: Zap,
        },
        {
          title: 'No Pazo de Vista Real',
          desc: 'Instalacións tecnolóxicas punteiras, asesoramento do Polo de Emprendemento e coworking gratuíto.',
          icon: MapPin,
        },
        {
          title: 'Grupos reducidos (Máx. 15)',
          desc: 'Atención personalizada para resolver os retos reais de autónomos e pemes do Salnés e Barbanza.',
          icon: Users,
        },
      ],
      interactiveDemo: {
        title: 'Asistente de IA en vivo · Polo de Vilanova',
        subtitle: 'Exemplo de automatización configurada en clase:',
        tabs: {
          budget: 'Xerar Orzamento',
          email: 'Atención Clientes',
          marketing: 'Post & Campaña',
        },
        samples: {
          budget: {
            prompt: 'Crear orzamento para catering de 45 persoas en Cambados con viño Albariño Rías Baixas',
            output: '✅ Orzamento detallado xerado en 4 segundos: Menú degustación mariñeiro + Maridaxe D.O. Rías Baixas + Desconto grupo. ¡Listo para PDF!',
            saving: 'Aforro: 35 minutos de redacción',
          },
          email: {
            prompt: 'Responder consulta urxente sobre horarios de entrega e facturación en galego e castelán',
            output: '✅ Resposta bilingüe impecable redactada con ton profesional e adaptada ás túas condicións en 2 segundos.',
            saving: 'Aforro: 15 minutos por email',
          },
          marketing: {
            prompt: 'Campaña en redes para promocionar reservas de tempada con ofertas locais do Salnés',
            output: '✅ 3 propostas de texto persuasivo + hashtags comarcais + estrutura de anuncio listas para publicar.',
            saving: 'Aforro: 2 horas de planificación',
          },
        },
      },
    },
  }[lang];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-linear-to-b from-[#EBF2F9] via-[#F4F7FA] to-white border-b border-slate-200/60">
      {/* Subtle branding glow circles */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#3870AC]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 -z-10 w-80 h-80 bg-[#15283C]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. ESTRUCTURA: Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LADO IZQUIERDO: Título principal grande, subtítulo claro y botón CTA llamativo */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#3870AC]/30 shadow-2xs text-xs font-bold text-[#15283C] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#3870AC]" />
              <span>{content.badge}</span>
            </div>

            {/* Título Principal Grande */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black tracking-tight text-[#15283C] leading-[1.12]">
              {content.headlineStart}
              <span className="text-[#3870AC]">
                {content.headlineAccent}
              </span>
              {content.headlineEnd}
            </h1>

            {/* Subtítulo Claro */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {content.subheadline}
            </p>

            {/* Botón CTA Llamativo (Branded Xunta Blue & Ice Blue) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#3870AC] hover:bg-[#2B5E94] text-white text-base sm:text-lg font-black tracking-wide shadow-lg shadow-[#3870AC]/25 hover:shadow-[#3870AC]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer border border-[#265585]"
              >
                <span>{content.ctaButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3870AC] shrink-0" />
              <span>{content.ctaSubtext}</span>
            </p>

            {/* Social validation mini-counter */}
            <div className="flex items-center gap-4 pt-1 border-t border-slate-200">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Emprendedora" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Empresario" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Comercio local" />
              </div>
              <div className="text-xs text-slate-700">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-[#15283C] ml-1">4.9 / 5</span>
                </div>
                <span className="text-[11px] text-slate-500">+340 proyectos asesorados en el Polo de Vilanova</span>
              </div>
            </div>

          </div>

          {/* LADO DERECHO: Espacio reservado para una imagen o ilustración relevante */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Illustration Container with Xunta styling */}
              <div className="relative rounded-xl bg-white p-3 sm:p-4 shadow-xl border border-slate-200 overflow-hidden">
                
                {/* Photo: modern entrepreneurship hub matching the user's reference image */}
                <div className="relative h-48 sm:h-56 w-full rounded-lg overflow-hidden bg-[#15283C]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                    alt="Polo de Emprendemento de Vilanova - Trabajo en equipo e IA"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#15283C] via-[#15283C]/40 to-transparent" />
                  
                  {/* Overlay badge with Polo details */}
                  <div className="absolute top-3 left-3 bg-[#3870AC] px-3 py-1 rounded text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#B8D7F5]" />
                    <span>Pazo de Vista Real · Vilanova</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#B8D7F5] text-[#13273D] px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    Aulas Equipadas
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-sky-200">Rede de Polos de Galicia</p>
                    <p className="text-sm font-bold truncate">Espazo de Emprendemento e Apoio ao Emprego</p>
                  </div>
                </div>

                {/* Simulated AI Card */}
                <div className="mt-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-[#3870AC]" />
                      <span className="text-xs font-bold text-[#15283C]">{content.interactiveDemo.title}</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Activo
                    </span>
                  </div>

                  {/* Demo selector buttons */}
                  <div className="flex gap-1.5 mb-2.5">
                    {(['budget', 'email', 'marketing'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveDemoTab(tab)}
                        className={`text-[11px] py-1 px-2.5 rounded font-semibold transition-all cursor-pointer ${
                          activeDemoTab === tab
                            ? 'bg-[#3870AC] text-white shadow-2xs'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {content.interactiveDemo.tabs[tab]}
                      </button>
                    ))}
                  </div>

                  {/* Demo Card Output */}
                  <div className="space-y-1.5 text-xs bg-white p-3 rounded border border-slate-200">
                    <div className="text-slate-500 text-[11px] font-medium flex items-center gap-1">
                      <BrainCircuit className="w-3.5 h-3.5 text-[#3870AC]" />
                      <span>Instrucción del alumno:</span>
                    </div>
                    <div className="text-slate-800 font-medium italic text-[11px] bg-slate-50 p-1.5 rounded border border-slate-100">
                      "{content.interactiveDemo.samples[activeDemoTab].prompt}"
                    </div>
                    <div className="text-slate-900 font-normal text-[11px] pt-1">
                      {content.interactiveDemo.samples[activeDemoTab].output}
                    </div>
                    <div className="text-[10px] text-[#3870AC] font-bold pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span>⚡ {content.interactiveDemo.samples[activeDemoTab].saving}</span>
                      <span className="text-slate-400 font-normal">Sin programar</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-2 -right-2 sm:-right-4 bg-[#15283C] text-white p-3 rounded-lg shadow-xl border border-sky-400/30 text-left hidden sm:block">
                  <div className="text-xs font-semibold text-sky-200">Resultados Reales</div>
                  <div className="text-xl font-extrabold text-[#B8D7F5]">+15h / semana</div>
                  <div className="text-[10px] text-slate-300">Ahorro medio en gestión</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* DEBAJO: Una lista de 3 puntos destacados (beneficios rápidos) */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.fastBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#3870AC]/40 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#EBF2F9] text-[#3870AC] group-hover:bg-[#3870AC] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#15283C] group-hover:text-[#3870AC] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
