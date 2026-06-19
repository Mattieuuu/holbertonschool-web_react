module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'node',
};