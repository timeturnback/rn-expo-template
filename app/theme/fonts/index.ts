import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    RobotoRegular: require("./Roboto-Regular.ttf"),
    RobotoBold: require("./Roboto-Bold.ttf"),
    RobotoMedium: require("./Roboto-Medium.ttf"),
    RobotoLight: require("./Roboto-Light.ttf"),
  })
}
