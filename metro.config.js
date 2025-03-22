const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Create a custom resolver for web platform
const config = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    resolveRequest: (context, moduleName, platform) => {
      // Specifically block react-native-maps modules when building for web
      if (platform === 'web' && moduleName.includes('react-native-maps')) {
        return {
          type: 'empty',
        };
      }
      
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = config; 