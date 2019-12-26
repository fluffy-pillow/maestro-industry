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
    max-height: 100%;
    overflow: hidden;
  }

  .login-page > .page__content, .login-page > .page__background {
    background: #FBFBFB !important;
  }

  .items-page > .page__content, .items-page > .page__background {
      background: #2B2F89 !important;
  }

  .portlet {
    background: #FFFFFF;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    width: 100%;
  }

  .portlet-container {
    width: 100%;
    padding: 40px;
  }

  .portlet-section-header {
    padding-top: 20px;
  }

  .grid-item__row {
    margin-top: 34px;
    display: flex;
  }

  .grid-item__col {
      margin-left: 44px;
      display: flex;
  }

  .scrollable-y {
    overflow-y: scroll;
  }

  .scrollable-hide-scroll::-webkit-scrollbar {
    display: none;
  }

  .scrollable-hide-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }


  .flexible-table__horizontal-items .flexible-table__image {
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 14px;
    margin-right: 14px;
  }

  .flexible-table__title {
    font-size: 16px;
    line-height: 22px;
    color: #4B4B4B;
  }

  .flexible-table__horizontal-items .flexible-table__image img {
    border-radius: 8px;
    overflow: hidden;
  }

  .flexible-table__horizontal-items .flexible-table__col {
    margin-left: 18px;
    width: calc((100%/3) - 18px);
  }

  @media (max-width: 940px) {
    .flexible-table__horizontal-items .flexible-table__col {
      width: calc((100%/2) - 18px);
    }
  }

  .flexible-table__horizontal-items .flexible-table__col-content {
    display: flex;
    align-items: center;
  }

  .flexible-table-content {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    margin-top: 12px;
  }

  .flexible-table__horizontal-items .flexible-table-content {
    margin-left: -32px;
  }

  .flexible-table {
    width: 100%;
  }

  .main-container {
    flex: 1;
    overflow: hidden;
    display: flex;
  }

  .page > .page__content::-webkit-scrollbar {
    display: none;
  }
  .page > .page__content::-webkit-scrollbar-track {
    background-color: transparent;
  }

  h2, h3 {
    font-weight: 500;
    line-height: 24px;
    margin: 0 !important;
    padding: 0;
    font-family: 'Rubik', sans-serif !important;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 16px;
  }

  .table-item__horizontal {
  }

  .portlet-header h2, .portlet-section-header h3 {
    color: #4B4B4B;
  }

  .portlet-header {
    padding-top: 20px;
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
