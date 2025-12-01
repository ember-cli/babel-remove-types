/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const runNatively = !!process.features.typescript;

module.exports = {
  runner: runNatively ? 'jest-light-runner' : undefined,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
      useESM: runNatively,
    },
  },
};
