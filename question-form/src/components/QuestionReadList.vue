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
          <button v-on:click="clickFilter('free')">
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
            <button class="button"
              v-if="!question.editable"
              v-on:click="editQuestion(question)">✎ Rediger</button>
            <button class="button" style="background-color: #e74c3c; color: #FFF"
              v-if="!question.editable"
              v-on:click="deleteQuestion(question)">💀 slett 💀</button>
            <button
              class="button-primary"
              v-if="question.editable"
              v-on:click="updateQuestion(question)">Lagre</button>
          </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <h5 v-html="textParser(question.questionText)"> {{isEdit[question.id]}}</h5>
            <input
              v-if="question.editable"
              v-model="question.questionText" class="u-full-width" type="text" id="qtxt">
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Forklaring:</span>
          </div>
          <div class="ten columns">
            <span v-html="textParser(question.explanation)"></span>
            <textarea
              v-if="question.editable"
              v-model="question.explanation"
              class="u-full-width" type="text" id="extxt"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>Kategori:</span>
          </div>
          <div class="ten columns">
            <span v-if="!question.editable" >{{question.category}}</span>
            <select v-if="question.editable"
              class="u-full-width" id="category" v-model="question.category">
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
            <span v-if="!isEdit.includes(question.id)">{{question.imageId ?
              images.filter(i => i.id === question.imageId)[0] : 'Nei'}}
            </span>
            <select
              v-if="question.editable"
              class="u-full-width" id="bilde" v-model="question.imageId">
              <option value="">Nei</option>
              <option
                v-bind:key="image.id"
                v-for="image in images"
                v-bind:value="image.id"
              >
                {{ image.image }}
              </option>
            </select>
            <img v-if="question.imageId"
            class="questionImage" v-bind:src="getImageSrc(question.imageId)"/>
          </div>
        </div>
        <div class="row">
          <div class="two columns">
            <span>A:</span>
          </div>
          <div class="ten columns">
            <span v-if="!question.editable"
              v-html="textParser(question.answers[0].value)"></span>
            <input
              v-if="question.editable"
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
            <span
              v-if="!question.editable"
              v-html="textParser(question.answers[1].value)"></span>
            <input
              v-if="question.editable"
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
            <span
              v-if="!question.editable"
              v-html="textParser(question.answers[2].value)"></span>
            <input
              v-if="question.editable"
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
            <span
              v-if="!question.editable"
              v-html="textParser(question.answers[3].value)"></span>
            <input
              v-if="question.editable"
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
            <span v-if="!question.editable">{{question.solution}}</span>
            <select
              v-if="question.editable"
              class="u-full-width" id="category" v-model="question.solution">
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
            <span v-if="!question.editable" >{{question.difficulty}}</span>
            <select v-if="question.editable" class="u-full-width"
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
import notie from 'notie';
import css from 'notie/dist/notie.min.css'; // eslint-disable-line
import prettyPrint from '../utils/prettyPrint';
import getImages from '../utils/imageHelper';
import db from '../firebase';
import getCategories from '../utils/categoryHelper';
import freeQuestionsHelper from '../utils/freeQuestionsHelper';
// import replace from './replace';

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
      if (this.categoryFilter && this.categoryFilter !== 'lost') {
        list = list.filter(q => q.category === this.categoryFilter);
      } else if (this.categoryFilter === 'lost') {
        list = list.filter(
          q =>
            !q.category ||
            q.category === '' ||
            q.category === ' ' ||
            !this.categories.includes(q.category),
        );
      } else if (this.categoryFilter === 'lost') {
        const freeQuestions = freeQuestionsHelper.getFreeQuestions(this.dbRef);
        list = list.filter(e => freeQuestions.indexOf(e.id) > -1);
      }

      if (this.search !== '') {
        list = list.filter(q =>
          q.questionText.indexOf(this.search) > -1 || q.imageId.indexOf(this.search) > -1);
      }
      // for (let i = 0; i < this.questions.length; i++) {
      //   const question = this.questions[i];
      //   for (let j = 0; j < replace.length; j++) {
      //     const current = replace[j];
      //     if (question.explanation)
      //       question.explanation = question.explanation.replace(current.key, current.value);
      //     question.questionText = question.questionText.replace(current.key, current.value);
      //     for (let k = 0; k < question.answers.length; k++) {
      //       question.answers[k].value =
      //          question.answers[k].value.replace(current.key, current.value);
      //     }
      //   }
      //   const key = question['.key'];
      //   delete question['.key'];
      //   db.ref(this.dbRef).child(key).update(question);
      // }
      return list;
    },
  },
  methods: {
    textParser(text) {
      return prettyPrint(text);
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
    editQuestion(question) {
      this.isEdit.push(question.id);
      question.editable = !question.editable; // eslint-disable-line
    },
    deleteQuestion(question) {
      db.ref(this.dbRef).child(question['.key']).remove();
      notie.alert({ type: 1, text: 'Spørsmål slettet 😀' });
    },
    updateQuestion(question) {
      question.editable = !question.editable; // eslint-disable-line
      const key = question['.key'];
      delete question['.key']; // eslint-disable-line
      db
        .ref(this.dbRef)
        .child(key)
        .update(question);
      this.isEdit.splice(this.isEdit.indexOf(question.id), 1);
      question['.key'] = key;
      notie.alert({ type: 1, text: 'Endring lagret 😀' });
    },
  },
  data() {
    return {
      categoryFilter: null,
      search: '',
      questions: {},
      isEdit: [],
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
