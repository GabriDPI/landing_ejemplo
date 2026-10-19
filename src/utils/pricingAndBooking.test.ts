import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  generateBookingReference,
  calculateSeatsLeft,
} from './pricingAndBooking.ts';
import type { BookingFormState } from './pricingAndBooking.ts';

test('validateBookingForm flags invalid or missing inputs', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.companyOrProject);
  assert.ok(result.errors.courseLevel);
  assert.ok(result.errors.acceptedTerms);
});

test('validateBookingForm validates correct booking data', () => {
  const validData: BookingFormState = {
    fullName: 'Roi Fernandez',
    email: 'roi@empresa-salnes.gal',
    phone: '+34 600 123 456',
    companyOrProject: 'Adega Rías Baixas S.L.',
    municipality: 'Vilanova de Arousa',
    courseLevel: 'iniciacion',
    sessionDate: '2025-11-15',
    acceptedTerms: true,
  };

  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateBookingReference produces expected prefix and format', () => {
  const refIni = generateBookingReference('iniciacion');
  assert.ok(refIni.startsWith('POLO-INI-VILANOVA-'));

  const refAdv = generateBookingReference('avanzado');
  assert.ok(refAdv.startsWith('POLO-ADV-VILANOVA-'));
});

test('calculateSeatsLeft correctly calculates remaining spots and fullness', () => {
  const status1 = calculateSeatsLeft(15, 12);
  assert.equal(status1.seatsLeft, 3);
  assert.equal(status1.percentageFull, 80);
  assert.equal(status1.isAlmostFull, true);

  const status2 = calculateSeatsLeft(15, 5);
  assert.equal(status2.seatsLeft, 10);
  assert.equal(status2.percentageFull, 33);
  assert.equal(status2.isAlmostFull, false);
});
