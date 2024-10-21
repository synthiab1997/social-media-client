/** @type {import('jest').Config} */
const config = {
  // Specify the environment that will be used for testing
  testEnvironment: "jsdom", // Use 'node' if your tests do not require a DOM

  // Glob patterns to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Specifies which provider should be used to instrument code for coverage
  coverageProvider: "babel",

  // Use babel-jest to transform JavaScript files
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // Define file extensions that Jest should use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  // Patterns to ignore while matching test paths
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  // Use Jest Circus as the test runner
  testRunner: "jest-circus/runner",

  // Enable watch mode if needed
  watchman: true,
};

module.exports = config;
