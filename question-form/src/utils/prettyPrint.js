
import formulaParser from './formulaParser';
import fractionParser from './fractionParser';
import binomialParser from './binomialParser';
import squareRootParser from './squareRootParser';

const prettyPrint = (text) => {
  if (!text) {
    return '<span></span>';
  }
  if (text.indexOf('#') > -1) {
    return fractionParser(text);
  }
  if (text.indexOf('@') > -1) {
    return binomialParser(text);
  }
  if (text.indexOf('$') > -1) {
    return squareRootParser(text);
  }
  if (text.indexOf('*') > -1 && text.indexOf('#') > -1) {
    return fractionParser(text);
  }
  if (text.indexOf('*') > -1 && text.indexOf('@') > -1) {
    return binomialParser(text);
  }
  if (text.indexOf('*') > -1 && !text.indexOf('#') > -1) {
    return formulaParser(text);
  }
  return `<span>${text}</span>`;
};

export default prettyPrint;
