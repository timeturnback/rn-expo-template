import { takeLatest, all } from "redux-saga/effects"

/* ------------- Types ------------- */

import { StartupTypes } from "../redux/startup-redux"

/* ------------- Sagas ------------- */
import { startup } from "./startup-saga"

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)])
}
