<template>
  <footer class="app_footer">
    <div class="app_footer_right">
      <div class="app_footer_right_rights_reserved">
        <img :src="require('../../assets/green_leaf.svg')" alt="Green Invoice Logo"/>
        <p>חשבונית ירוקה &copy; 2019 </p>
      </div>

      <p class="app_footer_right_company_description">הפקת חשבוניות ומסמכים עסקיים באינטרנט</p>
    </div>

    <router-link to="/welcome" class="app_footer_left">להצטרפות חינם</router-link>

  </footer>
</template>

<script>

  export default {
    name: 'appFooter',
  }

</script>

<style lang="scss" scoped>

  @import "../../scss/variables";
  @import "../../scss/mixins";

  .app_footer {
    display: flex;
    flex-direction: row-reverse;
    padding-bottom: 32px;
    @include h1 {
      padding-bottom: 6px;
      margin-top: 20px !important;
    }
    padding-right: 14px;
    font-size: 14px;
    font-weight: 400;

    &_right {

      display: inline-block;
      width: 70%;
      @include w4 {
        width: 100%;
      }

      &_rights_reserved {
        display: flex;
        flex-direction: row-reverse;

        img {
          height: 16px;
          width: 16px;
          margin-left: 3px;
        }

        p {
          display: inline-block;

        }
      }

      &_company_description {
        margin-right: 3px;
        margin-top: 4px;
      }
    }

    &_left {
      width: 30%;
      padding-top: 1.7em;
      text-align: left;
      @include w4 {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 6px;
        padding-left: 10px;
      }
    }
  }
</style>
