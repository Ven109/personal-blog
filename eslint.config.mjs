import withNuxt from "./.nuxt/eslint.config.mjs";
import kalimahAppsTailwind from '@kalimahapps/eslint-plugin-tailwind';

export default withNuxt({
  plugins: {
    kalimahAppsTailwind,
  },
  files: ["**/*.ts", "**/*.vue"],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1
      }
    }],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always",
        "selfClosingTag": {
          "singleline": "never",
          "multiline": "always"
        }
      }
    ],
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": false,
      "ignoreWhenEmpty": false,
    }],
    'kalimahAppsTailwind/sort': 'warn',
		'kalimahAppsTailwind/multiline': ['warn', {
      maxLen: 200,
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowedNames: ["self"],
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "comma", requireLast: true },
        singleline: { delimiter: "comma", requireLast: false },
      },
    ],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": [0],
    "@typescript-eslint/no-use-before-define": [0],
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/ban-types": "off",
    "brace-style": [1],
    "callback-return": [2, ["callback", "cb", "next", "done", "proceed"]],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-style": [2, "last"],
    "curly": ["error", "multi-line"],
    "eol-last": [1],
    "eqeqeq": [2, "smart"],
    "handle-callback-err": [2],
    "indent": [2, 4, { SwitchCase: 1 }],
    "keyword-spacing": [0],
    "linebreak-style": [2, "unix"],
    "max-lines-per-function": ["error", { max: 100, skipBlankLines: true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-duplicate-imports": [2, { includeExports: true }],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-return-assign": [2, "always"],
    "no-sequences": [2],
    "no-trailing-spaces": [2],
    "no-undef": [0],
    "no-unexpected-multiline": [1],
    "no-var": [1],
    "one-var": [2, "never"],
    "semi": "off",
    "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
    "vue/html-indent": ["error", 4],
    "vue/max-lines-per-block": [
      "error",
      { template: 80, script: 100, skipBlankLines: true },
    ],
    "vue/one-component-per-file": "off",
    "vue/require-explicit-emits": ["error"],
    // remove soon
    "vue/no-deprecated-events-api": "off",
    "vue/no-deprecated-dollar-listeners-api": "off",
    // turn on
    "vue/no-required-prop-with-default": "off",
  },
});
