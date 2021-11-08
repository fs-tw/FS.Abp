import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_TYPES_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class EntityTypesConfigModule {
  static forRoot(): ModuleWithProviders<EntityTypesConfigModule> {
    return {
      ngModule: EntityTypesConfigModule,
      providers: [ENTITY_TYPES_ROUTE_PROVIDERS],
    };
  }
}
