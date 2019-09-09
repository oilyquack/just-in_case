const stringToCamelCase = string => {
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

const stringToCobolCase = string => {
  const caseObj = {};

  caseObj.case = string.replace(/\s+/g, '-').toUpperCase();

  if (string === 'kebab case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToFlatcase = string => {
  const caseObj = {};

  caseObj.case = string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  if (string === 'flat case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToKebabCase = string => {
  const caseObj = {};

  caseObj.case = string.replace(/\s+/g, '-').toLowerCase();

  if (string === 'kebab case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToLeetCase = string => {
  const leet = {
    a: '@',
    b: '8',
    c: '(',
    d: '|)',
    e: '3',
    f: '|=',
    g: '6',
    h: '#',
    i: '!',
    j: ']',
    k: '|{',
    l: '1',
    m: 'em',
    n: '[]',
    o: '0',
    p: '|*',
    q: '0,',
    r: '|2',
    s: '$',
    t: '7',
    u: '(_)',
    v: '/',
    w: 'vv',
    x: '%',
    y: '`/',
    z: '2'
  };

  const caseObj = {};

  let leetmsg = '';

  // make it 1337
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (leet[string.charAt(i)]) {
      leetmsg += leet[string.charAt(i)];
    } else {
      leetmsg += string.charAt(i);
    }
  }

  caseObj.case = leetmsg;

  if (string === '1337 case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToMacroCase = string => {
  const caseObj = {};

  caseObj.case = string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toUpperCase())
    .join('_');

  if (string === 'snake case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToPascalCase = string => {
  const caseObj = {};

  caseObj.case = string
    .replace(/\w+/g, function(w) {
      return (w[0].toUpperCase() + w.slice(1).toLowerCase()).trim();
    })
    .replace(/\s+/g, '');

  if (string === 'pascal case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

const stringToSnakeCase = string => {
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

const stringToUppercase = string => {
  const caseObj = {};

  caseObj.case = string.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();

  if (string === 'flat case') {
    caseObj.isCorrect = true;
  } else {
    caseObj.isCorrect = false;
  }

  return caseObj;
};

module.exports = {
  stringToCamelCase,
  stringToCobolCase,
  stringToFlatcase,
  stringToKebabCase,
  stringToLeetCase,
  stringToMacroCase,
  stringToPascalCase,
  stringToSnakeCase,
  stringToUppercase
};
