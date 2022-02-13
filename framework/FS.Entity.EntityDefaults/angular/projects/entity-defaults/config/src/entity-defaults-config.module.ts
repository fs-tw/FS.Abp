import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_DEFAULTS_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class EntityDefaultsConfigModule {
  static forRoot(): ModuleWithProviders<EntityDefaultsConfigModule> {
    return {
      ngModule: EntityDefaultsConfigModule,
      providers: [ENTITY_DEFAULTS_ROUTE_PROVIDERS],
    };
  }
}
