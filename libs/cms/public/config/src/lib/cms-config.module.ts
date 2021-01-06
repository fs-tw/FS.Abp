import { NgModule, ModuleWithProviders } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: []
})
export class CmsTheProjectConfigModule {
  static forRoot(): ModuleWithProviders<CmsTheProjectConfigModule> {
    return {
      ngModule: CmsTheProjectConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }


}
