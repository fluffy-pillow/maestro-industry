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

</style>
