import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'GFLA',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368',
    redirectUri: baseUrl,
    clientId: 'GFLA_App',
    responseType: 'password',
    scope: 'offline_access GFLA',
  },
  apis: {
    default: {
      url: 'https://localhost:44368',
      rootNamespace: '',
    },
  },
} as Environment;
