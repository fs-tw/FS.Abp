import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'LineNotify',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44377',
    redirectUri: baseUrl,
    clientId: 'LineNotify_App',
    responseType: 'code',
    scope: 'offline_access LineNotify role email openid profile',
  },
  apis: {
    default: {
      url: 'https://localhost:44377',
      rootNamespace: 'FS.LineNotify',
    },
    LineNotify: {
      url: 'https://localhost:44331',
      rootNamespace: 'FS.LineNotify',
    },
  },
} as Environment;
