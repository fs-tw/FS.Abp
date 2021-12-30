import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityFeaturesModule } from '@fs-tw/core/entity-features'
import { ApiInterceptor } from './interceptors/api.interceptor';

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
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: ApiInterceptor,
          multi: true,
        },
      ],
    };
  }
}
