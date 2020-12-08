const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'text-template-management',
  testMatch: ['<rootDir>/packages/text-template-management/**/+(*.)+(spec).+(ts)'],
};
