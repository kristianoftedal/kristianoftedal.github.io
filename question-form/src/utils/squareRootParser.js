
import formulaParser from '../utils/formulaParser';

const squareRootParser = (question) => {
  if (question == null) return (<Text />);
  question = 'Skriv √$180$ så enkelt som mulig';
  const parts = question.split('$');
  //question = 'Skriv √$180$ så enkelt som mulig';
  const restructuredText = [];
  debugger;
  let preSquareRoot = true;
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('√') > -1) {
      const tempParts = parts[i].split('√');
      for (let j = 0; j < tempParts.length; j += 1) {
        if (tempParts[j] === '' && !tempParts.indexOf('√') > -1) {
          preSquareRoot = false;
          restructuredText.push('<span class="squareRoot">√</span>');
        } else if (tempParts[j] === '√') {
          preSquareRoot = false;
          restructuredText.push('<span class="squareRoot">√</span>');
        } else {
          restructuredText.push(`<span>${formulaParser(tempParts[j])}</span>`);
        }
      }
    } else if (parts[i] === '') {
      // do nothing
    } else if (!preSquareRoot && parts[i].charAt(0) !== '') {
      restructuredText.push(`<span class="postSquareRoot"><span>${formulaParser(parts[i])}</span></span>`);
    } else {
      restructuredText.push(`<span>${formulaParser(parts[i])}</span>`);
    }
  }
  return restructuredText.join('');
};

export default squareRootParser;
