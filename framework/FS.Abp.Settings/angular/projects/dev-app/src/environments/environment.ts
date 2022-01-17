import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Settings',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44373',
    redirectUri: baseUrl,
    clientId: 'Settings_App',
    responseType: 'code',
    scope: 'offline_access Settings role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44373',
      rootNamespace: 'FS.Abp.Settings',
    },
    Settings: {
      url: 'https://localhost:44380',
      rootNamespace: 'FS.Abp.Settings',
    },
  },
} as Environment;
