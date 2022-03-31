<template>
  <div :class="showModal">
    <div class="aversiment-modal">
      <div class="close-modal" @click="closeModal">X</div>
      <div class="content">
        <h1>This app is under development</h1>
        <p>
          There is a possibility that it has multiple failures or performance problems.<br/>
          by using this project it is assumed that you are aware of its risks and possible flaws, please do not use anything personal in this!
        </p>
        <button class="btn" @click="acceptAdversiment">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adver-siment',
  data: () => ({
    close: false,
    accept: false
  }),
  mounted () {
    console.log('Adversiment status:', this.$store.getters.getAdversimentStatus)
  },
  computed: {
    showModal: () => (
      {
        'dev-adversiment': true,
        show: !this.close && !this.accept
      }
    )
  },
  methods: {
    acceptAdversiment: () => {
      this.accept = true
    },
    closeModal: () => {
      this.close = true
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
.aversiment-modal {
  padding: 1rem;
  background-color: yellow;
}
.dev-adversiment {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 50%;
  display: none;
  transform: translate(0, -50%);
}
.dev-adversiment.show {
  display: block;
}
</style>
