<template>
  <div id="app">
    <div class="container">
      <h1>Kjemia sin spørsmålsbank</h1>
      <div class="row">Finner du ikke det du leter etter? ta en titt under
        <br>
        <br>
        <br>
      </div>
      <div class="row">
        <div>
          <h5>Felles</h5>
          <router-link class="button" to="/formulas">Koding av formler</router-link>
          <hr>
        </div>
        <div>
          <h5>Naturfag</h5>
          <router-link class="button" to="/status/naturfagQuestions">Oversikt Naturfag</router-link>
          <router-link class="button" to="/form/naturfagQuestions">Nye spørsmål Naturfag</router-link>
          <router-link class="button" to="/readlist/naturfagQuestions">Leselisten Naturfag</router-link>
          <router-link class="button" to="/images/naturfagQuestions">Bilder i Naturfag</router-link>
          <hr>
        </div>
        <h5>Kjemi 1</h5>
        <router-link class="button" to="/status/kjemi1Questions">Oversikt Kjemi 1</router-link>
        <router-link class="button" to="/form/kjemi1Questions">Nye spørsmål Kjemi 1</router-link>
        <router-link class="button" to="/readlist/kjemi1Questions">Leselisten Kjemi 1</router-link>
        <router-link class="button" to="/images/kjemi1Questions">Bilder i Kjemi 1</router-link>
        <hr>
      </div>
      <div>
        <h5>Kjemi 2</h5>
        <router-link class="button" to="/status/kjemi2Questions">Oversikt Kjemi 2</router-link>
        <router-link class="button" to="/form/kjemi2Questions">Nye spørsmål Kjemi 2</router-link>
        <router-link class="button" to="/readlist/kjemi2Questions">Leselisten Kjemi 2</router-link>
        <router-link class="button" to="/images/kjemi2Questions">Bilder i Kjemi 2</router-link>
        <hr>
        <div>
          <h5>1t</h5>
          <router-link class="button" to="/status/1tQuestions">Oversikt 1t</router-link>
          <router-link class="button" to="/form/1tQuestions">Nye spørsmål 1t</router-link>
          <router-link class="button" to="/readlist/1tQuestions">Leselisten 1t</router-link>
          <router-link class="button" to="/images/1tQuestions">Bilder i 1t</router-link>
          <hr>
        </div>
        <div>
          <h5>S1</h5>
          <router-link class="button" to="/status/s1Questions">Oversikt s1</router-link>
          <router-link class="button" to="/form/s1Questions">Nye spørsmål s1</router-link>
          <router-link class="button" to="/readlist/s1Questions">Leselisten s1</router-link>
          <router-link class="button" to="/images/s1Questions">Bilder i s1</router-link>
          <hr>
        </div>
        <div>
          <h5>Geografi</h5>
          <router-link class="button" to="/status/geoQuestions">Oversikt Geografi</router-link>
          <router-link class="button" to="/form/geoQuestions">Nye spørsmål Geografi</router-link>
          <router-link class="button" to="/readlist/geoQuestions">Leselisten Geografi</router-link>
          <router-link class="button" to="/images/geoQuestions">Bilder i Geografi</router-link>
          <hr>
        </div>
        <div>
          <h5>Fysikk 1</h5>
          <router-link class="button" to="/status/fysikk1Questions">Oversikt Fysikk 1</router-link>
          <router-link class="button" to="/form/fysikk1Questions">Nye spørsmål Fysikk 1</router-link>
          <router-link class="button" to="/readlist/fysikk1Questions">Leselisten Fysikk 1</router-link>
          <router-link class="button" to="/images/fysikk1Questions">Bilder i Fysikk 1</router-link>
          <hr>
        </div>
        <div>
          <h5>R1</h5>
          <router-link class="button" to="/status/r1">Oversikt R1</router-link>
          <router-link class="button" to="/form/r1">Nye spørsmål R1</router-link>
          <router-link class="button" to="/readlist/r1">Leselisten R1</router-link>
          <router-link class="button" to="/images/r1">Bilder i R1</router-link>
          <hr>
        </div>
        <!-- <div>
          <h5>1P</h5>
          <router-link class="button" to="/status/1p">Oversikt 1P</router-link>
          <router-link class="button" to="/form/1p">Nye spørsmål 1P</router-link>
          <router-link class="button" to="/readlist/1p">Leselisten 1P</router-link>
          <router-link class="button" to="/images/1p">Bilder i 1p</router-link>
          <hr>
        </div>-->
        <div>
          <h5>Bio1</h5>
          <router-link class="button" to="/status/bio1Questions">Oversikt Bio1</router-link>
          <router-link class="button" to="/form/bio1Questions">Nye spørsmål Bio1</router-link>
          <router-link class="button" to="/readlist/bio1Questions">Leselisten Bio1</router-link>
          <router-link class="button" to="/images/bio1Questions">Bilder i Bio1</router-link>
          <hr>
        </div>
        <div>
          <h5>Bio2</h5>
          <router-link class="button" to="/status/bio2Questions">Oversikt Bio2</router-link>
          <router-link class="button" to="/form/bio2Questions">Nye spørsmål Bio2</router-link>
          <router-link class="button" to="/readlist/bio2Questions">Leselisten Bio2</router-link>
          <router-link class="button" to="/images/bio2Questions">Bilder i Bio2</router-link>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>

