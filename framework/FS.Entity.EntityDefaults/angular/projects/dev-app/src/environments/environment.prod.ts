import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'EntityDefaults',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44355',
    redirectUri: baseUrl,
    clientId: 'EntityDefaults_App',
    responseType: 'code',
    scope: 'offline_access EntityDefaults',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44355',
      rootNamespace: 'FS.Entity.EntityDefaults',
    },
    EntityDefaults: {
      url: 'https://localhost:44375',
      rootNamespace: 'FS.Entity.EntityDefaults',
    },
  },
} as Environment;
