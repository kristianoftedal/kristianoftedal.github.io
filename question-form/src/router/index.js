import Vue from 'vue';
import Router from 'vue-router';
import QuestionForm from '../components/QuestionForm';
import Questionstatus from '../components/QuestionStatus';
import QuestionReadlist from '../components/QuestionReadList';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/form',
      name: 'QuestionsForm',
      component: QuestionForm,
    },
    {
      path: '/readlist',
      name: 'QuestionReadlist',
      component: QuestionReadlist,
    },
    {
      path: '/',
      name: 'QuestionsStatus',
      component: Questionstatus,
    },
  ],
});
