const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  name: 'audit-logging',
  testMatch: ['<rootDir>/packages/audit-logging/**/+(*.)+(spec).+(ts)'],
};
