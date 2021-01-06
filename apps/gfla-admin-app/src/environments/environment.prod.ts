import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'GFLA',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368',
    redirectUri: baseUrl,
    clientId: 'GFLA_App',
    responseType: 'code',
    scope: 'offline_access GFLA',
  },
  apis: {
    default: {
      url: 'https://localhost:44368',
      rootNamespace: 'GFLA',
    },
  },
} as Environment;
