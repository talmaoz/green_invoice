<template>
  <section class="login_page">

    <div class="left">
      <div class="center">
        <img :src="require('../assets/green_login_page.svg')" alt="Login Background Pic"/>
      </div>
    </div>

    <div class="right">
      <header>
        <img :src="require('../assets/green_logo.svg')" alt="Green Invoice Logo"/>
      </header>

      <div class="login  contained">
        <p class="login_title">התחברות לחשבונית ירוקה</p>
        <div class="login_form">
          <div class="login_form_input login_form_input_top">
            <p class="login_form_input_label">מייל</p>
            <p class="login_form_input_info">כתובת המייל איתה נרשמת לחשבונית ירוקה</p>
          </div>
          <div class="login_form_input">
            <p class="login_form_input_label">סיסמה</p>
            <router-link to="/welcome" class="login_form_input_info">?שכחת סיסמה</router-link>
          </div>
        </div>
        <div class="login_buttons">
          <button class="login_buttons_google_login">כניסה עם גוגל</button>
          <button class="login_buttons_username_login">כניסה</button>
        </div>
      </div>

      <footer class="app_footer contained">
        <div class="app_footer_right">
          <div class="app_footer_right_rights_reserved">
            <img :src="require('../assets/green_leaf.svg')" alt="Green Invoice Logo"/>
            <p>חשבונית ירוקה &copy; 2019 </p>
          </div>

          <p class="app_footer_right_company_description">הפקת חשבוניות ומסמכים עסקיים באינטרנט</p>
        </div>

        <router-link to="/welcome" class="app_footer_left">להצטרפות חינם</router-link>


      </footer>
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
      @include w3 {display: none;}
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
      @include w3 {width: 100%;}
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      header {
        padding-top: 36px;
        padding-right: 85px;
        @include w1 {padding-right: 20px;}
        @include w2 {padding-right: 10px;}

        img {
          height: 34px;
          float: right;
        }
      }

      .contained {
        /*padding-right: 10px;*/
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
      }

      .login {
        margin-bottom: 64px;
        min-height: 478px;
        max-width: 407px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_title {
          font-size: 36px;
          font-weight: 800;
          color: $color-1;
          text-align: center;
          transform: scale(1.1, 1.6);
          position: relative;
          top: -11px;
          margin: 0 auto 10px;
        }

        &_form {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          min-height: calc(100% - 70px - 56px);
          padding: 45px 0 25px;

          &_input {

            margin: 19px 0;

            &_label {
              font-size: 20px;
              padding-bottom: 3px;
            }

            &_info {
              display: block;
              border-top: 1px solid $color-2;;
              color: $color-2;
              font-size: 14px;
              line-height: 45px;
            }
          }

          &_input_top {
            margin-bottom: 4px;
          }
        }

        &_buttons {

          & > button {
            line-height: 54px;
            font-size: 17px;
            border-radius: 29px;
          }

          &_username_login {
            background-color: $color-1;
            color: white;
            width: 54%;
            margin-left: 2%;
            font-weight: 500;
          }

          &_google_login {
            background-color: white;
            color: $color-1;
            width: 41%;
            margin-right: 3%;
            border-radius: 30px;
            border: 1px solid #5268F1;
            font-weight: 600;
            background-image: url('../assets/Google_G.svg');
            background-repeat: no-repeat;
            background-size: 25px auto;
            padding-left: 40px;
            padding-right: 12px;
            background-position: left 18px center;
          }
        }
      }

      .app_footer {

        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 30px;
        padding-right: 10px;
        font-size: 14px;

        &_right {

          display: inline-block;
          width: 70%;

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
        }
      }
    }
  }

</style>
