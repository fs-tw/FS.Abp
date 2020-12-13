const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'account',
  testMatch: ['<rootDir>/packages/account/**/+(*.)+(spec).+(ts)'],
};
