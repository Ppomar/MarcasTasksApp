module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(expo|expo-modules-core|expo-constants|expo-font|@expo|@react-native|react-native|react-navigation|react-redux))',
  ],
}
