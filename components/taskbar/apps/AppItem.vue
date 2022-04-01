<template>
  <div class="ico-app">
    {{ info.name }}
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
    // console.log('props:', this.info)
  }
}
</script>

<style scoped>
.ico-app {
  width: 65px;
  height: 65px;
  padding: .25rem;
  border: 1px solid #ccc;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
  user-select: none;
  border-radius: 50%;
}
.ico-app:hover {
  box-shadow: 0px 7px 16px 6px rgba(0,0,0,0.25);
}
</style>