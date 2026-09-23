import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Rule
      'semi': ['error', 'always'], // always use a semicolon
      'indent': ['error', 2],      // Indent 2 spaces
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Maximum of one line break between codes.
    },
  }
  
]);

export default eslintConfig;
