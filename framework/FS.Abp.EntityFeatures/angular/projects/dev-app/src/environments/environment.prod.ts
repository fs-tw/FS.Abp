import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'EntityFeatures',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44366',
    redirectUri: baseUrl,
    clientId: 'EntityFeatures_App',
    responseType: 'code',
    scope: 'offline_access EntityFeatures',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44366',
      rootNamespace: 'FS.Abp.EntityFeatures',
    },
    EntityFeatures: {
      url: 'https://localhost:44364',
      rootNamespace: 'FS.Abp.EntityFeatures',
    },
  },
} as Environment;
