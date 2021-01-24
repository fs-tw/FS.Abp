import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'TheProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44378',
    redirectUri: baseUrl,
    clientId: 'TheProject_App',
    responseType: 'code',
    scope: 'offline_access TheProject',
  },
  apis: {
    default: {
      url: 'https://localhost:44378',
      rootNamespace: 'FS.Theme.TheProject',
    },
    TheProject: {
      url: 'https://localhost:44381',
      rootNamespace: 'FS.Theme.TheProject',
    },
  },
} as Environment;
