import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Printer',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44316',
    redirectUri: baseUrl,
    clientId: 'Printer_App',
    responseType: 'code',
    scope: 'offline_access Printer',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44316',
      rootNamespace: 'FS.Printer',
    },
    Printer: {
      url: 'https://localhost:44354',
      rootNamespace: 'FS.Printer',
    },
  },
} as Environment;
