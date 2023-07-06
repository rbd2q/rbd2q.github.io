module.exports = {
  "root": true,
  plugins: ['prettier', 'simple-import-sort', "react", "react-hooks", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    'airbnb',
    'prettier',
  ],
  rules: {
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [2, {"namedComponents": "arrow-function"}],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": false,
      "optionalDependencies": false,
      "peerDependencies": false
    }],
    "react/prop-types": "off"
  },
};
