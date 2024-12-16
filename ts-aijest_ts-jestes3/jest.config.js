export default {
  preset: 'ts-jest/presets/default-esm', // 使用 ES 模块预设
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.m?[tj]sx$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
}