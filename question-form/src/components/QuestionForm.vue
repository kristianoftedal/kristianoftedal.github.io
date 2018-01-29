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
            <option value="Option 1">Bilde 1</option>
            <option value="Option 2">Bilde 2</option>
            <option value="Option 3">Bilde 3</option>
            <option value="Option 3">Bilde 4</option>
            <option value="Option 3">Bilde 5</option>
            <option value="Option 3">Bilde 6</option>
            <option value="Option 3">Bilde 7</option>
            <option value="Option 3">Bilde 8</option>
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
          <input v-model="question.solution"
          class="u-full-width"
          type="text" placeholder="A" id="solution">
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
        <li v-bind:key="question.questionText" v-for="question in savedQuestions">
          <span>{{question.questionText}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionForm',
  computed: {
    savedQuestions() {
      debugger;
      const questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
      return questions;
    }
  },
  methods: {
    addQuestion() {
      let questions = [];
      if (!JSON.parse(localStorage.getItem('naturfagSpørsmål'))) {
        questions = [];
      } else {
        questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
      }
      const question = JSON.stringify(this.question);
      questions.push(this.question);
      const stringified = JSON.stringify(questions);
      localStorage.setItem('naturfagSpørsmål', stringified);
    },
    downloadFile() {
      const questions = JSON.parse(localStorage.getItem('naturfagSpørsmål'));
      const fileName = 'questions.json';
      const data =  'data:text/json;charset=utf-8,' + encodeURI(JSON.stringify(questions));
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
