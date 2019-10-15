<template>
  <section class="main_page">

    <div class="header_container">
      <div class="nav_bar_container">
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

      <app_header/>
    </div>

    <router-view class="content"></router-view>

    <button @click="logout()">יציאה</button>
  </section>
</template>

<script>

  import app_header from '../components/appHeader';

  export default {
    name: 'mainPage',
    components: { app_header },
    data() {
      return {
        routes: this.getNavRoutes()
      };
    },
    methods: {

      logout() {
        this.$store.dispatch('logout');
      },

      getNavRoutes() {
        let navRoutes;
        this.$router.options.routes.forEach(route => {
          if (route.name === 'main') {navRoutes = route.children;}
        });
        return navRoutes;
      },
    }
  };

</script>

<style lang="scss" scoped>
  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  .main_page {
    width: 100%;
    height: 100%;

    .header_container {
      width: 100%;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .nav_bar_container {
        height: 70px;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 85px;

        nav {
          float: left;
          display: flex;
          justify-content: space-around;

          .nav_bar_item {
            text-align: center;
            vertical-align: center;
            min-width: 80px;
          }
        }
      }
    }

    .content {
      height: 100%;
      width: 100%;
      padding-top: 70px
    }
  }

</style>
