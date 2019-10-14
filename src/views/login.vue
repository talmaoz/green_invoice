<template>
  <section class="login_page">

    <div class="left">
      <div class="center">
        <img :src="require('../assets/green_login_page.svg')" alt="Login Background Image"/>
      </div>
    </div>

    <div class="right">
      <app_header/>
      <login_form class="contained"/>
      <app_footer class="contained"/>
    </div>

  </section>
</template>

<script>

  import app_header from '../components/appHeader';
  import login_form from '../components/loginForm';
  import app_footer from '../components/appFooter';

  export default {
    name: 'loginPage',
    components: {app_header, login_form, app_footer}
  };

</script>

<style lang="scss" scoped>
  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  .login_page {
    width: 100%;
    height: 100%;

    & > div {
      height: 1100px;
      @include h1 {
        height: 100%;
        max-height: 1100px;
      }
      display: inline-block;
    }

    .left {
      width: 50%;
      @include w3 {
        display: none;
      }
      background-color: $color-5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      float: left;
      overflow: hidden;

      .center {
        height: 746px;
        width: 100%;
        position: relative;

        img {
          height: 746px;
          position: absolute;
          top: 4px;
          right: -87px;
        }
      }
    }

    .right {
      width: 50%;
      @include w3 {
        width: 100%;
      }
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .contained {
        margin-left: 183px;
        margin-right: 341px;
        min-width: 417px;
        @include w1 {
          padding-right: 40px;
          margin-right: 0;
        }
        @include w2 {
          padding-right: 20px;
          padding-left: 20px;
          margin: 0 auto;
        }
        @include w4 {
          min-width: 300px;
          padding-right: 6px;
          padding-left: 6px;
        }
      }
    }
  }

</style>
