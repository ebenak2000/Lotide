const language = 'JavaScript';

const verboseObject = {
  language: language,
  level: 'Difficult'
};

console.log('Verbose Object:', verboseObject);

const shorthandObject = {
  language,
  level: 'Difficult'
};

console.log('Shorthand Object:', shorthandObject);