<template>
  <div class="row">
    <div class="twelve columns">
      <h2>Hvordan legge inn formler:</h2>
      <div>
        Vi har et enkelt kodespråk for enkle uttrykk som du ser i tabellen under,
        for mer avanserte ting anbefaler vi at du bruker unicode sine mattesymboler
        eller lager et bilde av uttrykket
      </div>
      <div>Samling av unicode mattesymboler finner du
        <a target="_blank" href="https://www.compart.com/en/unicode/category/Sm">her</a>
        . Marker symbolet og copy-paste.
      </div>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Type</th>
            <th>Koding</th>
            <th>Resultat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Superscript</td>
            <td>*x^2|*</td>
            <td><span v-html="textParser('*x^2|*')"></span></td>
          </tr>
          <tr>
            <td>Subscript</td>
            <td>*x_2|*</td>
            <td><span v-html="textParser('*x_2|*')"></span></td>
          </tr>
          <tr>
            <td>Fraction</td>
            <td>#x-2/x-3#</td>
            <td><span v-html="textParser('#x-2/x-3#')"></span></td>
          </tr>
          <tr>
            <td>Binomial</td>
            <td>@a b/a b@</td>
            <td><span v-html="textParser('@x-2/x-3@')"></span></td>
          </tr>
          <tr>
            <td>Square root</td>
            <td>√$x-2$</td>
            <td><span v-html="textParser('√$x-2$')"></span></td>
          </tr>
          <tr>
            <td>Combo #1</td>
            <td>*Cr_23|O_73|^2-|*</td>
            <td><span v-html="textParser('*Cr_23|O_73|^2-|*')"></span></td>
          </tr>
          <tr>
            <td>Combo #2</td>
            <td>#*x^2|*/*x_2|*#</td>
            <td><span v-html="textParser('#*x^2|*/*x_2|*#')"></span></td>
          </tr>
          <tr>
            <td>Combo #3</td>
            <td>(#x-2/x-3#)*^2|*</td>
            <td><span v-html="textParser('(#x-2/x-3#)*^2|*')"></span></td>
          </tr>
          <tr>
            <td>Combo #4</td>
            <td>√$*x-2^2|*$</td>
            <td><span v-html="textParser('*x_2|* = √$ *x-2^2|* $ fordi *x^2|* bla bla')"></span></td>
          </tr>
        </tbody>
      </table>
      <div class="row">
          <div class="twelve columns">
            <label>Prøv selv</label>
            <input v-model="formula" class="u-full-width" type="text" id="qtxt">
            <span class="u-full-width" v-html="textParser(formula)"></span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import prettyPrint from '../utils/prettyPrint';

export default {
  name: 'Forumlas',
  methods: {
    textParser(text) {
      return prettyPrint(text);
    },
  },
  data() {
    return {
      formula: '',
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
