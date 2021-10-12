import { ModuleWithProviders, NgModule } from '@angular/core';
import { ENTITY_TYPE_PROVIDERS } from './providers/entity-type.provider';
import { EntityTypeService } from './providers/entity-type.service';

@NgModule()
export class EntityTypeManagementConfigModule {
  static forRoot(): ModuleWithProviders<EntityTypeManagementConfigModule> {
    return {
      ngModule: EntityTypeManagementConfigModule,
      providers: [
        ENTITY_TYPE_PROVIDERS,
        EntityTypeService
      ],
    };
  }
}
