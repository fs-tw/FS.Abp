const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'theme-lepton',
  testMatch: ['<rootDir>/packages/theme-lepton/**/+(*.)+(spec).+(ts)'],
};
