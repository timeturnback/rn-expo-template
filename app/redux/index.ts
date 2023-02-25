import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import configureStore from "./create-store"
import rootSaga from "../saga"
import ReduxPersist from "@app/config/redux-persist"

//
import StartupActions, { StartupState } from "./startup-redux"
import ConfigActions, { ConfigState } from "./config-redux"
import UserActions, { UserState } from "./user-redux"

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: require("./startup-redux").reducer,
  config: require("./config-redux").reducer,
  user: require("./user-redux").reducer,
})

export type RootState = ReturnType<typeof reducers>
/// create Store instance
export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require("../saga").default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
/* -------------Export Selector -------------------------------- */
export const selector = {
  startup: (state: RootState) => state.startup as StartupState,
  config: (state: RootState) => state.config as ConfigState,
  user: (state: RootState) => state.user as UserState,
}

export { StartupActions, ConfigActions, UserActions }
