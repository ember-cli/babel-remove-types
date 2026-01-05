/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const nativeESM = !!process.features.typescript;

const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
      useESM: nativeESM,
    },
  },
};

if (nativeESM) {
  config.runner = 'jest-light-runner';
}

module.exports = config;
