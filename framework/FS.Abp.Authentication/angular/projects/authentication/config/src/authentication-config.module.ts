import { ModuleWithProviders, NgModule } from '@angular/core';
import { AUTHENTICATION_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class AuthenticationConfigModule {
  static forRoot(): ModuleWithProviders<AuthenticationConfigModule> {
    return {
      ngModule: AuthenticationConfigModule,
      providers: [AUTHENTICATION_ROUTE_PROVIDERS],
    };
  }
}
