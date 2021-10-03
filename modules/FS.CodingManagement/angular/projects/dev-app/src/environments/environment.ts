import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'CodingManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44321',
    redirectUri: baseUrl,
    clientId: 'CodingManagement_App',
    responseType: 'code',
    scope: 'offline_access CodingManagement role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44321',
      rootNamespace: 'FS.CodingManagement',
    },
    CodingManagement: {
      url: 'https://localhost:44335',
      rootNamespace: 'FS.CodingManagement',
    },
  },
} as Environment;
