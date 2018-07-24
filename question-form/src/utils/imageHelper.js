import naturfagImages from '../components/naturfag/images';
import OnetImages from '../components/1t/images';
import geoImages from '../components/geo/images';
import kjemi1Images from '../components/kjemi1/images';
import kjemi2Images from '../components/kjemi2/images';
import fysikk1Images from '../components/fysikk1/images';
import s11tImages from '../components/s1/images';


const getImages = (subject) => {
  if (subject.indexOf('naturfag') > -1) {
    return naturfagImages;
  }
  if (subject.indexOf('1t') > -1) {
    return OnetImages;
  }
  if (subject.indexOf('kjemi1') > -1) {
    return kjemi1Images;
  }
  if (subject.indexOf('kjemi2') > -1) {
    return kjemi2Images;
  }
  if (subject.indexOf('fysikk1') > -1) {
    return fysikk1Images;
  }
  if (subject.indexOf('naturfag') > -1) {
    return naturfagImages;
  }
  if (subject.indexOf('s1') > -1 || subject.indexOf('1t') > -1) {
    return s11tImages;
  }
  if (subject.indexOf('geo') > -1) {
    return geoImages;
  }
  return null;
};

export default getImages;
