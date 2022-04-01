<template>
  <div class="ico-app">
    <div ref="tooltip" class="tooltip">
      <div class="tootip-title">{{ info.name }}</div>
      <div class="tooltip-desc">{{ info.desc }}</div>
    </div>
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
  mounted () {
    // console.log('')
  }
}
</script>

<style scoped>
.ico-app {
  background-color: white;
  width: 65px;
  height: 65px;
  padding: .25rem;
  border: 1px solid #ccc;
  font-size: .9rem;
  text-align: center;
  position: relative;
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
.tooltip {
  position: absolute;
  /* width: 30vh; */
  /* max-width: 60vh; */
  width: 60vh;
  bottom: calc(100% + 5px);
  display: none;
  flex-direction: column;
  padding: .5rem;
  color: white;
  border-radius: 5px;
  background: rgba(0,0,0,0.5);
}
.tooltip.left {
  left: 0;
}
.tooltip.right {
  right: 0;
}
.ico-app:hover .tooltip {
  display: flex;
}
.tooltip-title {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>