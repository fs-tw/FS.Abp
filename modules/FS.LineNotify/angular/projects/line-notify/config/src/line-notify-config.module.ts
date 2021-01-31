import { ModuleWithProviders, NgModule } from '@angular/core';
import { LINE_NOTIFY_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class LineNotifyConfigModule {
  static forRoot(): ModuleWithProviders<LineNotifyConfigModule> {
    return {
      ngModule: LineNotifyConfigModule,
      providers: [LINE_NOTIFY_ROUTE_PROVIDERS],
    };
  }
}
