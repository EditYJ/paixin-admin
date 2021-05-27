import { Module } from 'vuex'
import { State } from '@/store'
import mutations from '@/store/global/mutations'
import getters from '@/store/global/getters'

export interface GlobalState {
  requestNumber: number
}

const global: Module<GlobalState, State> = {
  namespaced: true,
  state: {
    requestNumber: 0,
  },
  mutations,
  getters,
}

export default global
