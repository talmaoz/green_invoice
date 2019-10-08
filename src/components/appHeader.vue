<template>
  <header>
  </header>
</template>

<script>

  export default {
    name: 'appHeader',
    data() {
      return {
        routes: [],
        loggedUser: this.$store.getters.getLoggedUser
      }
    },
    methods: {
    },
  }

</script>

<style lang="scss" scoped>

</style>
