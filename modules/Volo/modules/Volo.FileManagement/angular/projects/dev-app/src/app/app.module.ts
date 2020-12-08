import { AccountConfigModule } from '@volo/abp.ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { IdentityConfigModule } from '@volo/abp.ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { SaasConfigModule } from '@volo/abp.ng.saas/config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileManagementConfigModule } from '@volo/abp.ng.file-management/config';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { ThemeLeptonModule } from '@volo/abp.ng.theme.lepton';
import { registerLocale } from '@abp/ng.core/locale';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      sendNullsAsQueryParam: false,
      skipGetAppConfiguration: false,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    FileManagementConfigModule.forRoot(),
    SaasConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeLeptonModule.forRoot(),
    NgxsModule.forRoot(),
  ],
  providers: [APP_ROUTE_PROVIDER],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
