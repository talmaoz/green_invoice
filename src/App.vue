<template>
  <div id="app">
    <app_header/>
    <app_main/>
    <app_footer/>
  </div>
</template>

<style lang="scss">

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

  .container {
    max-width: 900px;
    margin: 0 auto;
    height: 100%;
    text-align: center;
    padding: 0 30px;
  }

  @media (max-height: 500px), (max-width: 750px) {
    #app {
      font-size: 12px;
    }

    .container {
      padding: 0 3px;
    }
  }

</style>

<script>
  import app_footer from '@/components/appFooter.vue';
  import app_header from '@/components/appHeader.vue';
  import app_main from '@/views/appMain.vue';

  export default {
    name: 'app',
    components: {
      app_footer,
      app_header,
      app_main
    },
  };
</script>
