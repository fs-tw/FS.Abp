import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Wbm',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44324',
    redirectUri: baseUrl,
    clientId: 'Wbm_App',
    responseType: 'code',
    scope: 'offline_access Wbm role email openid profile',
  },
  apis: {
    default: {
      url: 'https://localhost:44324',
      rootNamespace: 'FS.Wbm',
    },
    Wbm: {
      url: 'https://localhost:44378',
      rootNamespace: 'FS.Wbm',
    },
  },
} as Environment;
