<template>
  <div class="taskbar">
    <div class="taskbar-content">
      <app-item v-for="item in data" :key="item.slug" :info="item"/>
    </div>
    <div class="taskbar-bar"></div>
  </div>
</template>

<script>
import Appitem from './apps/AppItem.vue';
export default {
  name: 'TaskBar',
  component: {
    'app-item': Appitem
  },
  async fetch() {
    this.data = this.$store.getters['general/apps']
    console.log('data:', this.data.map(a => a.name))
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
  background-color: aqua;
  box-shadow: 0px 2px 50px 3px rgba(0,0,0,0.25);
}
.taskbar-content {
  padding: .5rem;
  display: flex;
  justify-content: space-around;
}
</style>