<template>
  <div class="window-os">
    <div class="window-os--container">
      <div class="window-os--title">
        <div class="window-os--name">{{ windowname }}</div>
        <div class="window--os--btn">
          <button class="btn window-os--btn--minimize">-</button>
          <button class="btn window-os--btn--maximize">=</button>
          <button class="btn window-os--btn--close">X</button>
        </div>
      </div>
      <div class="window-os--content">
        window
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Window-app',
  props: {
    windowname: {
      type: string,
      default: '.:| Default title |:.'
    }
  },
  data: () => ({
    dragable: window.innerWidth >= 575.98
  })
}
</script>

<style scoped>
.window-os {
  width: 100%;
  height: 200px;
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>