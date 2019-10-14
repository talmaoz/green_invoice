<template>
  <section class="welcome">
    WELCOME PAGE
    <button @click="logout()">יציאה</button>
  </section>

</template>

<script>
  export default {
    name: 'welcomePage',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
