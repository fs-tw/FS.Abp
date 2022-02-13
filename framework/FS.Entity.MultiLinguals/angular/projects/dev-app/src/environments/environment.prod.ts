import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'MultiLinguals',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44387',
    redirectUri: baseUrl,
    clientId: 'MultiLinguals_App',
    responseType: 'code',
    scope: 'offline_access MultiLinguals',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44387',
      rootNamespace: 'FS.Entity.MultiLinguals',
    },
    MultiLinguals: {
      url: 'https://localhost:44364',
      rootNamespace: 'FS.Entity.MultiLinguals',
    },
  },
} as Environment;
