<template>
  <section class="login">

    <div class="left">
      <div class="center">
        <img :src="require('../assets/green_login_page.svg')" alt="Login Background Pic"/>
      </div>
    </div>

    <div class="right">
      <img :src="require('@/assets/green_logo.svg')" alt="Green Invoice Logo"/>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        someData: 'someDataVal'
      };
    },
    methods: {
      login(provider) {
        if (provider === 'google') {
          // Google login
        } else {
          // post with email and password
        }
      },
    }
  };

</script>

<style lang="scss" scoped>

  @import "@/scss/_variables.scss";

  .login {

    & > div {
      width: 50%;
      height: 1100px;
      display: inline-block;
    }

    .left {
      background-color: $color-5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      float: left;
      overflow: hidden;

      .center {
        height: 671px;
        width: 100%;
        position: relative;

        img {
          height: 671px;
          position: absolute;
          top: 0;
          right: -78px;
        }
      }
    }

    .right {
      float: right;
    }
  }

</style>
