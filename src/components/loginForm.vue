<template>
  <section class="login">
    <p class="login_title">התחברות לחשבונית ירוקה</p>
    <form @submit.prevent="" class="login_form">
      <div
        class="login_form_input login_form_input_email"
        @click="inputSelected('email')"
        :class="setInputClass('email')">
        <p class="login_form_input_label">מייל</p>
        <input
          ref="email"
          @keyup.enter="inputSelected('password')"
          v-model="email.value"
          @focus="handleFocus('email')"
          @blur="handleBlur('email')"/>
        <p class="login_form_input_info">{{emailInfo}}</p>
      </div>
      <div
        class="login_form_input login_form_input_password"
        @click="inputSelected('password')"
        :class="setInputClass('password')">
        <p class="login_form_input_label">סיסמה</p>
        <input
          ref="password"
          @keyup.enter="$refs.login.click()"
          v-model="password.value"
          @focus="handleFocus('password')"
          @blur="handleBlur('password')"
          type="password" maxlength="16"/>
        <div class="login_form_input_info">
          <div class="my_cont" :class="(password.error)? 'display_password_err': ''">
            <p
              class="password_err_msg">
              יש להזין 8-16 תווים
            </p>
            <router-link
              to="/welcome"

              class="forgot_password">?שכחת סיסמה
            </router-link>
          </div>
        </div>
      </div>
    </form>
    <div class="login_buttons">
      <button class="login_buttons_google_login">כניסה עם גוגל</button>
      <button class="login_buttons_email_login" ref="login" @click="login()">כניסה</button>
    </div>
  </section>
</template>

<script>

  import { getValidationObj } from '../service/loginService';

  export default {
    name: 'loginForm',
    data() {
      return {
        email: {
          value: '',
          active: false,
          error: null
        },
        password: {
          value: '',
          active: false,
          error: null
        }
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.email.value,
          password: this.password.value
        });
      },

      inputSelected(inputField) {
        this[inputField].active = true;
        this.$nextTick(() => {
          this.$refs[inputField].focus();
        });
      },

      handleBlur(inputField) {
        this[inputField].active = false;
        const validate = getValidationObj(inputField);
        this[inputField].error =
          (!validate.regExp.test(this[inputField].value))
            ? validate.error
            : null;
      },

      setInputClass(inputField) {
        let addClass = (this[inputField].active || this[inputField].value.length) ? 'display_input' : '';
        addClass += (this[inputField].error) ? ' input_error' : '';
        addClass += (this[inputField].active && !this[inputField].error) ? ' input_active' : '';
        return addClass;
      },

      handleFocus(inputField) {
        this[inputField].error = null;
      }
    },
    computed: {
      emailInfo() {
        const info = 'כתובת המייל איתה נרשמת לחשבונית ירוקה';
        return (this.email.error) ? this.email.error : info;
      }
    },
  };

</script>

<style lang="scss" scoped>

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

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
      padding: 52px 0 23px;
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
          line-height: 37px;
          font-size: 20px;
          padding-bottom: 3px;
          z-index: 100;
          transition: all 1500ms;
          color: $color-2;
          position: relative;
          bottom: 0;
          background-color: white;
        }

        input {
          height: 32px;
          width: 100%;
          border: none;
          display: none;
          float: right;
          position: absolute;
          direction: rtl;
          font-family: almoni-neue-dl, arial, sans-serif;
          font-size: 17px;
          top: 6px;
          right: 0;
          background-color: white;
        }

        input:focus {
          outline: none;
        }

        &_info {
          border-top: 1px solid $color-2;
          height: 28px;
        }

        .my_cont {
          position: relative;
          top: -19px;
          z-index: -5;
          transition: all 1500ms;
          height: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

        }

        .display_password_err {
          top: 0;
          transition: all 1500ms;
        }

        &_info, a {
          display: block;
          color: $color-2;
          font-size: 14px;
          /*line-height: 28px;*/
          transition: all 1500ms;
        }

        // .password_err_msg {
        //   /*opacity: 0;*/
        //   position: relative;
        //   top: 0px;
        //   right: 0;
        //   z-index: -5;
        // }

        // forgot_password {
        //  position: relative;
        //  top: -1px;
        //  right: 0;
        //
      }

      &_input_password {
        /*margin-bottom: 10px;*/
      }

      &_input_email {
        margin-bottom: 0;
        margin-top: 28px;
      }

    }

    .display_input {
      .login_form_input_label {
        bottom: 26px;
        font-size: 0.95rem;
      }

      input {
        display: block;
      }

    }

    .input_active {
      .login_form_input_label {
        color: $color-4;
      }

      .login_form_input_info {
        border-top: 1px solid $color-4;
      }
    }

    .input_error {
      .login_form_input_info {
        border-top: 1px solid red;
        color: red;
      }

      //.login_form_input_info a {
      //  border-top: none;
      //  position: absolute;
      //  bottom: 0;
      //  right: 0;
      //}

      // .password_err_msg {
      //   opacity: 1;
      //   top: 28px;
      // }
    }

    .clicked_input {

      .login_form_input_label {
        bottom: 26px;
        font-size: 0.95rem;
        color: $color-4;
      }

      .login_form_input_info {
        border-top: 1px solid $color-4;
      }

      input {
        display: block;
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
</style>
