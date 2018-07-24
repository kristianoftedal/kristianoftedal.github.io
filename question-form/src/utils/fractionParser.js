
import formulaParser from '../utils/formulaParser';

const fractionParser = (question) => {
  if (question == null) return (<Text/>);
  const parts = question.split('#');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('/') > -1) {
      const fraction = parts[i].split('/');
      restructuredText.push(`<span class="fraction"><span class="top">${formulaParser(fraction[0])}</span><span class="bottom">${formulaParser(fraction[1])}</span></span>`);
    } else {
      restructuredText.push(`<span>${formulaParser(parts[i])}</span>`);
    }
  }
  return restructuredText.join('');
};

export default fractionParser;
