<template>
  <div class="dev-adversiment">
    <h1>This app is under development</h1>
    <p>There is a possibility that it has multiple failures or performance problems</p>
  </div>
</template>

<script>
export default {
  name: 'Adver-siment',
  data: () => ({
    close: false,
    accept: false
  })
}
</script>

<style scoped>
.dev-adversiment {
  position: absolute;
}
</style>
