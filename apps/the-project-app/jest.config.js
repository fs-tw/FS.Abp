module.exports = {
  name: 'the-project-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/the-project-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
