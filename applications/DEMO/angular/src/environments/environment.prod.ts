import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'DEMO',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44372',
    redirectUri: baseUrl,
    clientId: 'DEMO_App',
    responseType: 'code',
    scope: 'offline_access DEMO',
  },
  apis: {
    default: {
      url: 'https://localhost:44372',
      rootNamespace: 'DEMO',
    },
  },
} as Environment;
