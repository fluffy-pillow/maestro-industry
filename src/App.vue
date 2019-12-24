<template>
  <div id="app">
    <v-ons-page class="main-page">
      <Navigation></Navigation>
    </v-ons-page>
  </div>
</template>

<script>

import Navigation from "./components/Navigation";
export default {
  name: 'app',
  components: {
      Navigation
  }
}
</script>

<style>
  @font-face {
    font-family: Rubik;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('fonts/Rubik-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: Rubik;
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url('fonts/Rubik-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Rubik;
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url('fonts/Rubik-Light.ttf') format('truetype');
  }

  #app {
    font-family: 'Rubik', sans-serif !important;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
