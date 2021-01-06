import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { CoreModule } from '@abp/ng.core';
import { ThemeCoreModule } from '@fs-tw/theme-core';
import { TheProjectSharedModule } from '@fs-tw/theme-the-project/shared';
import { TheProjectBasicModule } from '@fs-tw/theme-the-project/basic';


@NgModule({
  imports: [
    ThemeSharedModule.forRoot(),
    ThemeBasicModule.forRoot(),
    TheProjectSharedModule.forRoot(),
    TheProjectBasicModule.forRoot(),
    ThemeCoreModule.forRoot(),
  ],
})
export class RootTheProjectModule {}

@NgModule({
  imports: [
    RootTheProjectModule,
    CoreModule
  ],
})
export class ThemeTheProjectModule {
  static forRoot(): ModuleWithProviders<ThemeTheProjectModule> {
    return {
      ngModule: ThemeTheProjectModule
    };
  }
}
