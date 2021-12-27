const getDefaultState = () => (
  {
    account: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'
  }
)

const state = getDefaultState()

const getters = {
  getAccount: state => state.account
}

const mutations = {
  // 重置 state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  defaultDispatch ({ commit }) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
