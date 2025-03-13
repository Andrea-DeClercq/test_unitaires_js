import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion: "latest",
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
    }
  },
  pluginJs.configs.recommended,
];
