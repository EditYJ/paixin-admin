import { TestResponseDataListItem } from '@/api'
import { Module } from 'vuex'
import { State } from '..'
import mutations from '@/store/mockTest/mutations'
import getters from '@/store/mockTest/getters'
import actions from '@/store/mockTest/actions'

export interface MockTestState {
  mockList: TestResponseDataListItem[]
}

const mockTest: Module<MockTestState, State> = {
  namespaced: true,
  state: {
    mockList: [],
  },
  mutations,
  getters,
  actions,
}

export default mockTest
