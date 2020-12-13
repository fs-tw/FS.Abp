import { Config } from '@abp/ng.core';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'FileManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44384',
    clientId: 'FileManagement_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'FileManagement',
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44399',
    },
    FileManagement: {
      url: 'https://localhost:44399',
    },
  },
} as Config.Environment;
