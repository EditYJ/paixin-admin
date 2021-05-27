import { CommitOptions, createStore, DispatchOptions, Store, useStore as _useStore } from 'vuex'

import global, { GlobalState } from './global'
import { GlobalGetters } from './global/getters'
import { GlobalMutations } from './global/mutations'

import mockTest, { MockTestState } from './mockTest'
import { MockTestActions } from './mockTest/actions'
import { MockTestGetters } from './mockTest/getters'
import { MockTestMutations } from './mockTest/mutations'

export type NameSpaced<T, N extends string> = {
  [K in keyof T & string as `${N}/${K}`]: T[K]
}

export type AllMutations = NameSpaced<GlobalMutations, 'global'> &
  NameSpaced<MockTestMutations, 'mockTest'>
export type AllActions = NameSpaced<MockTestActions, 'mockTest'>
export type AllGetters = NameSpaced<GlobalGetters, 'global'> &
  NameSpaced<MockTestGetters, 'mockTest'>

export interface State {
  global: GlobalState
  mockTest: MockTestState
}

/**
 * 重写 'getters' | 'commit' | 'dispatch' 类型
 */
export type AugmentedStore = Omit<Store<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit: <K extends keyof AllMutations, P extends Parameters<AllMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ) => ReturnType<AllMutations[K]>
} & {
  dispatch: <K extends keyof AllActions, P extends Parameters<AllActions[K]>[1]>(
    key: K,
    payload?: P,
    options?: DispatchOptions,
  ) => ReturnType<AllActions[K]>
} & {
  getters: {
    [K in keyof AllGetters]: ReturnType<AllGetters[K]>
  }
}

const store = createStore({
  modules: {
    global,
    mockTest,
  },
}) as AugmentedStore

export function useStore() {
  return _useStore() as AugmentedStore
}

export default store
