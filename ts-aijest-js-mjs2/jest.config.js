// /** @type {import('ts-jest').JestConfigWithTsJest} */
// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   roots: ['<rootDir>/src'],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest'
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.mjs?$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx','mjs', 'json', 'node']
// };

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    "^.+\\.m?[tj]sx?$": [
        "ts-jest",
        {
          "useESM": true
        }
      ]
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.m?[tj]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs']
};