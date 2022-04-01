export const state = () => ({
  apps: [
    {
      name: 'File explorer',
      desc: 'You can browser into files',
      slug: 'file-explorer',
      url: './Fileexplorer',
      author: 'Neko Quincy',
      dateAdd: new Date(),
      dateRegistered: new Date(),
      version: '0.1',
      icon: ''
    },
    {
      name: 'Music',
      desc: 'Can listen music from Youtube, spotify or Amazon Music',
      slug: 'music',
      url: './Music',
      author: 'Neko Quincy',
      dateAdd: new Date(),
      dateRegistered: new Date(),
      version: '0.1',
      icon: ''
    },
    {
      name: 'Device',
      desc: 'You can see your device connected',
      slug: 'device',
      url: './Device',
      author: 'Neko Quincy',
      dateAdd: new Date(),
      dateRegistered: new Date(),
      version: '0.1',
      icon: ''
    },
    {
      name: 'Sync',
      desc: 'You can sync your storage from one source',
      slug: 'sync',
      url: './Sync',
      author: 'Neko Quincy',
      dateAdd: new Date(),
      dateRegistered: new Date(),
      version: '0.1',
      icon: ''
    },
    {
      name: 'More',
      desc: 'Show all installed apps',
      slug: 'more',
      url: './more',
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
