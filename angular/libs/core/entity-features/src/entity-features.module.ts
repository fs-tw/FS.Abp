import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_FEATURES_PROVIDERS } from './providers/entity-features.provider';
import { EntityFeaturesStore } from './providers/entity-features.store';

@NgModule()
export class EntityFeaturesModule {
  static forRoot(): ModuleWithProviders<EntityFeaturesModule> {
    return {
      ngModule: EntityFeaturesModule,
      providers: [
        ENTITY_FEATURES_PROVIDERS,
        EntityFeaturesStore
      ],
    };
  }
}
