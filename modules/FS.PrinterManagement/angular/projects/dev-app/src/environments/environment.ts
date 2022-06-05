import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'PrinterManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44331',
    redirectUri: baseUrl,
    clientId: 'PrinterManagement_App',
    responseType: 'code',
    scope: 'offline_access PrinterManagement role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44331',
      rootNamespace: 'FS.PrinterManagement',
    },
    PrinterManagement: {
      url: 'https://localhost:44334',
      rootNamespace: 'FS.PrinterManagement',
    },
  },
} as Environment;
