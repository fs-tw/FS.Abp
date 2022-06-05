import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Coding',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44324',
    redirectUri: baseUrl,
    clientId: 'Coding_App',
    responseType: 'code',
    scope: 'offline_access Coding role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44324',
      rootNamespace: 'FS.Coding',
    },
    Coding: {
      url: 'https://localhost:44341',
      rootNamespace: 'FS.Coding',
    },
  },
} as Environment;
