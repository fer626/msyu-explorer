<!-- Please remove this file from your project -->
<template>
  <div class="desktop">
    <p>Screen size: {{ screen.width }}x{{ screen.heigth }}</p>
    <Taskbar/>
    <Adversiment/>
  </div>
</template>

<script>
import Taskbar from './taskbar/Taskbar.vue'
import Adversiment from './Adversiment.vue'
export default {
  name: 'DashBoard',
  components: { Taskbar, Adversiment },
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
.desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
