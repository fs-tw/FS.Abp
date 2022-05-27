import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'SyncTable',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44350',
    redirectUri: baseUrl,
    clientId: 'SyncTable_App',
    responseType: 'code',
    scope: 'offline_access SyncTable role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44350',
      rootNamespace: 'FS.Abp.SyncTable',
    },
    SyncTable: {
      url: 'https://localhost:44311',
      rootNamespace: 'FS.Abp.SyncTable',
    },
  },
} as Environment;
