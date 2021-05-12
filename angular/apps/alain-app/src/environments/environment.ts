import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FS',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44309',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'password',
    scope: 'offline_access openid profile role email phone FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44309',
      rootNamespace: '',
    },
  },
} as Environment;
