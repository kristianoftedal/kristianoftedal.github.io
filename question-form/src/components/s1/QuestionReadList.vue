<template>
  <div class="row">
    <div class="twelve columns">
      <h2>Leselisten over spørsmål</h2>
      <div class="row">
        <div class="twelve columns">
          <button
            class="button-primary"
            v-on:click="clickFilter(category)"
            v-for="category in categories"
            v-bind:key="category">{{category}}
          </button>
          <button v-on:click="clickFilter(null)">
            ingen kategori, takk
          </button>
        </div>
      </div>
      <div class="row">
        <div class="eleven columns">
          <input class="u-full-width"
            placeholder="søk i spørsmålstekst"
            type="text"
            v-model="search"
          />
        </div>
        <div class="one columns">
          <button class="button" v-on:click="resetSearch()">X</button>
        </div>
      </div>

      <div v-bind:key="question['.key']" v-for="question in filteredQuestions">
        <div class="row">
          <div class="twelve columns">
            <h5>id: {{question.id}}</h5>
          </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <h5>{{question.questionText}}</h5>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Forklaring:</span>
          </div>
          <div class="ten columns">
            <span>{{question.explanation}}</span>
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
            <img v-if="question.imageId" class="questionImage" v-bind:src="getImageSrc(question.imageId)"/>
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
import images from './images';
import db from '../../firebase';
import categories from './categories';

const naturfagQuestionsRef = db.ref('s1Questions');

export default {
  name: 'QuestionReadList',
  firebase: {
    questions: naturfagQuestionsRef,
  },
  computed: {
    filteredQuestions() {
      let list = this.questions;
      if (this.categoryFilter) {
        list = list.filter(q => q.category === this.categoryFilter);
      }
      if (this.search !== '') {
        list = list.filter(q => q.questionText.indexOf(this.search) > -1);
      }
      return list;
    },
  },
  methods: {
    getImageSrc(id) {
      const image = this.images.find(e => e.id === id);
      if (image) {
        return image.src;
      }
      return '';
    },
    clickFilter(filter) {
      this.categoryFilter = filter;
    },
    resetSearch() {
      this.search = '';
    },
  },
  data() {
    return {
      categories,
      categoryFilter: null,
      search: '',
      images,
      questions: {},
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.questionImage {
  width: 80%;
}
</style>
