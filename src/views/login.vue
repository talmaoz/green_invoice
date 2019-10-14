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
          <div
            class="login_form_input login_form_input_email not_selected_input"
            @click="inputSelected('email')"
            :class="(email.selected)? 'selected_input' : 'not_selected_input'">
            <p class="login_form_input_label">מייל</p>
            <input
              ref="email"
              v-model="email.value"
              @blur="handleBlur('email')"/>
            <p class="login_form_input_info">כתובת המייל איתה נרשמת לחשבונית ירוקה</p>
          </div>
          <div
            class="login_form_input login_form_input_password not_selected_input"
            @click="inputSelected('password')"
            :class="(password.selected)? 'selected_input' : 'not_selected_input'">
            <p class="login_form_input_label">סיסמה</p>
            <input
              ref="password"
              v-model="password.value"
              @blur="handleBlur('password')"
              type="password" maxlength="16"/>
            <router-link to="/welcome" class="login_form_input_info">?שכחת סיסמה</router-link>
          </div>
        </div>
        <div class="login_buttons">
          <button class="login_buttons_google_login">כניסה עם גוגל</button>
          <button class="login_buttons_email_login" @click="login()">כניסה</button>
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
        email: {
          value: '',
          selected: false,
          error: null,
          info: ''
        },
        password: {
          value: '',
          selected: false,
          error: null,
          info: ''
        }
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', {email: this.email.value, password: this.password.value})
      },

      inputSelected(inputField) {
        this[inputField].selected = true
        this.$nextTick(() => {this.$refs[inputField].focus()})
      },

      handleBlur(inputField) {
        let regExp
        if (inputField === 'email') regExp = /\S+@\S+\.\S+/
        if (inputField === 'password') regExp = /\S{8,16}/
        if (regExp.test(this[inputField].value)) {
          console.log(this[inputField].value)
        }
      }
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
        @include w4 {
          min-width: 300px;
          padding-right: 6px;
          padding-left: 6px;
        }
      }

      .login {
        margin-bottom: 62px;
        min-height: 478px;
        @include h1 {
          margin-bottom: 20px;
          margin-top: 20px;
          min-height: 280px;
        }
        max-width: 407px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_title {
          font-size: 36px;
          @include w4 {
            font-size: 28px;
          }
          transform: scale(1.1, 1.6);
          @include w3 {
            transform: none;
          }
          font-weight: 800;
          color: $color-1;
          text-align: center;

          position: relative;
          top: -11px;
        }

        &_form {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          min-height: calc(100% - 70px - 56px);
          padding: 52px 0 13px;
          @include h2 {
            padding: 10px 0 20px;
          }

          &_input {
            min-height: 90px;
            position: relative;
            margin: 19px 0 12px;
            @include h2 {
              margin: 5px 0;
            }

            &_label {
              line-height: 20px;
              font-size: 20px;
              padding-bottom: 3px;
              z-index: 100;
            }

            input {
              border: none;
              display: block;
              float: right;
              position: absolute;
              direction: rtl;
              font-family: almoni-neue-dl, arial, sans-serif;
              font-size: 17px;
              top: -6px;
              right: 0;
            }

            input:focus {
              outline: none;
            }

            &_info {
              display: block;
              border-top: 1px solid $color-2;
              color: $color-2;
              font-size: 14px;
              line-height: 45px;
            }
          }

          &_input_password {
            /*margin-bottom: 10px;*/
          }

          &_input_email {
            margin-bottom: 0;
            margin-top: 28px;
          }

        }

        .not_selected_input {

          .login_form_input_label {
            position: relative;
            bottom: 0;
          }

          .login_form_input_info {
            border-top: 1px solid $color-2;
          }

          input {
            display: none;
          }

          p, a {
            color: $color-2;
          }
        }

        .selected_input {

          .login_form_input_label {
            position: relative;
            bottom: 26px;
            font-size: 0.95rem;
            transition: all 300ms;
          }

          .login_form_input_info {
            border-top: 1px solid $color-4;
          }

          input {
            display: block;
          }

          p, a {
            color: $color-4;
          }
        }

        &_buttons {

          & > button {
            line-height: 53px;
            font-size: 17px;
            border-radius: 29px;
            @include w4 {
              line-height: 34px;
              font-size: 14px;
            }
            @include h2 {
              line-height: 34px;
              font-size: 14px;
            }
          }

          &_email_login {
            background-color: $color-1;
            color: $color-3;
            width: 54%;
            @include w4 {
              width: 48%;
            }
            @include h2 {
              width: 48%;
            }
            margin-left: 2%;
            font-weight: 500;
          }

          &_google_login {
            background-color: white;
            color: $color-1;
            width: 41%;
            @include w4 {
              width: 47%;
            }
            @include h2 {
              width: 47%;
            }
            margin-right: 3%;
            border-radius: 30px;
            border: 1px solid #5268F1;
            font-weight: 600;
            background-image: url('../assets/Google_G.svg');
            background-repeat: no-repeat;
            background-size: 25px auto;
            background-position: left 18px center;
            @include w1 {
              background-position: left 10px center;
            }
            padding-left: 40px;
            padding-right: 12px;
          }
        }
      }

      .app_footer {
        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 32px;
        @include h1 {
          padding-bottom: 6px;
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
    }
  }

</style>
