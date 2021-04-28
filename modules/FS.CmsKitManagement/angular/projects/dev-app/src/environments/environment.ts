import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'CmsKitManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44325',
    redirectUri: baseUrl,
    clientId: 'CmsKitManagement_App',
    responseType: 'code',
    scope: 'offline_access CmsKitManagement role email openid profile',
  },
  apis: {
    default: {
      url: 'https://localhost:44325',
      rootNamespace: 'FS.CmsKitManagement',
    },
    CmsKitManagement: {
      url: 'https://localhost:44369',
      rootNamespace: 'FS.CmsKitManagement',
    },
  },
} as Environment;
