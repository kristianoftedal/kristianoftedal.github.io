import naturfagImages from '../components/naturfag/images';
import OnetImages from '../components/1t/images';
import geoImages from '../components/geo/images';
import kjemi1Images from '../components/kjemi1/images';
import kjemi2Images from '../components/kjemi2/images';
import fysikk1Images from '../components/fysikk1/images';
import s1Images from '../components/s1/images';
import r1Images from '../components/r1/images';
import onePImages from '../components/1p/images';
import bio1Images from '../components/bio1/images';
import bio2Images from '../components/bio2/images';

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
    return s1Images;
  }
  if (subject.indexOf('geo') > -1) {
    return geoImages;
  }
  if (subject.indexOf('r1') > -1) {
    return r1Images;
  }
  if (subject.indexOf('1p') > -1) {
    return onePImages;
  }
  if (subject.indexOf('bio1') > -1) {
    return bio1Images;
  }
  if (subject.indexOf('bio2') > -1) {
    return bio2Images;
  }
  return null;
};

export default getImages;
