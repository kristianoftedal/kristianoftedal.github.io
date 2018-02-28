<template>
  <div class="row">
    <div class="twelve columns">
      <h2>Leselisten over spørsmål</h2>
      <div v-bind:key="question['.key']" v-for="question in questions">
        <div class="row">
          <div class="twelve columns">
            <h5>{{question.questionText}}</h5>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Kategori:</span>
          </div>
          <div class="ten columns">
            <span>{{question.category}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Bilde:
            </span>
          </div>
          <div class="ten columns">
            <span>{{question.imageId ?
              images.filter(i => i.id === question.imageId)[0] : 'Nei'}}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>A:</span>
          </div>
          <div class="ten columns">
            <span>{{question.answers[0].value}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>B:</span>
          </div>
          <div class="ten columns">
            <span>{{question.answers[1].value}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>C:</span>
          </div>
          <div class="ten columns">
            <span>{{question.answers[2].value}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
          <span>D:</span>
          </div>
          <div class="ten columns">
            <span>{{question.answers[3].value}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Fasit:</span>
          </div>
          <div class="ten columns">
            <span>{{question.solution}}</span>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Vanskelighetsgrad</span>
          </div>
          <div class="ten columns">
            <span>{{question.difficulty}}</span>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v1';
import images from './images';
import db from '../firebase';
import categories from './categories';

console.log(images);
const naturfagQuestionsRef = db.ref('naturfagQuestions');

export default {
  name: 'QuestionReadList',
  firebase: {
    questions: naturfagQuestionsRef,
  },
  data() {
    return {
      images,
      questions: {},
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
