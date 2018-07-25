
import formulaParser from '../utils/formulaParser';

const binomialParser = (question) => {
  if (question == null) return (<Text/>);
  const parts = question.split('@');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('/') > -1) {
      const binomial = parts[i].split('/');
      restructuredText.push(`<span class="binomial"><span class="topPart">${formulaParser(binomial[0])}</span><span class="bottomPart">${formulaParser(binomial[1])}</span></span>`);
    } else {
      restructuredText.push(`<span>${formulaParser(parts[i])}</span>`);
    }
  }
  return restructuredText.join('');
};

export default binomialParser;
