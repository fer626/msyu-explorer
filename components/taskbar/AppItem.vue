<template>
  <div class="ico-app">
    Soy {{ info.name }}
  </div>
</template>

<script>
export default {
  name: 'Appitem',
  props: {
    info: {
      type: Object
    }
  },
  async fetch () {
    console.log('props:', this.info)
  }
}
</script>

<style scoped>
.ico-app {
  width: 50px;
  height: 50px;
}
</style>