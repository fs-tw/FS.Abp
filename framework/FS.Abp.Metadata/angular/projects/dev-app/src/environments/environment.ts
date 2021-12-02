import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Metadata',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44373',
    redirectUri: baseUrl,
    clientId: 'Metadata_App',
    responseType: 'code',
    scope: 'offline_access Metadata role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44373',
      rootNamespace: 'FS.Abp.Metadata',
    },
    Metadata: {
      url: 'https://localhost:44337',
      rootNamespace: 'FS.Abp.Metadata',
    },
  },
} as Environment;
