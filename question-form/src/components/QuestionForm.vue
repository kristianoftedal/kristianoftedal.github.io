<template>
  <div class="row">
    <div class="eight columns">
      <h2>Legg inn spørsmål</h2>
      <form v-on:submit="addQuestion">
        <div class="row">
            <div class="twelve columns">
              <label for="qtxt">Spørsmål: </label>
              <span>
                Formel-eksempler: *NO_3|*, *Cr_2|O_7|^2-|*,
                *SO_4|^2-|*, #(x-2)/(x-3)#, #*x^2|*/*x_2|*#alert
              <router-link target="_blank" to="/formulas">Mer om formler</router-link>
              </span><br/>
              <input v-model="question.questionText" class="u-full-width" type="text" id="qtxt">
              <span class="u-full-width" v-html="textParser(question.questionText)"></span>
            </div>
        </div>
        <div class="row">
            <div class="twelve columns">
              <label for="extxt">Forklaring: </label>
              <textarea
                v-model="question.explanation"
                  class="u-full-width" type="text" id="extxt"></textarea>
            </div>
            <div class="twelve columns">
              <span class="u-full-width" v-html="textParser(question.explanation)"></span>
            </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <label for="category">Kategori</label>
            <select class="u-full-width" id="category" v-model="question.category">
              <option v-bind:key="category"
                v-for="category in categories"
                v-bind:value="category"
              >
                {{category}}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <label for="bilde">Bilde?</label>
            <select class="u-full-width" id="bilde" v-model="question.imageId">
              <option value="">Nei</option>
              <option
                v-bind:key="image.id"
                v-for="image in images"
                v-bind:value="image.id"
              >
                {{ image.image }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution1">A:</label>
            <input
              class="u-full-width"
              type="text"
              v-model="question.answers[0].value"
              id="solution1">
          </div>
          <div class="six columns">
            <br/>
            <span
              class="u-full-width" v-html="textParser(question.answers[0].value)">
            </span>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution2">B:</label>
            <input class="u-full-width"
              v-model="question.answers[1].value"
              type="text" id="solution2">
          </div>
          <div class="six columns">
            <br/>
            <span
              class="u-full-width" v-html="textParser(question.answers[1].value)">
            </span>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution3">C:</label>
            <input class="u-full-width"
              v-model="question.answers[2].value"
              type="text" id="solution3">
          </div>
          <div class="six columns">
            <br/>
            <span
              class="u-full-width" v-html="textParser(question.answers[2].value)">
            </span>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution4">D:</label>
            <input class="u-full-width"
              v-model="question.answers[3].value"
              type="text" placeholder="" id="solution4">
          </div>
          <div class="six columns">
            <br/>
            <span
              class="u-full-width" v-html="textParser(question.answers[3].value)">
            </span>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution">FASIT:</label>
            <select class="u-full-width" id="category" v-model="question.solution">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <label for="difficulty">Vanskelighetsgrad</label>
            <select class="u-full-width"
              id="solution" v-model="question.difficulty">
              <option value="Lett">Lett</option>
              <option value="Middels">Middels</option>
              <option value="Vanskelig">Vanskelig</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <label for="lang">Språk</label>
            <select class="u-full-width" id="lang" v-model="question.lang">
              <option value="no">no</option>
              <option value="en">en</option>
            </select>
          </div>
        </div>
        <input class="button-primary" type="submit" value="Submit">
        <a v-on:click="downloadFile" class="button" type="button">Last ned</a>
      </form>
    </div>
    <div class="four columns">
      <ul>
        <li v-bind:key="question['.key']" v-for="question in questionsList">
          <a v-on:click="editQuestion(question)">{{question.questionText}}</a>
          <button v-on:click="deleteQuestion(question)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v1';
import notie from 'notie';
import css from 'notie/dist/notie.min.css'; // eslint-disable-line
import db from '../firebase';
import getCategories from '../utils/categoryHelper';
import freeQuestionsHelper from '../utils/freeQuestionsHelper';
import getImages from '../utils/imageHelper';
import prettyPrint from '../utils/prettyPrint';
// import freeQuestions from './naturfag/freeQuestions';

export default {
  name: 'QuestionForm',
  props: ['dbRef'],
  firebase() {
    return {
      questions: db.ref(this.dbRef),
    };
  },
  computed: {
    images() {
      return getImages(this.dbRef);
    },
    categories() {
      return getCategories(this.dbRef);
    },
    questionsList() {
      return this.questions.slice().reverse();
    },
  },
  methods: {
    addQuestion() {
      if (this.question['.key']) {
        const key = this.question['.key'];
        delete this.question['.key'];
        db.ref(this.dbRef).child(key).update(this.question);
        notie.alert({ type: 1, text: 'Spørsmål endret 😀' });
      } else {
        db.ref(this.dbRef).push(this.question);
        this.question = this.blankQuestion();
        notie.alert({ type: 1, text: 'Spørsmål opprettet 😀' });
      }
    },
    textParser(text) {
      return prettyPrint(text);
    },
    blankQuestion() {
      return {
        id: uuid(),
        questionText: '',
        explanation: '',
        imageId: '',
        answers: [
          {
            key: 'a',
            value: '',
          },
          {
            key: 'b',
            value: '',
          },
          {
            key: 'c',
            value: '',
          },
          {
            key: 'd',
            value: '',
          },
        ],
        difficulty: 'Lett',
        solution: '',
        lang: 'no',
        category: '',
      };
    },
    editQuestion(question) {
      this.question = question;
    },
    deleteQuestion(question) {
      db.ref(this.dbRef).child(question['.key']).remove();
      notie.alert({ type: 1, text: 'Spørsmål slettet 😀' });
    },
    downloadFile() {
      //const freeQuestions = freeQuestionsHelper(this.dbRef);
      //const questions = this.questions.filter(x => freeQuestions.indexOf(x.id) >= 0);
      const questions = this.questions;
      const fileName = 'questions.json';
      let data = 'data:text/json;charset=utf-8,@';
      data += encodeURI(JSON.stringify(questions));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', data);
      downloadAnchorNode.setAttribute('download', fileName);
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
  },
  data() {
    return {
      question: {
        id: uuid(),
        questionText: '',
        imageId: '',
        answers: [
          {
            key: 'a',
            value: '',
          },
          {
            key: 'b',
            value: '',
          },
          {
            key: 'c',
            value: '',
          },
          {
            key: 'd',
            value: '',
          },
        ],
        difficulty: 'Lett',
        solution: '',
        lang: 'no',
        category: '',
      },
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
a {
    cursor: pointer;
}
ul {
  list-style-type: none;
}
</style>
