<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import "./scss/_variables.scss";

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
    cursor: context-menu;
    text-align: right;
  }

  button {
    outline: none;
    border: none;
  }

  #app {
    font-family: almoni-neue-dl, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    max-width: 1920px;
    font-size: 16px;
  }

  @media (max-height: 500px), (max-width: 750px) {
    #app {
      font-size: 12px;
    }
  }

</style>

<script>

  export default {
    name: 'app',
  };
</script>
