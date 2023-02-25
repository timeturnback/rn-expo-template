import { Reactotron } from "@app/services/reactotron/reactotronClient"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
// import logger from "redux-logger"

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */
  // middleware.push(appNavigatorMiddleware)

  /* ------------- Analytics Middleware ------------- */
  // middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */
  let sagaMiddleware
  if (__DEV__) {
    const sagaMonitor = Reactotron.createSagaMonitor()
    sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  } else {
    sagaMiddleware = createSagaMiddleware()
  }
  middleware.push(sagaMiddleware)
  // __DEV__ && middleware.push(logger)
  // if (__DEV__) {
  //   // const createFlipper = require("redux-flipper").default
  //   // middleware.push(createFlipper())
  // }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore
  // if (Config.useReactotron) {
  //   enhancers.push(Reactotron.createEnhancer())
  // }
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  // if (ReduxPersist.active) {
  //   Rehydration.updateReducers(store)
  // }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
