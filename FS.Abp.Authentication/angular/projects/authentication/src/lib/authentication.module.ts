import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { AuthenticationComponent } from './components/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CoreModule, ThemeSharedModule, AuthenticationRoutingModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {
  static forChild(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<AuthenticationModule> {
    return new LazyModuleFactory(AuthenticationModule.forChild());
  }
}
