import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Printing',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44392',
    redirectUri: baseUrl,
    clientId: 'Printing_App',
    responseType: 'code',
    scope: 'offline_access Printing role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44392',
      rootNamespace: 'FS.Printer.Printing',
    },
    Printing: {
      url: 'https://localhost:44394',
      rootNamespace: 'FS.Printer.Printing',
    },
  },
} as Environment;
