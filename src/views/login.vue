<template>
  <section class="login_page">

    <div class="left">
      <div class="center">
        <img :src="require('../assets/green_login_page.svg')" alt="Login Background Pic"/>
      </div>
    </div>

    <div class="right">
      <header>
        <img :src="require('@/assets/green_logo.svg')" alt="Green Invoice Logo"/>
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
            <a class="login_form_input_info">שכחת סיסמא?</a>
          </div>
        </div>
        <div class="login_buttons">
          <button class="login_buttons_username_login">כניסה</button>
          <button class="login_buttons_google_login">כניסה עם גוגל</button>
        </div>
      </div>

      <footer class="app_footer contained">
        <div class="app_footer_right">
          <div class="app_footer_right_rights_reserved">
            <img :src="require('@/assets/green_leaf.svg')" alt="Green Invoice Logo"/>
            <p>חשבונית ירוקה C 2019</p>
          </div>

          <p class="app_footer_right_company_description">הפקת חשבוניות ומסמכים עסקיים באינטרנט</p>
        </div>

        <a class="app_footer_left">להצטרפות חינם</a>


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

  @import "@/scss/_variables.scss";

  .login_page {

    & > div {
      height: 1100px;
      display: inline-block;
    }

    .left {
      width: 60%;
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
      width: 40%;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      header {
        img {
          height: 36px;
          float: right;
          margin-top: 20px;
          margin-right: 25px;
        }
      }

      .login {

        &_title {

        }

        &_form {

          &_input {
            &_label {

            }

            &_info {

            }
          }
        }

        &_buttons {
          &_username_login {
          }

          &_google_login {
          }
        }
      }

      .app_footer {

        &_right {

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
            text-align: right;
            margin-right: 3px;
          }
        }

        &_left {
        }
      }
    }
  }

</style>
