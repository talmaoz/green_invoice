<template>
  <section class="main_page">

    <div class="main_header">

      <div class="flex_column">
        <nav>
          <router-link
            v-for="route in routes"
            class="nav_bar_item"
            :key="route.path"
            :to="route.path">
            {{route.displayName}}
          </router-link>
        </nav>
      </div>

      <div class="flex_column">
        <img :src="require('../../assets/green_logo.svg')" alt="Green Invoice Logo"/>
      </div>

    </div>

    <router-view class="content"></router-view>

  </section>
</template>

<script>

  import app_header from '../login/loginHeader';

  export default {
    name: 'mainPage',
    components: { app_header },
    data() {
      return {
        routes: this.getNavRoutes()
      };
    },
    methods: {
      getNavRoutes() {
        let navRoutes;
        this.$router.options.routes.forEach(route => {
          if (route.name === 'main') {
            navRoutes = route.children;
          }
        });
        return navRoutes;
      },
    }
  };

</script>



<style lang="scss" scoped>
  @import "../../scss/variables";
  @import "../../scss/mixins";

  .main_page {
    width: 100%;
    height: 100%;

    .main_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: white;
      box-shadow: 0 0 4px rgba(0, 0, 0, .25);
      padding: 10px 85px;
      @include w3 {padding: 10px 20px;}
      @include w4 {padding: 10px 10px;}
      position: fixed;
      z-index: 100;

      .flex_column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        img {
          height: 34px;
          width: 223px;
          @include w3 {
            height: 28px;
            width: 184px;
          }
          @include w4 {
            height: 22px;
            width: 144px;
          }
        }

        nav {
          display: flex;
          justify-content: space-around;

          .nav_bar_item {
            color: $color-2;
            text-align: center;
            min-width: 80px;
            @include w4 {min-width: 50px;}
            text-decoration: none;
            font-size: 1.1em;
          }

          .router-link-active{
            color: $color-4;
          }
        }
      }
    }

    .content {

      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      top: 54px;
      height: calc(100% - 54px);
      @include w3 {
        top: 48px;
        height: calc(100% - 48px);
      }
      @include w4 {
        top: 42px;
        height: calc(100% - 42px);
      }
      background-color: #f6f7f8;
    }
  }

</style>
