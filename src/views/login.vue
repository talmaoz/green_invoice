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
          <div class="login_form_input">
            <p class="login_form_input_label">מייל</p>
            <p class="login_form_input_info">כתובת המייל איתה נרשמת לחשבונית ירוקה</p>
          </div>
          <div class="login_form_input">
            <p class="login_form_input_label">סיסמה</p>
            <a class="login_form_input_info">?שכחת סיסמא</a>
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

  .login_page {

    width: 100%;
    height: 100%;

    & > div {
      height: 1100px;
      display: inline-block;
    }

    .left {
      width: 50%;
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
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      header {

        padding-top: 36px;
        padding-right: 85px;

        img {
          height: 36px;
          float: right;
        }
      }

      .contained {
        margin-left: 183px;
        margin-right: 351px;
        min-width: 417px;
      }

      .login {
        margin-bottom: 64px;
        min-height: 478px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_title {
          font-size: 36px;
          font-weight: 800;
          color: $color-1;
          text-align: center;
          transform: scale(1.1, 1.6);
          -webkit-transform: scale(1.1, 1.6);
          -moz-transform: scale(1.1, 1.6);
          -ms-transform: scale(1.1, 1.6);
          /*-o-transform: scale(1.1, 1.6);*/
          position: relative;
          top: -11px;
          margin: 0 auto 10px;
        }

        &_form {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          &_input {

            margin: 30px 0;



            &_label {

            }

            &_info {
              display: block;
              -webkit-box-shadow: 0px -3px 0px 0px rgb(39, 72, 93);
              -moz-box-shadow: 0px -3px 0px 0px rgb(39, 72, 93);
              box-shadow: 0px -3px 0px 0px rgb(39, 72, 93);
            }
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
            background-position: left 18px center;
          }
        }
      }

      .app_footer {

        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 30px;
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
