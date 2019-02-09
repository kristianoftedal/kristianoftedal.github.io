import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import QuestionForm from '../components/QuestionForm';
import Questionstatus from '../components/QuestionStatus';
import QuestionReadlist from '../components/QuestionReadList';
import Login from '../components/login';
import Formulas from '../components/Formulas';
import Images from '../components/Images';
import Index from '../components/Index';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/form/:dbRef',
      name: 'QuestionsForm',
      component: QuestionForm,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/readlist/:dbRef',
      name: 'QuestionReadlist',
      component: QuestionReadlist,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/status/:dbRef',
      name: 'QuestionsStatus',
      component: Questionstatus,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/formulas',
      name: 'Formulas',
      component: Formulas,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/Images/:dbRef',
      name: 'Images',
      component: Images,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
