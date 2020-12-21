import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  test: true,
  production: false,
  hmr: false,
  application: {
    baseUrl,
    name: 'FS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44309',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'code',
    scope: 'offline_access FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44309',
      rootNamespace: 'MyCompanyName.MyProjectName',
    },
    AbpFeatureManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp',
    },
    AbpPermissionManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp.PermissionManagement',
    },
    AbpTenantManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp.TenantManagement',
    },
    AbpIdentity: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp',
    },
  },
} as Config.Environment;
