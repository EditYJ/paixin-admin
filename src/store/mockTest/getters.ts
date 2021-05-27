import { TestResponseDataListItem } from '@/api'
import { GetterTree } from 'vuex'
import { MockTestState } from '.'
import { State } from '..'

export interface MockTestGetters<S = MockTestState> {
  mockList: (state: S) => TestResponseDataListItem[]
}

const getters: GetterTree<MockTestState, State> & MockTestGetters = {
  mockList: state => state.mockList,
}

export default getters
