import { connect, getSelectedAddress } from '@/utils/metamask'

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
  SET_SELECTED_ADDRESS (state, selectedAddress) {
    state.account = selectedAddress
  },
  // 重置 state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  async connectToMetamask ({ dispatch }) {
    try {
      await connect()
      await dispatch('setSelectedAddress')
    } catch (error) {
      console.log(error)
    }
  },
  async setSelectedAddress ({ commit }) {
    const selectedAddress = await getSelectedAddress()
    commit('SET_SELECTED_ADDRESS', selectedAddress)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
