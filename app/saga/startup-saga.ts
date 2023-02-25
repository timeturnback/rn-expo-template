import { initFonts } from "@app/theme/fonts"
import { put } from "redux-saga/effects"
import StartupActions from "../redux/startup-redux"

export function* startup() {
  try {
    yield initFonts()
    yield put(StartupActions.startupDone())
  } catch (error) {
    console.error("Saga startup error:", error)
  }
}
