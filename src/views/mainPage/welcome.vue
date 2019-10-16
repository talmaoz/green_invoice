<template>
  <section class="welcome">
    <div class="welcome_container">
      <div class="welcome_msg">
        <p>
          {{user.firstName}}
          שלום
        </p>
        <p>ברוך הבא לעסק שלך</p>
        <p>"{{user.businesses[0].name}}"</p>
      </div>
      <button @click="logout()">יציאה</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'welcome',
    data() {
      return {
        user: this.$store.getters.getLoggedUser,
      };
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>

<style lang="scss" scoped>

  @import "../../scss/variables";
  @import "../../scss/mixins";

  .welcome_container {
    background-color: white;
    height: 200px;
    width: 300px;
    margin: 20px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      margin: 5px;
      text-align: center;
    }

    button {
      margin: 0 auto;
      background-color: white;
      color: $color-1;
      border: 1px solid $color-1;
      border-radius: 30px;
      font-weight: 600;
      line-height: 30px;
      font-size: 17px;
      width: 120px;
    }
  }
</style>
