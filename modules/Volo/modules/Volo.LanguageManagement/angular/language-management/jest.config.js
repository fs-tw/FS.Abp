const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'language-management',
  testMatch: ['<rootDir>/packages/language-management/**/+(*.)+(spec).+(ts)'],
};
