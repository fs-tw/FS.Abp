// tslint:disable: no-duplicate-imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ThemeTheProjectModule } from '@fs/theme.the-project';
import { registerLocale } from '@volo/abp.ng.language-management/locale';
import { IdentityConfigModule } from '@volo/abp.ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';

const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: false })];

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
    IdentityConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),

    ThemeTheProjectModule.forRoot(),
    ...(environment.production ? [] : LOGGERS)

  ],
  providers: [APP_ROUTE_PROVIDER],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }


