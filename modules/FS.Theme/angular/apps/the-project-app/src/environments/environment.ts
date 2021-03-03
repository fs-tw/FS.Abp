import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Theme',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44322',
    redirectUri: baseUrl,
    clientId: 'Theme_App',
    responseType: 'code',
    scope: 'offline_access Theme role email openid profile',
  },
  apis: {
    default: {
      url: 'https://localhost:44322',
      rootNamespace: '',
    },
    Theme: {
      url: 'https://localhost:44342',
      rootNamespace: '',
    },
    'theme-the-project': {
      url: 'https://localhost:44342',
      rootNamespace: '',
    },
  },
} as Environment;
