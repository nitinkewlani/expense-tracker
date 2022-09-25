module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import", "prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "template-curly-spacing": "off", // spacing before and after curly braces
    "react/react-in-jsx-scope": "off", // react import becomes non-compulsory
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off", // turns off the prop-validation
    "react/jsx-fragments": [1, "element"], // use of React.Fragment,
    // "react/jsx-props-no-spreading": "off",
    indent: [0, 2, { ignoredNodes: "TemplateLiteral", SwitchCase: 1 }],
    "no-console": 0, // ignore console log
    "no-alert": "off", // allows to use confirm / alert
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
  },
};
