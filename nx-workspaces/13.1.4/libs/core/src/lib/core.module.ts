import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityTypsModule } from '@fs-tw/core/entity-types'

@NgModule({
  imports: [EntityTypsModule.forRoot()],
})
export class RootModule {}

@NgModule({
  imports: [
    EntityTypsModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<RootModule> {
    return {
      ngModule: RootModule
    };
  }
}
