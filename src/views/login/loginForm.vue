<template>
  <section class="login">

    <p class="login_title">התחברות לחשבונית ירוקה</p>

    <form @submit.prevent="" class="login_form">

      <div
        class="login_form_input login_form_input_email"
        @click="handleFocus('email')"
        :class="setInputClass('email')">
        <p class="login_form_input_label">מייל</p>
        <input
          ref="email"
          @keyup.enter="handleFocus('password')"
          v-model="email.value"
          @focus="handleFocus('email')"
          @blur="handleBlur('email')"/>

        <div class="login_form_input_info login_form_input_info_email">
          <div
            class="login_form_input_info_container"
            :class="(email.error)? 'display_err': ''">
            <p
              class="login_form_input_info_err_msg">
              כתובת המייל אינה תקינה
            </p>
            <p

              class="login_form_input_info_tip">
              כתובת המייל איתה נרשמת לחשבונית ירוקה
            </p>
          </div>
        </div>
      </div>

      <div
        class="login_form_input"
        @click="handleFocus('password')"
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
          <div
            class="login_form_input_info_container"
            :class="(password.error)? 'display_err': ''">
            <p
              class="login_form_input_info_err_msg">
              יש להזין 8-16 תווים
            </p>
            <router-link
              to="/welcome"
              class="login_form_input_info_tip">
              ?שכחת סיסמה
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

  import { getValidationObj } from '../../service/loginService';

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

      handleFocus(inputField) {
        this[inputField].error = null;
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
    },
  };

</script>

<style lang="scss" scoped>

  @import "../../scss/variables";
  @import "../../scss/mixins";

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
          transition: all 300ms;
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

        &_info_email {
          overflow: hidden;
        }

        &_info {
          border-top: 1px solid $color-2;
          height: 25px;
          display: block;
          font-size: 14px;
          transition: all 300ms;

          &_err_msg {
            color: red;
          }

          .display_err {
            top: 0;
            transition: all 300ms;
          }

          &_container {
            position: relative;
            top: -19px;
            z-index: -5;
            transition: all 300ms;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

          }

          &_tip {
            color: $color-2;
            text-align: right;
          }
        }
      }

      &_input_email {
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
      }
    }

    &_buttons {

      display: flex;
      justify-content: space-between;

      & > button {
        line-height: 53px;
        font-size: 17px;
        border-radius: 29px;
        @include w4 {
          line-height: 34px;
          font-size: 12px;
        }
        @include h2 {
          line-height: 34px;
          font-size: 12px;

        }
      }

      &_email_login {
        background-color: $color-1;
        color: $color-3;
        font-weight: 500;

        min-width: 226px;
        @include w1 {min-width: 197px;}
        @include w4 {min-width: 142px;}
        @include h2 {min-width: 142px;}

        // width: 54%;
        // @include w4 {width: 48%;}
        // @include h2 {width: 48%;}
        // margin-left: 2%;
      }

      &_google_login {
        background-color: white;
        color: $color-1;
        font-weight: 600;

        min-width: 173px;
        @include w1 {min-width: 138px;}
        @include w4 {min-width: 138px;}
        @include h2 {min-width: 138px;}

        // width: 41%;
        // @include w4 {width: 47%;}
        // @include h2 {width: 47%;}
        // margin-right: 3%;

        border-radius: 30px;
        border: 1px solid $color-1;
        background-image: url('../../assets/Google_G.svg');
        background-repeat: no-repeat;
        background-size: 25px auto;
        background-position: left 18px center;
        @include w1 {
          background-position: left 10px center;
        }
        @include h2 {
          background-position: left 10px center;
        }
        padding-left: 40px;
        padding-right: 12px;
      }
    }
  }
</style>
