const questionParser = (question) => {
  if (question.indexOf('*') === -1) {
    return `<span>${question}</span>`;
  }
  if (question == null) return (<Text/>);

  let parts = question.split('*');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('_') > -1 && parts[i].indexOf('^') > -1) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j += 1) {
        if (tempParts[j].indexOf('_') > -1) {
          const x = tempParts[j].split('_');
          restructuredText.push(`
            <span>${x[0]}</span>`);
          restructuredText.push(
            `<sub>${x[1]}</sub>`);
        } else if (tempParts[j].indexOf('^') > -1) {
          const y = tempParts[j].split('^');
          restructuredText.push(`<span>${y[0]}</span>`);
          restructuredText.push(`<sup>${y[1]}</sup>`);
        } else {
          restructuredText.push(`<span>${tempParts[j]}</span>`);
        }
      }
    } else if (parts[i].indexOf('_') > -1) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j += 1) {
        if (tempParts[j].indexOf('_') > -1) {
          const x = tempParts[j].split('_');
          restructuredText.push(`<span>${x[0]}</span>`);
          restructuredText.push(`<sub>${x[1]}</sub>`);
        } else {
          restructuredText.push(`<span>${tempParts[j]}</span>`);
        }
      }
    } else if (parts[i].indexOf('^') > -1) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j += 1) {
        if (tempParts[j].indexOf('^') > -1) {
          const y = tempParts[j].split('^');
          restructuredText.push(`<span>${y[0]}</span>`);
          restructuredText.push(`<sup>${y[1]}</sup>`);
        } else {
          restructuredText.push(`<span>${tempParts[j]}</span>`);
        }
      }
    } else {
      restructuredText.push(`<span>${parts[i]}</span>`);
    }
  }
  parts = null;
  for (let i = 0; i < restructuredText.length; i += 1) {
    if (restructuredText[i] === '<span></span>') {
      restructuredText.splice(i, 1);
      i -= 1;
    }
  }
  return restructuredText.join('');
};

export default questionParser;
