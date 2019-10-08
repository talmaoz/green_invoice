<template>
  <section class="accountDetails">
  </section>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        someData: 'someDataVal'
      }
    },
    methods: {
      method1(param1) {
          // Do stuff
      },
    }
  }

</script>

<style scoped>

.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.continue_with{
  margin: 10px auto 30px;
  padding: 10px;
  font-size: 1.8em;
  font-weight: bold;
  background-color: green;
}

.continue_with_container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.continue_with_individual_container {
  width: 200px;
  height: 196px;
  cursor: pointer;
  background-color: green;
  border-radius: 50%;
  box-shadow: inset 0 -6px 23px rgba(255, 255, 255, 0.3);
  padding-top: 36px;
  margin: 6px;
}

.continue_with_text {
  font-size: 1.2em;
  margin-bottom: 5px;
  border-radius: 10px;
}

.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
  cursor: pointer;
}

.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.social-button img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .continue_with {
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  .continue_with_container {
    width: 100%;
    max-height: calc(100% - 40px);
  }

  .continue_with_individual_container {
    margin: 6px;
    max-height: 120px;
    padding-top: 10px;
    width: 122px;
  }

  .continue_with_text {
    font-size: 0.8em;
    margin: 0;
  }

  .social-button {
    transform: scale(0.8);
  }
}
</style>
