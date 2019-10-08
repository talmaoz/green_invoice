<template>
  <main>
    <div class="container">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'appMain',
  }
</script>

<style scoped>

  main {
    width: 100%;
    height: calc(100% - 120px);
    overflow: hidden;
    background-color: var(--bg-opacity-color-2);
  }

  .content {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
  }
</style>
