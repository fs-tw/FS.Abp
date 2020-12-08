const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'identity',
  testMatch: ['<rootDir>/packages/identity/**/+(*.)+(spec).+(ts)'],
};
