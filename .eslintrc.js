module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'react-app/jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'object-curly-spacing': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
  },
};
