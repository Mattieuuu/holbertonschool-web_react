module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/js/*.test.ts'],
};