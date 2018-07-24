import naturfagCategories from '../components/naturfag/categories';
import OnetCategories from '../components/1t/categories';
import geoCategories from '../components/geo/categories';
import kjemi1Categories from '../components/kjemi1/categories';
import kjemi2Categories from '../components/kjemi2/categories';
import fysikk1Categories from '../components/fysikk1/categories';
import s1Categories from '../components/s1/categories';


const getCategories = (subject) => {
  if (subject.indexOf('naturfag') > -1) {
    return naturfagCategories;
  }
  if (subject.indexOf('1t') > -1) {
    return OnetCategories;
  }
  if (subject.indexOf('kjemi1') > -1) {
    return kjemi1Categories;
  }
  if (subject.indexOf('kjemi2') > -1) {
    return kjemi2Categories;
  }
  if (subject.indexOf('fysikk1') > -1) {
    return fysikk1Categories;
  }
  if (subject.indexOf('naturfag') > -1) {
    return naturfagCategories;
  }
  if (subject.indexOf('s1') > -1) {
    return s1Categories;
  }
  if (subject.indexOf('geografi') > -1) {
    return geoCategories;
  }
  return null;
};

export default getCategories;
