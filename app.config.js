module.exports = {
  expo: {
    name: "Gluten Free Life",
    slug: "gluten-free-life",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      resizeMode: "contain",
      backgroundColor: "#67B26F"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      "supportsTablet": true
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#67B26F"
      }
    },
    web: {},
    plugins: [
      "expo-router"
    ],
    scheme: "glutenfreelife",
    newArchEnabled: true,
    experiments: {
      typedRoutes: true
    }
  }
}; 