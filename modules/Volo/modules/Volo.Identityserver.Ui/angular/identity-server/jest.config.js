const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'identity-server',
  testMatch: ['<rootDir>/packages/identity-server/**/+(*.)+(spec).+(ts)'],
};
