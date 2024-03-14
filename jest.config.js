module.exports = {
  preset: 'react-native',
  transform: {'^.+\\.(js|jsx)$': 'babel-jest'},
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-vector-icons)/)',
  ],
};
