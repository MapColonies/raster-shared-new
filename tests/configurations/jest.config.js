/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  coverageReporters: ['text', 'html'],
  rootDir: '../../.',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/configurations/jest.setup.js'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts}', '!**/node_modules/**', '!**/vendor/**'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      { multipleReportsUnitePath: './reports', pageTitle: 'integration', publicPath: './reports', filename: 'integration.html' },
    ],
  ],
  testEnvironment: 'node',
};
