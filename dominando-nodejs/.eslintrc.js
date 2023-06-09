module.exports = {
 env: {
  es2021: true,
 },
 extends: ["airbnb-base", "prettier"],
 plugins: ["prettier"],
 overrides: [],
 parserOptions: {
  ecmaVersion: "latest",
 },
 rules: {
  "prettier/prettier": "error",
  "class-methods-use-this": "off",
  "no-param-reassign": "off",
  camelcase: "off",
  "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  "no-console": ["error", { allow: ["warn", "error", "log"] }],
 },
};
