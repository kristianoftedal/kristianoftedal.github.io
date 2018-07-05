import Vue from 'vue';
import Router from 'vue-router';
import NaturfagQuestionForm from '../components/naturfag/QuestionForm';
import NaturfagQuestionstatus from '../components/naturfag/QuestionStatus';
import NaturQuestionReadlist from '../components/naturfag/QuestionReadList';
import Kjemi2QuestionForm from '../components/kjemi2/QuestionForm';
import Kjemi2Questionstatus from '../components/kjemi2/QuestionStatus';
import Kjemi2QuestionReadlist from '../components/kjemi2/QuestionReadList';
import Kjemi1QuestionForm from '../components/kjemi1/QuestionForm';
import Kjemi1Questionstatus from '../components/kjemi1/QuestionStatus';
import Kjemi1QuestionReadlist from '../components/kjemi1/QuestionReadList';
import GeoQuestionForm from '../components/geo/QuestionForm';
import GeoQuestionstatus from '../components/geo/QuestionStatus';
import GeoQuestionReadlist from '../components/geo/QuestionReadList';
import OneTQuestionForm from '../components/1t/QuestionForm';
import OneTQuestionstatus from '../components/1t/QuestionStatus';
import OneTQuestionReadlist from '../components/1t/QuestionReadList';
import S1QuestionForm from '../components/s1/QuestionForm';
import S1Questionstatus from '../components/s1/QuestionStatus';
import S1QuestionReadlist from '../components/s1/QuestionReadList';
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
      path: '/s1/form',
      name: 'QuestionsForm',
      component: S1QuestionForm,
    },
    {
      path: '/s1/readlist',
      name: 'QuestionReadlist',
      component: S1QuestionReadlist,
    },
    {
      path: '/s1/status',
      name: 'QuestionsStatus',
      component: S1Questionstatus,
    },
    {
      path: '/1t/form',
      name: 'QuestionsForm',
      component: OneTQuestionForm,
    },
    {
      path: '/1t/readlist',
      name: 'QuestionReadlist',
      component: OneTQuestionReadlist,
    },
    {
      path: '/t1/status',
      name: 'QuestionsStatus',
      component: OneTQuestionstatus,
    },
    {
      path: '/kjemi1/form',
      name: 'QuestionsForm',
      component: Kjemi1QuestionForm,
    },
    {
      path: '/kjemi1/readlist',
      name: 'QuestionReadlist',
      component: Kjemi1QuestionReadlist,
    },
    {
      path: '/kjemi1/status',
      name: 'QuestionsStatus',
      component: Kjemi1Questionstatus,
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
      path: '/geo/form',
      name: 'QuestionsForm',
      component: GeoQuestionForm,
    },
    {
      path: '/geo/readlist',
      name: 'QuestionReadlist',
      component: GeoQuestionReadlist,
    },
    {
      path: '/geo/status',
      name: 'QuestionsStatus',
      component: GeoQuestionstatus,
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
