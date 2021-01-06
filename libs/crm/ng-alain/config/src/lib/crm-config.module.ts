import { NgModule, ModuleWithProviders } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: []
})
export class CrmNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<CrmNgAlainConfigModule> {
    return {
      ngModule: CrmNgAlainConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }


}
