module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": [ "@typescript-eslint", "jest", "prettier", "react", "react-native" ],
  "rules": {
    "react-native/no-unused-styles": 2,
    "quotes": [ "error", "double" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", "never" ],
    "semi": "error",
    "max-len": [ "error", { "code": 140 } ],
    "no-console": [ "error" ],
    "no-await-in-loop": "warn",
    "prettier/prettier": "off",
    "arrow-spacing": [ "error", {
      "before": true,
      "after": true
    } ],
    "@typescript-eslint/indent": [ "error", 2 ],
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/no-access-state-in-setstate": 2,
    "no-return-await": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": [ "error", {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true
    } ], // allowExpressions=true applies to closures only, not function declaration
    "@typescript-eslint/no-non-null-assertion": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "error",
    "jest/valid-title": "error",
    "jest/valid-expect": "error", "jest/valid-expect-in-promise": "error"
  }
};
