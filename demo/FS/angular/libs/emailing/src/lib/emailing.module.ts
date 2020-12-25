import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { EmailingComponent } from './components/emailing.component';
import { EmailingRoutingModule } from './emailing-routing.module';

@NgModule({
  declarations: [EmailingComponent],
  imports: [CoreModule, ThemeSharedModule, EmailingRoutingModule],
  exports: [EmailingComponent],
})
export class EmailingModule {
  static forChild(): ModuleWithProviders<EmailingModule> {
    return {
      ngModule: EmailingModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<EmailingModule> {
    return new LazyModuleFactory(EmailingModule.forChild());
  }
}
