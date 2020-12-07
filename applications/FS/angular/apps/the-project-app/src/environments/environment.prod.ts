import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'FS',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44320',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'code',
    scope: 'offline_access FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44320',
      rootNamespace: 'FS',
    },
  },
} as Environment;
