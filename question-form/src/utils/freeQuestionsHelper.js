import naturfagfreeQuestions from '../components/naturfag/freeQuestions';
import OnetfreeQuestions from '../components/1t/freeQuestions';
import geofreeQuestions from '../components/geo/freeQuestions';
import kjemi1freeQuestions from '../components/kjemi1/freeQuestions';
import kjemi2freeQuestions from '../components/kjemi2/freeQuestions';
import fysikk1freeQuestions from '../components/fysikk1/freeQuestions';
import s1freeQuestions from '../components/s1/freeQuestions';
import onePfreeQuestions from '../components/1p/freeQuestions';
import r1freeQuestions from '../components/r1/freeQuestions';
import bio1FreeQuestions from '../components/bio1/freeQuestions';
import bio2FreeQuestions from '../components/bio2/freeQuestions';


const getFreeQuestions = (subject) => {
  if (subject.indexOf('naturfag') > -1) {
    return naturfagfreeQuestions;
  }
  if (subject.indexOf('1t') > -1) {
    return OnetfreeQuestions;
  }
  if (subject.indexOf('kjemi1') > -1) {
    return kjemi1freeQuestions;
  }
  if (subject.indexOf('kjemi2') > -1) {
    return kjemi2freeQuestions;
  }
  if (subject.indexOf('fysikk1') > -1) {
    return fysikk1freeQuestions;
  }
  if (subject.indexOf('naturfag') > -1) {
    return naturfagfreeQuestions;
  }
  if (subject.indexOf('s1') > -1) {
    return s1freeQuestions;
  }
  if (subject.indexOf('geo') > -1) {
    return geofreeQuestions;
  }
  if (subject.indexOf('r1') > -1) {
    return r1freeQuestions;
  }
  if (subject.indexOf('1p') > -1) {
    return onePfreeQuestions;
  }
  if (subject.indexOf('bio1') > -1) {
    return bio1FreeQuestions;
  }
  if (subject.indexOf('bio2') > -1) {
    return bio2FreeQuestions;
  }
  return null;
};

export default getFreeQuestions;
