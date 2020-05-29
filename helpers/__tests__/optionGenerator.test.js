import {
  stringToCamelCase,
  stringToCobolCase,
  stringToFlatcase,
  stringToKebabCase,
  stringToLeetCase,
  stringToMacroCase,
  stringToPascalCase,
  stringToSnakeCase,
  stringToUppercase,
} from '../optionGenerator';

describe('optionGenerator : ', () => {
  describe('stringToCamelCase : ', () => {
    it('should convert a string to camelCase and set isCorrect to true when string is "camel case"', () => {
      const result = stringToCamelCase('camel case');
      const expected = { case: 'camelCase', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to camelCase and set isCorrect to false when string is not "camel case"', () => {
      const result = stringToCamelCase('nota case');
      const expected = { case: 'notaCase', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToCobolCase : ', () => {
    it('should convert a string to COBOL-CASE and set isCorrect to true when string is "cobol case"', () => {
      const result = stringToCobolCase('cobol case');
      const expected = { case: 'COBOL-CASE', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to COBOL-CASE and set isCorrect to false when string is not "cobol case"', () => {
      const result = stringToCobolCase('nota case');
      const expected = { case: 'NOTA-CASE', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToFlatcase : ', () => {
    it('should convert a string to flatcase and set isCorrect to true when string is "flat case"', () => {
      const result = stringToFlatcase('flat case');
      const expected = { case: 'flatcase', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to flatcase and set isCorrect to false when string is not "flat case"', () => {
      const result = stringToFlatcase('nota case');
      const expected = { case: 'notacase', isCorrect: false };
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
      const result = stringToKebabCase('nota case');
      const expected = { case: 'nota-case', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToLeetCase : ', () => {
    it('should convert a string to leet case and set isCorrect to true when string is "leet case"', () => {
      const result = stringToLeetCase('1337 case');
      const expected = { case: '1337 (@$3', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to leetcase and set isCorrect to false when string is not "leet case"', () => {
      const result = stringToLeetCase('nota case');
      const expected = { case: '[]07@ (@$3', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToMacroCase : ', () => {
    it('should convert a string to MACRO_CASE and set isCorrect to true when string is "macro case"', () => {
      const result = stringToMacroCase('macro case');
      const expected = { case: 'MACRO_CASE', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to MACRO_CASE and set isCorrect to false when string is not "macro case"', () => {
      const result = stringToMacroCase('nota case');
      const expected = { case: 'NOTA_CASE', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToPascalCase : ', () => {
    it('should convert a string to PascalCase and set isCorrect to true when string is "pascal case"', () => {
      const result = stringToPascalCase('pascal case');
      const expected = { case: 'PascalCase', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to PascalCase and set isCorrect to false when string is not "pascal case"', () => {
      const result = stringToPascalCase('nota case');
      const expected = { case: 'NotaCase', isCorrect: false };
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
      const result = stringToSnakeCase('nota case');
      const expected = { case: 'nota_case', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });

  describe('stringToUppercase : ', () => {
    it('should convert a string to UPPERCASE and set isCorrect to true when string is "upper case"', () => {
      const result = stringToUppercase('upper case');
      const expected = { case: 'UPPERCASE', isCorrect: true };
      expect(result).toEqual(expected);
    });

    it('should convert a string to UPPERCASE and set isCorrect to false when string is not "upper case"', () => {
      const result = stringToUppercase('nota case');
      const expected = { case: 'NOTACASE', isCorrect: false };
      expect(result).toEqual(expected);
    });
  });
});
