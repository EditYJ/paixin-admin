import { fetchTestApi, TestResponseDataListItem } from '@/api'
import { ActionContext, ActionTree } from 'vuex'
import { MockTestState } from '.'
import { State } from '..'
import { MockTestMutations, MockTestMutationsTypes } from './mutations'

export enum MockTestActionTypes {
  FETCH_MOCK_TABLE = 'FETCH_MOCK_TABLE',
}

export type MockTestAugmentActionContext = Omit<ActionContext<MockTestState, State>, 'commit'> & {
  commit: <K extends keyof MockTestMutations>(
    ket: K,
    payload: Parameters<MockTestMutations[K]>[1],
  ) => ReturnType<MockTestMutations[K]>
}

export interface MockTestActions {
  [MockTestActionTypes.FETCH_MOCK_TABLE]: (
    ctx: MockTestAugmentActionContext,
  ) => Promise<TestResponseDataListItem[]>
}

const actions: ActionTree<MockTestState, State> & MockTestActions = {
  FETCH_MOCK_TABLE: async ctx => {
    const { data } = await fetchTestApi()
    ctx.commit(MockTestMutationsTypes.SET_MOCKLIST, data.list)

    return new Promise(resolve => {
      resolve(data.list)
    })
  },
}

export default actions
