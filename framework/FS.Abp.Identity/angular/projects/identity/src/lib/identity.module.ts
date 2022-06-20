import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { IdentityComponent } from './components/identity.component';
import { IdentityRoutingModule } from './identity-routing.module';

@NgModule({
  declarations: [IdentityComponent],
  imports: [CoreModule, ThemeSharedModule, IdentityRoutingModule],
  exports: [IdentityComponent],
})
export class IdentityModule {
  static forChild(): ModuleWithProviders<IdentityModule> {
    return {
      ngModule: IdentityModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<IdentityModule> {
    return new LazyModuleFactory(IdentityModule.forChild());
  }
}
