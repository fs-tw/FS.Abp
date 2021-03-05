import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'File',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44330',
    redirectUri: baseUrl,
    clientId: 'File_App',
    responseType: 'code',
    scope: 'offline_access File role email openid profile',
  },
  apis: {
    default: {
      url: 'https://localhost:44330',
      rootNamespace: 'FS.Abp.File',
    },
    File: {
      url: 'https://localhost:44341',
      rootNamespace: 'FS.Abp.File',
    },
  },
} as Environment;
