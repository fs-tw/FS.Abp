import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { TheProjectSharedModule } from '@fs/theme.the-project/shared';
import { TheProjectBasicModule } from '@fs/theme.the-project/basic';


@NgModule({
  imports: [
    ThemeSharedModule.forRoot(),
    TheProjectSharedModule.forRoot(),
    TheProjectBasicModule.forRoot()
  ],
})
export class RootTheProjectModule {}

@NgModule({
  imports: [
    CommonModule
  ],
})
export class TheProjectModule {
  static forRoot(): ModuleWithProviders<TheProjectModule> {
    return {
      ngModule: RootTheProjectModule
    };
  }
}
