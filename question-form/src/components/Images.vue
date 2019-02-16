<template>
  <div class="row">
    <div class="twelve columns">
      <h5>Bilder til spørsmål</h5>
      <hr>
      <div v-for="image in images" :key="image.id" v-if="image.src">
        <h5 class="header">{{getReadableImageName(image.src)}}</h5>
        <div class="row">
          <div class="four columns">
            <img class="questionImage" v-bind:src="image.src"/>
            <div><span class="text-align: center;">{{image.imageId}}</span></div>
          </div>
          <div class="eight columns">
            <div v-for="question in image.questions" :key="question.questionText">
              {{question.text}} | {{question.id}}
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import isotope from 'vueisotope';
import db from '../firebase';
import getImages from '../utils/imageHelper';
import getCategories from '../utils/categoryHelper';

export default {
  name: 'Images',
  props: ['dbRef'],
  components: {
    isotope,
  },
  firebase() {
    return {
      questions: db.ref(this.dbRef),
    }
  },
  methods: {
    clickFilter(filter) {
      this.categoryFilter = filter;
    },
    getReadableImageName(src) {
      if (!src) return '';
      const splitted = src.split('/');
      const temp  =splitted[splitted.length - 1];
      return temp.split('.')[0];
    }
  },
  computed: {
    categories: () => {
      return getCategories(this.dbRef);
    },
    images() {
      const pureImages = getImages(this.dbRef);
      const images = [];
      for (let i = 0; i < pureImages.length; i += 1) {
        const questions = this.questions.filter(q => q.imageId === pureImages[i].id).map(q => (
          {
            id: q.id,
            text: q.questionText,
          })
        );
        images.push({
          imageId: pureImages[i].id,
          src: pureImages[i].src,
          questions,
        });
      }
      return images;
    },
  },
};
</script>
<style scoped>
.header {
  text-align: center;
}
.questionImage {
  width: 80%;
}

</style>
