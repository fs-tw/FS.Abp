import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'DEMO',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44399',
    redirectUri: baseUrl,
    clientId: 'DEMO_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone DEMO',
  },
  apis: {
    default: {
      url: 'https://localhost:44399',
      rootNamespace: 'DEMO',
    },
  },
} as Environment;
