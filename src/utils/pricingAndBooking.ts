export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  companyOrProject: string;
  municipality: string;
  courseLevel: 'iniciacion' | 'avanzado';
  sessionDate: string;
  acceptedTerms: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof BookingFormState, string>>;
}

export function validateBookingForm(data: Partial<BookingFormState>): ValidationResult {
  const errors: Partial<Record<keyof BookingFormState, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Por favor, introduce tu nombre completo (mínimo 3 caracteres)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Introduce una dirección de correo electrónico válida';
  }

  const phoneClean = (data.phone || '').replace(/[\s\-\+]/g, '');
  if (!data.phone || phoneClean.length < 9) {
    errors.phone = 'Introduce un teléfono de contacto válido (mínimo 9 dígitos)';
  }

  if (!data.companyOrProject || data.companyOrProject.trim().length < 2) {
    errors.companyOrProject = 'Indica el nombre de tu negocio, proyecto o perfil profesional';
  }

  if (!data.municipality || data.municipality.trim().length < 2) {
    errors.municipality = 'Indica tu municipio o comarca (ej. Vilanova, Vilagarcía, Cambados...)';
  }

  if (!data.courseLevel) {
    errors.courseLevel = 'Selecciona el nivel de curso deseado';
  }

  if (!data.acceptedTerms) {
    errors.acceptedTerms = 'Debes aceptar las condiciones de inscripción y política de privacidad';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateBookingReference(courseLevel: string): string {
  const prefix = courseLevel === 'avanzado' ? 'POLO-ADV' : 'POLO-INI';
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-VILANOVA-${randomSuffix}`;
}

export function calculateSeatsLeft(totalSeats: number, bookedSeats: number): {
  seatsLeft: number;
  percentageFull: number;
  isAlmostFull: boolean;
} {
  const seatsLeft = Math.max(0, totalSeats - bookedSeats);
  const percentageFull = Math.min(100, Math.round((bookedSeats / totalSeats) * 100));
  const isAlmostFull = seatsLeft <= 5;

  return {
    seatsLeft,
    percentageFull,
    isAlmostFull,
  };
}
