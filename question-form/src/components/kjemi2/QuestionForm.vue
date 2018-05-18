<template>
  <div class="row">
    <div class="eight columns">
      <h2>Legg inn spørsmål</h2>
      <form v-on:submit="addQuestion">
        <div class="row">
            <div class="twelve columns">
              <label for="qtxt">Spørsmål: </label><span>Formel-eksempler: *NO_3|*, *Cr_2|O_7|^2-|*,  *SO_4|^2-|*</span>
              <input v-model="question.questionText" class="u-full-width" type="text" id="qtxt">
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
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution2">B:</label>
            <input class="u-full-width"
              v-model="question.answers[1].value"
              type="text" id="solution2">
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution3">C:</label>
            <input class="u-full-width"
              v-model="question.answers[2].value"
              type="text" id="solution3">
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="solution4">D:</label>
            <input class="u-full-width"
              v-model="question.answers[3].value"
              type="text" placeholder="" id="solution4">
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
import images from './images';
import db from '../../firebase';
import categories from './categories';
import freeQuestions from './freeQuestions';

const kjemi2QuestionsRef = db.ref('kjemi2Questions');

export default {
  name: 'QuestionForm',
  firebase: {
    questions: db.ref('kjemi2Questions'),
  },
  computed: {
    questionsList() {
      return this.questions.slice().reverse();
    },
  },
  methods: {
    addQuestion() {
      kjemi2QuestionsRef.push(this.question);
      this.question = this.blankQuestion();
    },
    blankQuestion() {
      return {
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
      };
    },
    editQuestion(question) {
      this.question = question;
      this.deleteQuestion(question);
      delete this.question['.key'];
    },
    deleteQuestion(question) {
      kjemi2QuestionsRef.child(question['.key']).remove();
    },
    downloadFile() {

      // const questions = this.questions;
      const questions = this.questions.filter(e => freeQuestions.indexOf(e.id) >= 0);
      debugger;
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
      images,
      categories,
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

</style>
