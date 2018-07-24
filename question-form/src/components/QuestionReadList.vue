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
          <button v-on:click="clickFilter('lost')">
            glemt/gammel kategori
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
      <hr/>
      <div v-bind:key="question['.key']" v-for="question in filteredQuestions">
        <div class="row">
          <div class="ten columns">
            <span>id: {{question.id}}</span>
          </div>
          <div class="one columns">
            <button class="button" v-if="!isEdit" v-on:click="editQuestion()">✎ Rediger</button>
            <button class="button-primary" v-if="isEdit" v-on:click="updateQuestion(question)">Lagre</button>
          </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <h5 v-html="textParser(question.questionText)"></h5>
            <input v-if="isEdit" v-model="question.questionText" class="u-full-width" type="text" id="qtxt">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Forklaring:</span>
          </div>
          <div class="ten columns">
            <span v-html="textParser(question.explanation)"></span>
            <textarea v-if="isEdit" v-model="question.explanation" class="u-full-width" type="text" id="extxt"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Kategori:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit" >{{question.category}}</span>
            <select v-if="isEdit" class="u-full-width" id="category" v-model="question.category">
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
          <div class="two columns">
            <span>Bilde:
            </span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit">{{question.imageId ?
              images.filter(i => i.id === question.imageId)[0] : 'Nei'}}
            </span>
            <select v-if="isEdit" class="u-full-width" id="bilde" v-model="question.imageId">
              <option value="">Nei</option>
              <option
                v-bind:key="image.id"
                v-for="image in images"
                v-bind:value="image.id"
              >
                {{ image.image }}
              </option>
            </select>
            <img v-if="question.imageId" class="questionImage" v-bind:src="getImageSrc(question.imageId)"/>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>A:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit"  v-html="textParser(question.answers[0].value)"></span>
            <input
              v-if="isEdit"
              class="u-full-width"
              type="text"
              v-model="question.answers[0].value"
              id="solution1">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>B:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit" v-html="textParser(question.answers[1].value)"></span>
            <input
              v-if="isEdit"
              class="u-full-width"
              type="text"
              v-model="question.answers[1].value"
              id="solution1">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>C:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit" v-html="textParser(question.answers[2].value)"></span>
            <input
              v-if="isEdit"
              class="u-full-width"
              type="text"
              v-model="question.answers[2].value"
              id="solution1">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
          <span>D:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit" v-html="textParser(question.answers[3].value)"></span>
            <input
              v-if="isEdit"
              class="u-full-width"
              type="text"
              v-model="question.answers[3].value"
              id="solution1">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Fasit:</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit">{{question.solution}}</span>
            <select v-if="isEdit" class="u-full-width" id="category" v-model="question.solution">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Vanskelighetsgrad</span>
          </div>
          <div class="ten columns">
            <span v-if="!isEdit" >{{question.difficulty}}</span>
            <select v-if="isEdit" class="u-full-width"
              id="solution" v-model="question.difficulty">
              <option value="Lett">Lett</option>
              <option value="Middels">Middels</option>
              <option value="Vanskelig">Vanskelig</option>
            </select>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import formulaParser from '../utils/formulaParser';
import fractionParser from '../utils/fractionParser';
import getImages from '../utils/imageHelper';
import db from '../firebase';
import getCategories from '../utils/categoryHelper';
import notie from 'notie';
import css from 'notie/dist/notie.min.css';
import categories from './s1/categories';

export default {
  name: 'QuestionReadList',
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
    filteredQuestions() {
      let list = this.questions;
      if (this.categoryFilter) {
        list = list.filter(q => q.category === this.categoryFilter);
      }
      if (this.categoryFilter === 'lost') {
        list = list.filter(q => !q.category || q.category === '' || !this.categories.includes(q.category));
      }
      if (this.search !== '') {
        list = list.filter(q => q.questionText.indexOf(this.search) > -1);
      }
      // return list;
      // for (let i = 0; i < this.questions.length; i++) {
      //   if (this.questions[i].category === 'Kjemiske bindinger') {
      //     debugger;
      //     const question = this.questions[i];
      //     question.category = 'Kjemiske bindinger og reaksjonstyper';
      //     const key = question['.key'];
      //     delete question['.key'];
      //     db.ref(this.dbRef).child(key).update(question);
      //   }
      //   if (this.questions[i].category === 'Termokjemi') {
      //     debugger;
      //     const question = this.questions[i];
      //     question.category = 'Termokjemi og reaksjonshastighet';
      //     const key = question['.key'];
      //     delete question['.key'];
      //     db.ref(this.dbRef).child(key).update(question);
      //   }
      // }
      return list;
    },
    isEditable() {
      return this.isEdit;
    }
  },
  methods: {
    textParser(text) {
      if (!text)
        return `<span></span>`;
      if (text.indexOf('*') > -1 && text.indexOf('#') > -1) {
        return fractionParser(text);
      }
      if (text.indexOf('*') > -1 && !text.indexOf('#') > -1)
        return formulaParser(text);
      if (text.indexOf('#') > -1)
        return fractionParser(text);
      return `<span>${text}</span>`;
    },
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
    editQuestion() {
      this.isEdit = !this.isEdit;
    },
    updateQuestion(question) {
      const key = question['.key'];
      delete question['.key'];
      db.ref(this.dbRef).child(key).update(question);
      this.isEdit = !this.isEdit;
      notie.alert({type: 1, text: 'Endring lagret 😀'});
    }
  },
  data() {
    return {
      categoryFilter: null,
      search: '',
      questions: {},
      isEdit: false,
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.questionImage {
  width: 70%;
}
</style>
