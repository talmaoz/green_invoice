<template>
  <header>
    <img :src="require('../assets/green_logo.svg')" alt="Green Invoice Logo"/>
  </header>
</template>

<script>

  export default {
    name: 'appHeader',
  }

</script>

<style lang="scss" scoped>

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  header {
    padding-top: 36px;
    @include h1 {
      padding-top: 6px;
    }
    padding-right: 85px;
    @include w1 {
      padding-right: 20px;
    }
    @include w2 {
      padding-right: 10px;
    }
    @include w4 {
      padding-right: 6px;
    }

    img {
      height: 34px;
      width: 223px;
      @include w4 {
        height: 28px;
        width: 184px;
      }
      float: right;
    }
  }
</style>
