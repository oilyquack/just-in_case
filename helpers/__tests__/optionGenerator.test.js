import {
  stringToCamelCase,
  stringToKebabCase,
  stringToSnakeCase
} from '../optionGenerator';

describe('optionGenerator : ', () => {
  describe('stringToCamelCase : ', () => {
    it('should convert a string to camelCase and set isCorrect to true when string is "camel case"', () => {
      const result = stringToCamelCase('camel case');
      const expected = { case: 'camelCase', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to camelCase and set isCorrect to false when string is not "camel case"', () => {
      const result = stringToCamelCase('kebab case');
      const expected = { case: 'kebabCase', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToKebabCase : ', () => {
    it('should convert a string to kebab-case and set isCorrect to true when string is "kebab case"', () => {
      const result = stringToKebabCase('kebab case');
      const expected = { case: 'kebab-case', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to kebab-case and set isCorrect to false when string is not "kebab case"', () => {
      const result = stringToKebabCase('snake case');
      const expected = { case: 'snake-case', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToSnakeCase : ', () => {
    it('should convert a string to snake_case and set isCorrect to true when string is "snake case"', () => {
      const result = stringToSnakeCase('snake case');
      const expected = { case: 'snake_case', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to snake_case and set isCorrect to false when string is not "snake case"', () => {
      const result = stringToSnakeCase('camel case');
      const expected = { case: 'camel_case', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });
});
