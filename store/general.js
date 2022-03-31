export const state = () => ({
  apps: [
    {
      name: 'File explorer',
      slug: 'file-explorer',
      url: './Fileexplorer',
      author: 'Neko Quincy',
      dateAdd: new Date(),
      dateRegistered: new Date(),
      version: '0.1',
      icon: ''
    }
  ],
  adversiment: false
})

export const actions = {
  async fetch ({ commit, state, rootState }, payload) {

  }
}

export const mutations = {
  SET_NEW_APP (state, payload) {
    state.apps.push(payload)
  },
  SET_ADVERSIMENT_STATUS (state, payload) {
    console.log('adversiment status:', payload)
    state.adversiment = payload
  }
}

export const getters = {
  apps (state) {
    return state.apps
  },
  adversimentStatus (state) {
    return state.adversiment
  }
}
