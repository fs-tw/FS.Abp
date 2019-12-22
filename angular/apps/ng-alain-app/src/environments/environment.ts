export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'WebSite',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44356',
    clientId: 'WebSite_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'WebSite',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44356',
    },
  },
  localization: {
    defaultResourceName: 'WebSite',
  },
};
