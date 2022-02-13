import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { EntityDefaultsComponent } from './components/entity-defaults.component';
import { EntityDefaultsRoutingModule } from './entity-defaults-routing.module';

@NgModule({
  declarations: [EntityDefaultsComponent],
  imports: [CoreModule, ThemeSharedModule, EntityDefaultsRoutingModule],
  exports: [EntityDefaultsComponent],
})
export class EntityDefaultsModule {
  static forChild(): ModuleWithProviders<EntityDefaultsModule> {
    return {
      ngModule: EntityDefaultsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EntityDefaultsModule> {
    return new LazyModuleFactory(EntityDefaultsModule.forChild());
  }
}
