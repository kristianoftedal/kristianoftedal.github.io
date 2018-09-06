<template>
  <div class='container'>
    <div class='row'>
      <div class='twelve columns'>
        <h3>Oversikt</h3>
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Vanskelighetsgrad</th>
              <th>Antall spørsmål</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lett</td>
              <td>{{easyCount}}</td>
            </tr>
            <tr>
              <td>Middels</td>
              <td>{{mediumCount}}</td>
            </tr>
            <tr>
              <td>Vanskelig</td>
              <td>{{hardCount}}</td>
            </tr>
          </tbody>
        </table>
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Tema</th>
              <th>Antall spørsmål</th>
              <th>Antall lette</th>
              <th>Antall middels</th>
              <th>Antall vanskelige</th>
              <th>Antall uten forklaring</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoryCount in categoryCounts" v-bind:key="categoryCount.name">
              <td>{{categoryCount.name}}</td>
              <td>{{categoryCount.count}}</td>
              <td>{{categoryCount.easyCount}}</td>
              <td>{{categoryCount.mediumCount}}</td>
              <td>{{categoryCount.hardCount}}</td>
              <td>{{categoryCount.noExplanationCount}}</td>
            </tr>
          </tbody>
        </table>
        <h6>De uten forklaring:</h6>
        <ul>
          <li v-for="question in noExplanationCount" v-bind:key="question.id">
            <span>{{question.id}}</span>
            <span>{{question.questionText}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase';
import getCategories from '../utils/categoryHelper';

export default {
  name: 'QuestionStatus',
  props: ['dbRef'],
  firebase() {
    return {
      questions: db.ref(this.dbRef),
    };
  },
  data() {
    return {
      question: {},
      firebaseRef: '',
    };
  },
  computed: {
    easyCount() {
      return this.questions.filter(q => q.difficulty === 'Lett').length;
    },
    mediumCount() {
      return this.questions.filter(q => q.difficulty === 'Middels').length;
    },
    hardCount() {
      return this.questions.filter(q => q.difficulty === 'Vanskelig').length;
    },
    noExplanationCount() {
      return this.questions.filter(q => q.explanation === '' || !q.explanation);
    },
    categoryCounts() {
      const categoriesCount = [];
      const categories = getCategories(this.dbRef);
      for (let i = 0; i < categories.length; i += 1) {
        const count = this.questions.filter(q => q.category === categories[i])
          .length;
        const easyCount = this.questions.filter(
          q => q.category === categories[i] && q.difficulty === 'Lett',
        ).length;
        const mediumCount = this.questions.filter(
          q => q.category === categories[i] && q.difficulty === 'Middels',
        ).length;
        const hardCount = this.questions.filter(
          q => q.category === categories[i] && q.difficulty === 'Vanskelig',
        ).length;
        const noExplanationCount = this.questions.filter(
          q =>
            q.category === categories[i] &&
            (q.explanation === '' || !q.explanation),
        ).length;
        categoriesCount.push({
          name: categories[i],
          count,
          easyCount,
          mediumCount,
          hardCount,
          noExplanationCount,
        });
      }
      return categoriesCount;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.kjemiaLogo {
  font-family: 'Lato', sans-serif !important;
}
.kjemiaImage {
  width: 200px;
}
</style>
