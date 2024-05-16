import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });


const eslint = [
  {
    languageOptions: { globals: globals.browser },
    parser: 'babel-eslint',
    plugins: [
      'react'
    ],
    rules: {

    }
  },
  ...compat.extends("airbnb"),
];

export default eslint;
