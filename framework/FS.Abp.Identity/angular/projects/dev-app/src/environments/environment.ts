import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Identity',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44326',
    redirectUri: baseUrl,
    clientId: 'Identity_App',
    responseType: 'code',
    scope: 'offline_access Identity role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44326',
      rootNamespace: 'FS.Abp.Identity',
    },
    Identity: {
      url: 'https://localhost:44346',
      rootNamespace: 'FS.Abp.Identity',
    },
  },
} as Environment;
