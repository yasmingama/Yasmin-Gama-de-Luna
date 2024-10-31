// src/helpers/titleValidationHelper.test.ts

import { isValidTitle } from './titleValidationHelper';

describe('Title Validation Helper', () => {
  test('should validate title correctly', () => {
    expect(isValidTitle('Livro')).toBe(true);
    expect(isValidTitle('')).toBe(false);
    expect(isValidTitle('AB')).toBe(false);
  });
});