<template>
  <div id="app">
    <app_header/>
    <p>Testing</p>
    <router-view/>
    <app_footer/>
  </div>
</template>

<style lang="scss">

  <!--@import "@/scss/_variables.scss";-->

  <!--p {-->
  <!--  color: $color-1-->
  <!--}-->

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: almoni-neue-dl, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  @media (max-height: 500px), (max-width: 750px) {
    #app {
      font-size: 12px;
    }
  }

</style>

<script>
  import app_footer from '@/components/appFooter.vue';
  import app_header from '@/components/appHeader.vue';

  export default {
    name: 'app',
    components: {
      app_footer,
      app_header,
    },
  };
</script>
