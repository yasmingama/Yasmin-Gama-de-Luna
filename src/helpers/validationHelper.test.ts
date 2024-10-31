// src/helpers/validationHelper.test.ts

import { isValidEmail, isValidPrice } from './validationHelper';

describe('Validation Helper', () => {
  test('should validate email correctly', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  test('should validate price correctly', () => {
    expect(isValidPrice(10)).toBe(true);
    expect(isValidPrice(-5)).toBe(false);
    expect(isValidPrice(0)).toBe(false);
  });
});