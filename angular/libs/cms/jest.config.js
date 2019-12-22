module.exports = {
  name: 'cms',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cms',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
