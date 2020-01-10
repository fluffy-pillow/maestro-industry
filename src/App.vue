<template>
  <div id="app">
    <v-ons-page class="main-page">
      <Popup></Popup>
      <SystemMessage></SystemMessage>
      <Navigation></Navigation>
    </v-ons-page>
  </div>
</template>

<script>

import Navigation from "./components/Navigation";
import SystemMessage from "./components/SystemMessage";
import Popup from "./components/Popup";
export default {
  name: 'app',
  components: {
      Popup,
      SystemMessage,
      Navigation
  },
  data () {
      return {
          timerId: null
      }
  },
  methods: {
      resetTimer() {
          console.log('reset')
          clearTimeout(this.timerId)
          this.timerId = setTimeout(this.logout, 30000);
      },
      logout () {
          this.$router.push('/login')
      },
      idleTimer () {
          window.onclick = this.resetTimer;
          window.ontouchstart = this.resetTimer;
      }
  },
  mounted () {
      console.log('is wkWebView:', this.$ons.platform.isWKWebView())
      this.idleTimer()
  }
}
</script>

<style>


  #app {
    font-family: 'Rubik', sans-serif !important;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  /** tables --start **/
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

  .flexible-table__vertical-items  .flexible-table__image {
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 19px;
  }

  .flexible-table__vertical-items .flexible-table__title {
    margin-top: 12px;
  }

  .flexible-table__horizontal-items .flexible-table__col {
    margin-left: 18px;
    width: calc((100%/3) - 18px);
  }

  .flexible-table__vertical-items .flexible-table__col {
    width: 280px;
    margin-left: 30px;
    margin-top: 24px;
  }

  .flexible-table__horizontal-items .flexible-table__col-content {
    display: flex;
    align-items: center;
  }

  .flexible-table-content {
    width: calc(100% + 30px);
    flex-wrap: wrap;
    display: flex;
  }

  .flexible-table__horizontal-items .flexible-table-content {
    margin-left: -32px;
    margin-top: 12px;
  }

  .flexible-table__vertical-items .flexible-table-content {
    margin-left: -30px;
  }

  .flexible-table {
    width: 100%;
  }

  @media (max-width: 940px) {
    .flexible-table__horizontal-items .flexible-table__col {
      width: calc((100%/2) - 18px);
    }
  }
  /** tables -- end **/

  /** back button -- start **/
  .back-button {
    padding-left: 0 !important;
    display: flex !important;
    align-items: center !important;
  }

  .back-button__label {
    font-family: 'Rubik', sans-serif !important;
    font-weight: 400 !important;
    color: #ffffff !important;
  }

  .back-button__icon {
    margin-right: 27px !important;
    display: flex !important;
    width: 30px !important;
    height: 30px !important;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.3) !important;
    border-radius: 50%;
    fill: #ffffff !important;
  }

  .back-button__icon svg {
    width: 8px;
    height: 13px;
  }
  /** back button -- end **/

  /** buttons -- start **/
  .btn {
    height: 50px;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
  }

  .btn__icon {
    margin-right: 10px;
    display: flex;
  }

  .btn-success {
    color: #ffffff;
    background: #3DD498;
  }

  .btn-warning {
    color: #000000;
    background: #FBBD1C;
  }

  .btn-purple {
    color: #ffffff;
    background: #6E3AC1;
  }

  .btn-neutral {
    color: #4B4B4B;
    background: #FFFFFF;
    border: 1px solid #4B4B4B;
    font-size: 16px;
    line-height: 14px;
    font-weight: 400;
  }

  .btn-grey {
      background: #4B4B4B;
      color: #ffffff;
      font-size: 16px;
      line-height: 14px;
      font-weight: 400;
  }

  .btn-grey-glow {
      box-shadow: 0px 4px 20px rgba(75, 75, 75, 0.3);
  }

  .btn-warning-glow {
      box-shadow: 0px 4px 20px rgba(251, 189, 28, 0.45);
  }
  /** buttons -- end **/

  /** pages -- start **/

  .page {
    height: 100vh !important;
  }

  .page > .page__content::-webkit-scrollbar {
    display: none;
  }
  .page > .page__content::-webkit-scrollbar-track {
    background-color: transparent;
  }



  .login-page > .page__content, .login-page > .page__background {
    background: #FBFBFB !important;
  }

  .items-page > .page__content, .items-page > .page__background,
  .category-page > .page__content, .category-page > .page__background,
  .exploitation-page > .page__content, .exploitation-page > .page__background,
  .troubleshooting-page > .page__content, .troubleshooting-page > .page__background,
  .manual-page > .page__content, .manual-page > .page__background {
    background: #2B2F89 !important;
  }
  /** pages -- end **/

  /** reset -- start **/
  button {
    border: none;
  }

  button:focus {
    outline: none !important;
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

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
  }


  .link {
    text-decoration: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
  /** reset -- end **/

  /** fonts -- start **/
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
  /** fonts -- end **/

  /** layout -- start **/
  .message {
    font-size: 16px;
    line-height: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 19px;
    padding-right: 19px;
    border-radius: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .message-success {
    background: #3DD498;
    box-shadow: 0px 0px 20px rgba(61, 212, 152, 0.35);
    color: #ffffff;
  }

  .portlet {
    background: #FFFFFF;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .portlet:before {
    position: absolute;
    top: 0;
    content: "";
    height: 60px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 100%);
    width: 100%;
    z-index: 1;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  .default-image img {
    border-radius: 16px;
    overflow: hidden;
  }

  .portlet-container {
    width: 100%;
    padding: 40px;
  }

  .portlet-offset {
    margin-left: 32px;
    padding-bottom: 32px;
  }

  .aside ~ .grid-item__col {
    margin-left: 20px;
  }

  .portlet-section-header {
    padding-top: 20px;
  }

  .grid-item__row {
    margin-top: 34px;
    display: flex;
    width: 100%;
  }

  .grid-item__col {
    margin-left: 44px;
    display: flex;
    width: 100%;
  }

  .scrollable-y {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
/*    padding-bottom: env(safe-area-inset-top);*/
  }

  .scrollable-hide-scroll::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .scrollable-hide-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }


  .main-container {
    flex: 1;
    overflow: hidden;
    display: flex;
  }


  .portlet-header h2, .portlet-section-header h3 {
    color: #4B4B4B;
  }

  .portlet-header {
    padding-top: 20px;
  }

  .portlet--empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .desc {

  }

  .portlet--empty__message-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portlet--empty__message-icon {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 50px;
    width: 50px;
  }

  .portlet--empty__message-text {
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #4B4B4B;
  }

  video {
    border-radius: 16px;
    overflow: hidden;
  }


  /** layout -- end **/


</style>
