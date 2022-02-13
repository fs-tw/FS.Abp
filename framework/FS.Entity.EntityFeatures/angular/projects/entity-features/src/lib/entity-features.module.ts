import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { EntityFeaturesComponent } from './components/entity-features.component';
import { EntityFeaturesRoutingModule } from './entity-features-routing.module';

@NgModule({
  declarations: [EntityFeaturesComponent],
  imports: [CoreModule, ThemeSharedModule, EntityFeaturesRoutingModule],
  exports: [EntityFeaturesComponent],
})
export class EntityFeaturesModule {
  static forChild(): ModuleWithProviders<EntityFeaturesModule> {
    return {
      ngModule: EntityFeaturesModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EntityFeaturesModule> {
    return new LazyModuleFactory(EntityFeaturesModule.forChild());
  }
}
