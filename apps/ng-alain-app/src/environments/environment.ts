import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'MyProjectName',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44363',
    redirectUri: baseUrl,
    clientId: 'MyProjectName_App',
    responseType: 'code',
    scope: 'offline_access MyProjectName',
  },
  apis: {
    default: {
      url: 'https://localhost:44363',
      rootNamespace: 'MyCompanyName.MyProjectName',
    },
  },
} as Environment;
