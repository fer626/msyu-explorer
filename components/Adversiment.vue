<template>
  <div :class="showModal">
    <div class="aversiment-modal">
      <div class="close-modal" @click="closeModal"> X </div>
      <div class="content">
        <h1>This app is under development</h1>
        <p>
          There is a possibility that it has multiple failures or performance problems.<br>
          by using this project it is assumed that you are aware of its risks and possible flaws, please do not use anything personal in this!
        </p>
        <div class="modal-options">
          <button class="btn" @click="acceptAdversiment">Accept</button>
          <div>
            <input v-model="nevermind" type="checkbox" name="nevermind" ref="revermind" id="nevermind">
            <label for="nevermind">No volver a mostrar</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import func from 'vue-editor-bridge'
export default {
  name: 'Adver-siment',
  data: () => {
    return {
      close: false,
      accept: false,
      nevermind: false
    }
  },
  mounted () {
    console.log('Adversiment status:', this.$store.getters.getAdversimentStatus)
  },
  computed: {
    showModal () {
      return {
        'dev-adversiment': true,
        show: !this.accept
      }
    }
  },
  methods: {
    acceptAdversiment () {
      this.accept = true
    },
    closeModal () {
      this.close = true
    }
  }//,
  // watch: {
  //   nevermind: function (nv) {
  //     console.log('CAMBIO:', nv)
  //     this.$store.commit('SET_ADVERSIMENT_STATUS', nv)
  //   }
  // }
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
.modal-options {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
