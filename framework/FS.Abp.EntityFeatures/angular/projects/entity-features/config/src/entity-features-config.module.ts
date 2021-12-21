import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_FEATURES_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class EntityFeaturesConfigModule {
  static forRoot(): ModuleWithProviders<EntityFeaturesConfigModule> {
    return {
      ngModule: EntityFeaturesConfigModule,
      providers: [ENTITY_FEATURES_ROUTE_PROVIDERS],
    };
  }
}
