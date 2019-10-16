<template>
  <section class="account_details">
    <div class="account_details_container">

      <p class="title">פרטי העסק שלך</p>

      <div class="details_list">

        <div class="details_list_row">
          <p class="details_list_row_title">שם פרטי</p>
          <p class="details_list_row_value">{{user.firstName}}</p>
        </div>

        <div class="details_list_row">
          <p class="details_list_row_title">שם משפחה</p>
          <p class="details_list_row_value">{{user.lastName}}</p>
        </div>

        <div class="details_list_row">
          <p class="details_list_row_title">אימייל</p>
          <p class="details_list_row_value">{{user.email}}</p>
        </div>

        <div class="details_list_row">
          <p class="details_list_row_title">שם עסק</p>
          <p class="details_list_row_value">{{user.businesses[0].name}}</p>
        </div>

        <div class="details_list_row">
          <p class="details_list_row_title">כתובת עסק</p>
          <p class="details_list_row_value">
            {{user.businesses[0].address}}
            ,
            {{user.businesses[0].city}}
          </p>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
  export default {
    name: 'accountDetails',
    data() {
      return {
        user: this.$store.getters.getLoggedUser,
      };
    },
  };

</script>

<style lang="scss" scoped>

  @import "../../scss/variables";
  @import "../../scss/mixins";

  .account_details_container {
    background-color: white;
    width: 300px;
    margin: 20px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

    p {
      text-align: center;
    }

    .title {
      line-height: 30px;
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: -0.01rem;
      border-bottom: 1px solid #d4dade;
      margin-bottom: 10px;
    }

    .details_list {
      .details_list_row {
        margin: 5px 20px;
        direction: rtl;

        p {
          display: inline-block;
          width: 50%;
          direction: rtl;
          text-align: start;
        }

        &_title {
          font-weight: bold;
        }
      }
    }
  }
</style>
