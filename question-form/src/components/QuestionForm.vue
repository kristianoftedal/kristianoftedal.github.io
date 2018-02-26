<template>
  <div class="container">
    <h2>Legg inn spørsmål</h2>
    <form v-on:submit="addQuestion">
      <div class="row">
          <div class="twelve columns">
            <label for="qtxt">Spørsmål:</label>
            <input v-model="question.questionText" class="u-full-width" type="text" id="qtxt">
          </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <label for="category">Kategori</label>
          <select class="u-full-width" id="category" v-model="question.category">
            <option value="Ernæring og helse">Ernæring og helse</option>
            <option value="Økologi">Økologi</option>
            <option value="Bærekraftig utvikling">Bærekraftig utvikling</option>
            <option value="Elektromagnetisk stråling">Elektromagnetisk stråling</option>
            <option value="Radioaktiv stråling">Radioaktiv stråling</option>
            <option value="Redoksreaksjoner">Redoksreaksjoner</option>
            <option value="Energi for fremtiden">Energi for fremtiden</option>
            <option value="Arv og bioteknologi">Arv og bioteknologi</option>
            <option value="Forskning">Forskning</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <label for="bilde">Bilde?</label>
          <select class="u-full-width" id="bilde" v-model="question.imageId">
            <option value="">Nei</option>
            <option v-bind:key="image.id" v-for="image in images" v-bind:value="image.id">{{ image.image }}</option>
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
    <div class="row">
      <ul>
        <li v-bind:key="question.id" v-for="question in savedQuestions">
          <a v-on:click="editQuestion(question.id)">{{question.questionText}}</a>
          <button v-on:click="deleteQuestion(question.id)" class="button">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v1';
import QuestionsService from './questionsService';
import images from './images';

export default {
  name: 'QuestionForm',
  computed: {
    savedQuestions() {
      const questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
      return questions;
    },
  },
  methods: {
    addQuestion() {
      const questionsService = new QuestionsService();
      questionsService.addQuestion(this.question);
    },
    editQuestion(id) {
      const question = this.savedQuestions.find(e => e.id === id);
      const index = this.savedQuestions.findIndex(e => e.id === id);
      const questionsService = new QuestionsService();
      questionsService.removeQuestion(this.question.id);
      this.savedQuestions.splice(index, 1);
      this.question = question;
    },
    deleteQuestion(id) {
      debugger;
      const questionsService = new QuestionsService();
      questionsService.removeQuestion(this.question.id);
      const index = this.savedQuestions.findIndex(e => e.id === id);
      this.savedQuestions.splice(index, 1);
      window.location.reload();
    },
    downloadFile() {
      const questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
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
      images: images,
      question: {
        id: uuid(),
        questionText: '',
        imageId: '8e846ed7-a6d7-443a-86aa-b1a4cd69b2c8',
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
        category: 'Ernæring og helse',
      },
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
