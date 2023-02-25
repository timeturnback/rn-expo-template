import { AnyAction } from "redux"
import {
  createReducer,
  createActions,
  // ActionTypes,
  DefaultActionTypes,
  DefaultActionCreators,
} from "reduxsauce"
import * as Immutable from "seamless-immutable"

/* ------------- Model interface Create Action ------------- */
// export interface GetConfigAction extends AnyAction {}

interface IActionTypes extends DefaultActionTypes {
  SHOW_GLOBAL_LOADING: "showGlobalLoading"
  HIDE_GLOBAL_LOADING: "hideGlobalLoading"
}

interface IActionCreators extends DefaultActionCreators {
  showGlobalLoading: () => AnyAction
  hideGlobalLoading: () => AnyAction
}

type IActions = AnyAction

export interface ConfigState {
  loading: boolean
}
type ImmutableMyType = Immutable.ImmutableObject<ConfigState>
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IActionTypes, IActionCreators>({
  showGlobalLoading: null,
  hideGlobalLoading: null,
})

export const ConfigTypes = Types
export default Creators

export const INITIAL_STATE: ImmutableMyType = Immutable.from({
  loading: false,
})

export const showGlobalLoading = (state: ImmutableMyType) => state.merge({ loading: true })

export const hideGlobalLoading = (state: ImmutableMyType) => state.merge({ loading: false })

export const reducer = createReducer<ImmutableMyType, IActions>(INITIAL_STATE, {
  [Types.SHOW_GLOBAL_LOADING]: showGlobalLoading,
  [Types.HIDE_GLOBAL_LOADING]: hideGlobalLoading,
})
