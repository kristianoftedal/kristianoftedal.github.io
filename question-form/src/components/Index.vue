<template>
  <div id="app">
    <div class="container">
      <h1>Kjemia sin spørsmålsbank</h1>
      <div class="row">
        Finner du ikke det du leter etter? ta en titt under
        <br/>
        <br/>
        <br/>
      </div>
      <div class="row">
        <div>
          <h5>Felles</h5>
          <router-link class="button" to="/formulas">Koding av formler</router-link>
          <hr>
        </div>
        <div>
          <h5>Naturfag</h5>
          <router-link class="button"
            to="/status/naturfagQuestions">Oversikt Naturfag</router-link>
          <router-link class="button"
            to="/form/naturfagQuestions">Nye spørsmål Naturfag</router-link>
          <router-link class="button"
            to="/readlist/naturfagQuestions">Leselisten Naturfag</router-link>
          <hr/>
        </div>
          <h5>Kjemi 1</h5>
          <router-link class="button"
            to="/status/kjemi1Questions">Oversikt Kjemi 1</router-link>
          <router-link class="button"
            to="/form/kjemi1Questions">Nye spørsmål Kjemi 1</router-link>
          <router-link class="button"
            to="/readlist/kjemi1Questions">Leselisten Kjemi 1</router-link>
          <hr/>
        </div>
        <div>
          <h5>Kjemi 2</h5>
          <router-link class="button"
            to="/status/kjemi2Questions">Oversikt Kjemi 2</router-link>
          <router-link class="button"
            to="/form/kjemi2Questions">Nye spørsmål Kjemi 2</router-link>
          <router-link class="button"
            to="/readlist/kjemi2Questions">Leselisten Kjemi 2</router-link>
          <hr/>
        <div>
          <h5>1t</h5>
          <router-link class="button"
            to="/status/1tQuestions">Oversikt 1t</router-link>
          <router-link class="button"
            to="/form/1tQuestions">Nye spørsmål 1t</router-link>
          <router-link class="button"
            to="/readlist/1tQuestions">Leselisten 1t</router-link>
          <hr/>
        </div>
        <div>
          <h5>S1</h5>
          <router-link class="button"
            to="/status/s1Questions">Oversikt s1</router-link>
          <router-link class="button"
            to="/form/s1Questions">Nye spørsmål s1</router-link>
          <router-link class="button"
            to="/readlist/s1Questions">Leselisten s1</router-link>
          <hr/>
        </div>
        <div>
          <h5>Geografi</h5>
          <router-link class="button"
            to="/status/geoQuestions">Oversikt Geografi</router-link>
          <router-link class="button"
            to="/form/geoQuestions">Nye spørsmål Geografi</router-link>
          <router-link class="button"
            to="/readlist/geoQuestions">Leselisten Geografi</router-link>
          <hr/>
        </div>
        <div>
          <h5>Fysikk 1</h5>
          <router-link class="button"
            to="/status/fysikk1">Oversikt Fysikk 1</router-link>
          <router-link class="button"
            to="/form/fysikk1">Nye spørsmål Fysikk 1</router-link>
          <router-link class="button"
            to="/readlist/fysikk1">Leselisten Fysikk 1</router-link>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>

