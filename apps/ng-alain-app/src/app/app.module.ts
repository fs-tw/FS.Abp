// tslint:disable: no-duplicate-imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ThemeNgAlainModule } from '@fs/theme.ng-alain';
//import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
import { AccountConfigModule } from '@volo/abp.ng.account/config';
import { AuditLoggingConfigModule } from '@volo/abp.ng.audit-logging/config';
import { IdentityServerConfigModule } from '@volo/abp.ng.identity-server/config';
import { IdentityConfigModule } from '@volo/abp.ng.identity/config';
import { LanguageManagementConfigModule } from '@volo/abp.ng.language-management/config';
import { SaasConfigModule } from '@volo/abp.ng.saas/config';
import { TextTemplateManagementConfigModule } from '@volo/abp.ng.text-template-management/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { AppRoutingModule } from './app-routing.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { registerLocale } from '@volo/abp.ng.language-management/locale';


//const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: false })];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    LanguageManagementConfigModule.forRoot(),
    SaasConfigModule.forRoot(),
    AuditLoggingConfigModule.forRoot(),
    IdentityServerConfigModule.forRoot(),
    TextTemplateManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),

    ThemeNgAlainModule.forRoot(),
    //...(environment.production ? [] : LOGGERS)

  ],
  providers: [APP_ROUTE_PROVIDER],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
