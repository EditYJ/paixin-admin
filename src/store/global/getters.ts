import { GlobalState } from '@/store/global/index'
import { GetterTree } from 'vuex'
import { State } from '..'

export interface GlobalGetters<S = GlobalState> {
  isLoading: (state: S) => boolean
}

const getters: GetterTree<GlobalState, State> & GlobalGetters = {
  isLoading: state => state.requestNumber > 0,
}

export default getters
