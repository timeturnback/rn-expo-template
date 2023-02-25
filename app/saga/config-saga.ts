// import VersionNumber from "react-native-version-number"
// import { Alert, Platform, Linking } from "react-native"
// import compareVersions from "compare-versions"
// import { IS_IOS } from "@app/utils/contants"
// import { call, put } from "redux-saga/effects"
// import { ApiInstance } from "@app/services/api"
// import { handleError } from "@app/services/api/api-helper"
// import { ConfigActions } from "@app/redux"

// export function* getConfigConstants() {
//   const response = yield call(ApiInstance.getConfigConstants)
//   const { result, error } = handleError(response)
//   if (error) {
//     //
//   } else {
//     const config = {}
//     result?.forEach((item) => {
//       config[item.name] = item.value
//     })
//     yield put(ConfigActions.setConfigConstants(config))
//   }
// }
