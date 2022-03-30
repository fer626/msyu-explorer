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
  ]
})

export const mutations = () => ({
  SET_NEW_APP (state, payload) {
    state.apps.push(payload)
  }
})

export const actions = () => ({
  async fetch ({ commit, state, rootState }, payload) {

  }
})

export const getters = {
  getaApp (payload) {
    return state.apps.find(a => a.name === payload)
  }
}
