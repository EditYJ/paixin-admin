import { TestResponseDataListItem } from '@/api'
import { MutationTree } from 'vuex'
import { MockTestState } from '.'

export enum MockTestMutationsTypes {
  SET_MOCKLIST = 'SET_MOCKLIST',
}

export interface MockTestMutations<S = MockTestState> {
  [MockTestMutationsTypes.SET_MOCKLIST]: (state: S, payload: TestResponseDataListItem[]) => void
}

const mutations: MutationTree<MockTestState> & MockTestMutations = {
  SET_MOCKLIST: (state, payload) => (state.mockList = payload),
}

export default mutations
