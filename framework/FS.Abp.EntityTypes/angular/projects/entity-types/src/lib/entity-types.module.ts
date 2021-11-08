import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { EntityTypesComponent } from './components/entity-types.component';
import { EntityTypesRoutingModule } from './entity-types-routing.module';

@NgModule({
  declarations: [EntityTypesComponent],
  imports: [CoreModule, ThemeSharedModule, EntityTypesRoutingModule],
  exports: [EntityTypesComponent],
})
export class EntityTypesModule {
  static forChild(): ModuleWithProviders<EntityTypesModule> {
    return {
      ngModule: EntityTypesModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EntityTypesModule> {
    return new LazyModuleFactory(EntityTypesModule.forChild());
  }
}
