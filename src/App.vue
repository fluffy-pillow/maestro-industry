<template>
  <div id="app">
    <v-ons-page class="main-page">
      <SystemMessage></SystemMessage>
      <Navigation></Navigation>
    </v-ons-page>
  </div>
</template>

<script>

import Navigation from "./components/Navigation";
import SystemMessage from "./components/SystemMessage";
export default {
  name: 'app',
  components: {
      SystemMessage,
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
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url('fonts/Rubik-Bold.ttf') format('truetype');
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

  .grid {
    display: flex;
    flex-direction: column;
  }

  .login-page > .page__content, .login-page > .page__background {
    background: #FBFBFB !important;
  }

  .page > .page__content::-webkit-scrollbar {
    display: none;
  }
  .page > .page__content::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .btn {
    height: 50px;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    border-radius: 16px;
  }

  .btn-success {
    color: #ffffff;
    background: #3DD498;
  }

  button {
    border: none;
  }

  button:focus {
    outline: none !important;
  }
</style>
