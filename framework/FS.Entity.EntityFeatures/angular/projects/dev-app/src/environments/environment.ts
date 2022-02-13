import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'EntityFeatures',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44361',
    redirectUri: baseUrl,
    clientId: 'EntityFeatures_App',
    responseType: 'code',
    scope: 'offline_access EntityFeatures role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44361',
      rootNamespace: 'FS.Entity.EntityFeatures',
    },
    EntityFeatures: {
      url: 'https://localhost:44314',
      rootNamespace: 'FS.Entity.EntityFeatures',
    },
  },
} as Environment;
