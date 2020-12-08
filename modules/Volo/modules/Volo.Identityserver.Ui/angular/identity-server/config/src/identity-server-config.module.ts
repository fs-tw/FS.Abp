import { ModuleWithProviders, NgModule } from '@angular/core';
import { IDENTITY_SERVER_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class IdentityServerConfigModule {
  static forRoot(): ModuleWithProviders<IdentityServerConfigModule> {
    return {
      ngModule: IdentityServerConfigModule,
      providers: [IDENTITY_SERVER_ROUTE_PROVIDERS],
    };
  }
}
