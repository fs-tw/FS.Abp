export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'Cms',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357',
    clientId: 'Cms_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'Cms',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44387',
    },
  },
  localization: {
    defaultResourceName: 'Cms',
  },
};
