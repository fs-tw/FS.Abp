import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'IIC',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44394',
    redirectUri: baseUrl,
    clientId: 'IIC_App',
    responseType: 'code',
    scope: 'offline_access IIC',
  },
  apis: {
    default: {
      url: 'https://localhost:44394',
      rootNamespace: 'IIC',
    },
  },
} as Environment;