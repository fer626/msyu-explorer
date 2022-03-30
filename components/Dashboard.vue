<!-- Please remove this file from your project -->
<template>
  <div>
    <p>Screen size: {{ screen.width }}x{{ screen.heigth }}</p>
    <Taskbar/>
  </div>
</template>

<script>
import Taskbar from './Taskbar.vue'
export default {
  name: 'DashBoard',
  components: { Taskbar },
  data: () => ({
    data: 'hello world',
    screen: {
      width: window.innerWidth,
      heigth: window.innerHeight
    }
  })
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
