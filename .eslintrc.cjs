module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],
    "max-lines-per-function": ["error", { "max": 30 }],
    "@typescript-eslint/no-explicit-any": "error",
    "prefer-arrow-callback": "error",
    "func-style": ["error", "expression"],
    "prefer-const": "error",
 },
}
