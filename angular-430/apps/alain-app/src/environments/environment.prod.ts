import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'DEMO',
  },
  remoteEnv:{url:'/appsettings.json', mergeStrategy: 'deepmerge'},
  oAuthConfig: {
    issuer: 'https://localhost:44311',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'password',
    scope: 'offline_access FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44311',
      rootNamespace: '',
    },
  },
} as Environment;
