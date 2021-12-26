import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityFeaturesModule } from '@fs-tw/core/entity-features'

@NgModule({
  imports: [EntityFeaturesModule.forRoot()],
})
export class RootModule {}

@NgModule({
  imports: [
    EntityFeaturesModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: RootModule
    };
  }
}
