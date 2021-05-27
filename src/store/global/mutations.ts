import { GlobalState } from '@/store/global'
import { MutationTree } from 'vuex'

export enum GlobalMutationTypes {
  START_LOADING = 'START_LOADING',
  FINISH_LOADING = 'FINISH_LOADING',
}

export interface GlobalMutations<S = GlobalState> {
  // 请求开始时计数器加一
  [GlobalMutationTypes.START_LOADING]: (state: S) => void
  // 网络请求结束时计数器减一
  [GlobalMutationTypes.FINISH_LOADING]: (state: S) => void
}

const mutations: MutationTree<GlobalState> & GlobalMutations = {
  START_LOADING: state => {
    state.requestNumber++
  },
  FINISH_LOADING: state => {
    state.requestNumber--
  },
}

export default mutations
