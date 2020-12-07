import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FileManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44301',
    clientId: 'FileManagement_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'FileManagement',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44300',
      rootNamespace: 'Volo.FileManagement',
    },
    FileManagement: {
      url: 'https://localhost:44300',
      rootNamespace: 'Volo.FileManagement',
    },
  },
} as Config.Environment;
