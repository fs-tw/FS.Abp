import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'AuditLogging',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44366',
    redirectUri: baseUrl,
    clientId: 'AuditLogging_App',
    responseType: 'code',
    scope: 'offline_access AuditLogging role email openid profile',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44366',
      rootNamespace: 'FS.Abp.AuditLogging',
    },
    AuditLogging: {
      url: 'https://localhost:44358',
      rootNamespace: 'FS.Abp.AuditLogging',
    },
  },
} as Environment;
