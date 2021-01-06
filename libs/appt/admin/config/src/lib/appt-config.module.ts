import { NgModule, ModuleWithProviders } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: []
})
export class ApptAdminConfigModule {
  static forRoot(): ModuleWithProviders<ApptAdminConfigModule> {
    return {
      ngModule: ApptAdminConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }


}
