
import formulaParser from '../utils/formulaParser';

const squareRootParser = (question) => {
  if (question == null) return (<Text />);
  const parts = question.split('$');
  const restructuredText = [];
  let postSquareRoot = -1;
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('√') > -1) {
      const tempParts = parts[i].split('√');
      if (tempParts[0] === '') {
        restructuredText.push('<span class="squareRoot">√</span>');
        restructuredText.push(`<span class="squareRoot">${formulaParser(tempParts[1])}</span>`);
      } else {
        restructuredText.push(`<span class="squareRoot">${formulaParser(tempParts[0])}</span>`);
        restructuredText.push('<span class="squareRoot">√</span>');
      }
      postSquareRoot = i + 2;
    } else if (parts[i] === '') {
      // do nothing
    } else if (i < postSquareRoot) {
      restructuredText.push(`<span class="postSquareRoot">${formulaParser(parts[i])}</span>`);
    } else {
      restructuredText.push(`<span class="">${formulaParser(parts[i])}</span>`);
    }
  }
  return restructuredText.join('');
};

export default squareRootParser;
