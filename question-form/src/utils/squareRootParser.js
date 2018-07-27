
import formulaParser from '../utils/formulaParser';

const squareRootParser = (question) => {
  if (question == null) return (<Text/>);
  const parts = question.split('$');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i] === '√') {
      restructuredText.push(`<span class="squareRoot">${parts[i]}</span>`);
    } else if (parts[i] === '') {
      // do nothing
    } else if (i < 2) {
      restructuredText.push(`<span class="postSquareRoot"><span>${formulaParser(parts[i])}</span></span>`);
    } else {
      restructuredText.push(`<span>${formulaParser(parts[i])}</span>`);
    }
  }
  return restructuredText.join('');
};

export default squareRootParser;
