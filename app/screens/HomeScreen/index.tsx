import React from "react"
import { View, ViewStyle } from "react-native"
import { DemoPage } from "@redcloudsteam/ui-rn"

export type HomeScreenParamList = {
  test: undefined
}
export const HomeScreen = () => {
  return (
    <View style={$container}>
      <DemoPage />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
}
