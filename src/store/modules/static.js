const getDefaultState = () => (
  {
    datas: 'asdasd'
  }
)

const state = getDefaultState()

const getters = {
  datas: state => state.datas
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
