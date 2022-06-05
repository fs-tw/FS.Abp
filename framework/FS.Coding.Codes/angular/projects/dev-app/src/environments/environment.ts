import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Codes',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44350',
    redirectUri: baseUrl,
    clientId: 'Codes_App',
    responseType: 'code',
    scope: 'offline_access Codes role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44350',
      rootNamespace: 'FS.Coding.Codes',
    },
    Codes: {
      url: 'https://localhost:44384',
      rootNamespace: 'FS.Coding.Codes',
    },
  },
} as Environment;
