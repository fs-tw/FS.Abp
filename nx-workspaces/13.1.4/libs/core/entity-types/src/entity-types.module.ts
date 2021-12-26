import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_TYPE_PROVIDERS } from './providers/entity-type.provider';
import { EntityTypeStore } from './providers/entity-type.store';

@NgModule()
export class EntityTypsModule {
  static forRoot(): ModuleWithProviders<EntityTypsModule> {
    return {
      ngModule: EntityTypsModule,
      providers: [
        ENTITY_TYPE_PROVIDERS,
        EntityTypeStore
      ],
    };
  }
}
