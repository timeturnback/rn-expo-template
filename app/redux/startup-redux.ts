import { AnyAction } from "redux"
import { createReducer, createActions, DefaultActionTypes, DefaultActionCreators } from "reduxsauce"
import * as Immutable from "seamless-immutable"

/* ------------- Model interface Create Action ------------- */
export interface StartUpAction extends AnyAction {}
export interface StartUpDoneAction extends AnyAction {}

interface IActionTypes extends DefaultActionTypes {
  STARTUP: "startup"
  STARTUP_DONE: "startupDone"
  CHECK_REMOTE_CONFIG: "checkRemoteConfig"
}

interface IActionCreators extends DefaultActionCreators {
  startup: () => StartUpAction
  startupDone: () => StartUpDoneAction
}

type IActions = StartUpAction | StartUpDoneAction | AnyAction

export interface StartupState {
  loading?: boolean
}
type ImmutableMyType = Immutable.ImmutableObject<StartupState>
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions<IActionTypes, IActionCreators>({
  startup: null,
  startupDone: null,
  checkRemoteConfig: null,
})

export const StartupTypes = Types
export default Creators

export const INITIAL_STATE: ImmutableMyType = Immutable.from({
  loading: true,
})

export const startup = (state: ImmutableMyType) => {
  console.log("asdasssf")
  return state.merge({ loading: true })
}

export const startupDone = (state) => {
  return state.merge({ loading: false })
}

export const reducer = createReducer<ImmutableMyType, IActions>(INITIAL_STATE, {
  [Types.STARTUP]: startup,
  [Types.STARTUP_DONE]: startupDone,
})
