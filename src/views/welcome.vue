<template>
  <section class="welcome">
    <div class="welcome_container">
      <div class="welcome_msg">
        <p>
          {{user.firstName}}
          שלום
        </p>
        <p>ברוך הבא לעסק שלך</p>
        <p>{{user.businesses[0].name}}</p>
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
      method1(param1) {
        // Do stuff
      },
    },

    created() {
      console.log(this.$store.getters.getLoggedUser);
    }
  };

</script>

<style lang="scss" scoped>
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
  }
</style>
