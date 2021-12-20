import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'CFTA',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44348',
    redirectUri: baseUrl,
    clientId: 'CFTA_App',
    responseType: 'code',
    scope: 'offline_access CFTA',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44348',
      rootNamespace: 'CFTA',
    },
  },
} as Environment;
