import Vue from 'vue';
import Router from 'vue-router';
import QuestionForm from '../components/QuestionForm';
import Questionstatus from '../components/QuestionStatus';
import QuestionReadlist from '../components/QuestionReadList';
import Formulas from '../components/Formulas';
import Images from '../components/Images';
import Index from '../components/Index';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/form/:dbRef',
      name: 'QuestionsForm',
      component: QuestionForm,
      props: true,
    },
    {
      path: '/readlist/:dbRef',
      name: 'QuestionReadlist',
      component: QuestionReadlist,
      props: true,
    },
    {
      path: '/status/:dbRef',
      name: 'QuestionsStatus',
      component: Questionstatus,
      props: true,
    },
    {
      path: '/formulas',
      name: 'Formulas',
      component: Formulas,
      props: true,
    },
    {
      path: '/Images/:dbRef',
      name: 'Images',
      component: Images,
      props: true,
    },
  ],
});
