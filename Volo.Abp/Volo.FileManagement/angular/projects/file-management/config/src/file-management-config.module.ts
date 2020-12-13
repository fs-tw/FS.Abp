import { ModuleWithProviders, NgModule } from '@angular/core';
import { FILE_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class FileManagementConfigModule {
  static forRoot(): ModuleWithProviders<FileManagementConfigModule> {
    return {
      ngModule: FileManagementConfigModule,
      providers: [FILE_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
