import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost.4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Abp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44387',
    redirectUri: baseUrl,
    clientId: 'Abp_App',
    responseType: 'code',
    scope: 'offline_access Abp',
  },
  apis: {
    default: {
      url: 'https://localhost:44387',
      rootNamespace: 'FS.Abp',
    },
    Abp: {
      url: 'https://localhost:44366',
      rootNamespace: 'FS.Abp',
    },
  },
} as Environment;
