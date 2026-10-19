import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, MapPin, Clock, Download, Share2, ShieldCheck, ArrowRight } from 'lucide-react';
import { validateBookingForm, generateBookingReference, BookingFormState } from '../utils/pricingAndBooking.ts';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: 'iniciacion' | 'avanzado';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'iniciacion',
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    companyOrProject: '',
    municipality: 'Vilanova de Arousa',
    courseLevel: defaultCourse,
    sessionDate: '2025-11-20',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    details: BookingFormState;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate instant reservation processing
    setTimeout(() => {
      const ref = generateBookingReference(formData.courseLevel);
      setConfirmedBooking({
        reference: ref,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 border border-slate-100 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Cerrar ventana de inscripción"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          /* Success confirmation pass */
          <div className="text-center py-2 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                ¡Plaza Reservada con Éxito!
              </span>
              <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900">
                ¡Enhorabuena, {confirmedBooking.details.fullName.split(' ')[0]}!
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Tu plaza presencial en el Polo de Vilanova (Pazo de Vista Real) ha quedado bloqueada.
              </p>
            </div>

            {/* Official Pass Ticket */}
            <div className="bg-slate-50 border-2 border-dashed border-[#3870AC]/40 rounded-xl p-5 text-left space-y-3 relative overflow-hidden">
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#3870AC]">
                    Localizador de Reserva
                  </div>
                  <div className="text-lg font-mono font-black text-[#15283C]">
                    {confirmedBooking.reference}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-slate-500">Modalidad</div>
                  <div className="text-xs font-bold text-[#15283C] bg-white px-2 py-0.5 rounded border border-slate-200">
                    Presencial 100%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#3870AC] shrink-0" />
                  <span>
                    <strong>Fecha:</strong> {confirmedBooking.details.sessionDate === '2025-11-20' ? 'Jueves 20 de Noviembre' : 'Viernes 28 de Noviembre'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#3870AC] shrink-0" />
                  <span><strong>Horario:</strong> 09:30 - 13:30 h</span>
                </div>
                <div className="flex items-start gap-2 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-[#3870AC] shrink-0 mt-0.5" />
                  <span>
                    <strong>Lugar:</strong> Pazo de Vista Real (Camiño de Boutrín 7, 36629 Vilanova de Arousa)
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-3 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Confirmación enviada a: <strong>{confirmedBooking.details.email}</strong></span>
                <span className="text-emerald-700 font-semibold">Subvencionado / Sin coste</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Guardar Justificante
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3870AC] text-white font-semibold text-sm hover:bg-[#2B5E94] transition-colors shadow-sm"
              >
                Entendido, Cerrar
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF2F9] text-[#3870AC] mb-2 border border-[#3870AC]/20">
                <Sparkles className="w-3.5 h-3.5" /> Plazas Limitadas (15 Alumnos Máx.)
              </div>
              <h3 id="modal-title" className="text-2xl font-black text-[#15283C] tracking-tight">
                Inscripción Oficial — Curso IA en Polo de Vilanova
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Completa tus datos para reservar tu puesto en el aula del <strong>Pazo de Vista Real</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Selecciona tu Nivel
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className={`relative flex flex-col p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.courseLevel === 'iniciacion'
                      ? 'border-[#3870AC] bg-blue-50/50 text-slate-900 shadow-2xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="courseLevel"
                      value="iniciacion"
                      checked={formData.courseLevel === 'iniciacion'}
                      onChange={() => setFormData({ ...formData, courseLevel: 'iniciacion' })}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">IA Práctica para Negocios</span>
                      {formData.courseLevel === 'iniciacion' && (
                        <CheckCircle2 className="w-4 h-4 text-[#3870AC]" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">Desde cero: ChatGPT, automatización y contenido</span>
                  </label>

                  <label className={`relative flex flex-col p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.courseLevel === 'avanzado'
                      ? 'border-[#3870AC] bg-blue-50/50 text-slate-900 shadow-2xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="courseLevel"
                      value="avanzado"
                      checked={formData.courseLevel === 'avanzado'}
                      onChange={() => setFormData({ ...formData, courseLevel: 'avanzado' })}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Agentes y Flujos Avanzados</span>
                      {formData.courseLevel === 'avanzado' && (
                        <CheckCircle2 className="w-4 h-4 text-[#3870AC]" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">Procesos autónomos, análisis y ventas</span>
                  </label>
                </div>
              </div>

              {/* Personal data inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre y Apellidos *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Ej. Antón Martínez"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-[#3870AC]'
                    } focus:outline-hidden focus:ring-2 focus:ring-[#3870AC]/20 transition-all`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-[#3870AC]'
                    } focus:outline-hidden focus:ring-2 focus:ring-[#3870AC]/20 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono Móvil (para confirmación SMS/WhatsApp) *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="600 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-[#3870AC]'
                    } focus:outline-hidden focus:ring-2 focus:ring-[#3870AC]/20 transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="municipality" className="block text-xs font-semibold text-slate-700 mb-1">
                    Municipio de Residencia o Negocio *
                  </label>
                  <select
                    id="municipality"
                    value={formData.municipality}
                    onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#3870AC] focus:outline-hidden focus:ring-2 focus:ring-[#3870AC]/20 bg-white"
                  >
                    <option value="Vilanova de Arousa">Vilanova de Arousa</option>
                    <option value="Vilagarcía de Arousa">Vilagarcía de Arousa</option>
                    <option value="Cambados">Cambados</option>
                    <option value="A Illa de Arousa">A Illa de Arousa</option>
                    <option value="Ribadumia">Ribadumia</option>
                    <option value="Meaño">Meaño</option>
                    <option value="Sanxenxo">Sanxenxo</option>
                    <option value="O Grove">O Grove</option>
                    <option value="Pontevedra">Pontevedra</option>
                    <option value="Ribeira / Barbanza">Ribeira / Barbanza</option>
                    <option value="Otro municipio de Galicia">Otro municipio de Galicia</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="companyOrProject" className="block text-xs font-semibold text-slate-700 mb-1">
                  Tu Empresa, Proyecto o Actividad Profesional *
                </label>
                <input
                  id="companyOrProject"
                  type="text"
                  placeholder="Ej. Bodega familiar, tienda de ropa, despacho contable, fontanería..."
                  value={formData.companyOrProject}
                  onChange={(e) => setFormData({ ...formData, companyOrProject: e.target.value })}
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                    errors.companyOrProject ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-[#3870AC]'
                  } focus:outline-hidden focus:ring-2 focus:ring-[#3870AC]/20 transition-all`}
                />
                {errors.companyOrProject && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.companyOrProject}</p>
                )}
              </div>

              {/* Terms */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                    className="mt-1 rounded border-slate-300 text-[#3870AC] focus:ring-[#3870AC]"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    Acepto la reserva de plaza en el Polo de Vilanova (Pazo de Vista Real) y la gestión de mis datos para la coordinación de la formación y materiales del curso.
                  </span>
                </label>
                {errors.acceptedTerms && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.acceptedTerms}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#3870AC] hover:bg-[#2B5E94] text-white font-extrabold text-base shadow-md shadow-[#3870AC]/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#235384]"
                >
                  {isSubmitting ? (
                    <span>Procesando reserva...</span>
                  ) : (
                    <>
                      <span>Confirmar Reserva de Plaza Inmediata</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 mt-2.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3870AC]" /> Confirmación Oficial
                  </span>
                  <span>·</span>
                  <span>Sin compromiso</span>
                  <span>·</span>
                  <span>Pazo de Vista Real</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
