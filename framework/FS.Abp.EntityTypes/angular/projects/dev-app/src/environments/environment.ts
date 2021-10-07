import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'EntityTypes',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44374',
    redirectUri: baseUrl,
    clientId: 'EntityTypes_App',
    responseType: 'code',
    scope: 'offline_access EntityTypes role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44374',
      rootNamespace: 'FS.Abp.EntityTypes',
    },
    EntityTypes: {
      url: 'https://localhost:44327',
      rootNamespace: 'FS.Abp.EntityTypes',
    },
  },
} as Environment;
