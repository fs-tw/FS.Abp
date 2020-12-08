const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'saas',
  testMatch: ['<rootDir>/packages/saas/**/+(*.)+(spec).+(ts)'],
};
