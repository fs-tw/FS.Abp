import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Authentication',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44343',
    redirectUri: baseUrl,
    clientId: 'Authentication_App',
    responseType: 'code',
    scope: 'offline_access Authentication',
  },
  apis: {
    default: {
      url: 'https://localhost:44343',
      rootNamespace: 'FS.Abp.Authentication',
    },
    Authentication: {
      url: 'https://localhost:44353',
      rootNamespace: 'FS.Abp.Authentication',
    },
  },
} as Environment;
