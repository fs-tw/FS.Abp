import { ModuleWithProviders, NgModule } from '@angular/core';
import { METADATA_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class MetadataConfigModule {
  static forRoot(): ModuleWithProviders<MetadataConfigModule> {
    return {
      ngModule: MetadataConfigModule,
      providers: [METADATA_ROUTE_PROVIDERS],
    };
  }
}
