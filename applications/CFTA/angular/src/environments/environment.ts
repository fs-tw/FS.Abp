import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
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
    scope: 'offline_access openid profile role email phone CFTA',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44348',
      rootNamespace: 'CFTA',
    },
  },
} as Environment;
