const cases = ['camel case', 'snake case', 'kebab case'];

export const stringToCamelCase = string => {
  const caseObj = {};
  caseObj.case = string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');

  if (string === 'camel case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

export const stringToKebabCase = string => {
  const caseObj = {};

  caseObj.case = string.replace(/\s+/g, '-').toLowerCase();

  if (string === 'kebab case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

export const stringToSnakeCase = string => {
  const caseObj = {};

  caseObj.case = string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

  if (string === 'snake case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};
