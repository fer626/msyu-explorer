<template>
  <div class="taskbar">
    <div v-for="item in data" :key="item.slug">
      <app-item :info="item"/>
    </div>
  </div>
</template>

<script>
import Appitem from './AppItem.vue';
export default {
  name: 'TaskBar',
  component: {
    'app-item': Appitem
  },
  async fetch() {
    this.data = this.$store.getters['general/apps']
    console.log('data:', this.data)
  },
  data: () => ({
    data: null
  })
}
</script>

<style scoped>
.taskbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>