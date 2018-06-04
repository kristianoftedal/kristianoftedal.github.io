import Vue from 'vue';
import Router from 'vue-router';
import NaturfagQuestionForm from '../components/naturfag/QuestionForm';
import NaturfagQuestionstatus from '../components/naturfag/QuestionStatus';
import NaturQuestionReadlist from '../components/naturfag/QuestionReadList';
import Kjemi2QuestionForm from '../components/kjemi2/QuestionForm';
import Kjemi2Questionstatus from '../components/kjemi2/QuestionStatus';
import Kjemi2QuestionReadlist from '../components/kjemi2/QuestionReadList';
import krigQuestionForm from '../components/krig/QuestionForm';
import krigQuestionstatus from '../components/krig/QuestionStatus';
import krigQuestionReadlist from '../components/krig/QuestionReadList';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/naturfag/form',
      name: 'QuestionsForm',
      component: NaturfagQuestionForm,
    },
    {
      path: '/naturfag/readlist',
      name: 'QuestionReadlist',
      component: NaturQuestionReadlist,
    },
    {
      path: '/naturfag/status',
      name: 'QuestionsStatus',
      component: NaturfagQuestionstatus,
    },
    {
      path: '/kjemi2/form',
      name: 'QuestionsForm',
      component: Kjemi2QuestionForm,
    },
    {
      path: '/kjemi2/readlist',
      name: 'QuestionReadlist',
      component: Kjemi2QuestionReadlist,
    },
    {
      path: '/kjemi2/status',
      name: 'QuestionsStatus',
      component: Kjemi2Questionstatus,
    },
    {
      path: '/krig/form',
      name: 'QuestionsForm',
      component: krigQuestionForm,
    },
    {
      path: '/krig/readlist',
      name: 'QuestionReadlist',
      component: krigQuestionReadlist,
    },
    {
      path: '/krig/status',
      name: 'QuestionsStatus',
      component: krigQuestionstatus,
    },
  ],
});
