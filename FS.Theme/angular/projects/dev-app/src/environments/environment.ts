import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost.4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Theme',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44396',
    redirectUri: baseUrl,
    clientId: 'Theme_App',
    responseType: 'code',
    scope: 'offline_access Theme',
  },
  apis: {
    default: {
      url: 'https://localhost:44396',
      rootNamespace: 'FS.Theme',
    },
    Theme: {
      url: 'https://localhost:44344',
      rootNamespace: 'FS.Theme',
    },
  },
} as Environment;
