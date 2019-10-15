<template>
  <section class="account_details">
    <div class="account_details_container">

      <p class="title">פרטי העסק שלך</p>

      <div class="details_list">
        <p>
          {{user.firstName}}
          שלום
        </p>
        <p>ברוך הבא לעסק שלך</p>
        <p>{{user.businesses[0].name}}</p>
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

    created() {
      console.log(this.$store.getters.getLoggedUser);
    }
  };

</script>

<style lang="scss" scoped>

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  .account_details_container {
    background-color: white;
    height: 200px;
    width: 300px;
    margin: 20px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      text-align: center;
    }

    .title {
      line-height: 30px;
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: -0.01rem;
      border-bottom: 1px solid #d4dade;
    }

    .details_list {
      p {
        margin: 5px;

      }
    }

  }
</style>
