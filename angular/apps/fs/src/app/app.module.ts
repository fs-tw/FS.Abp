import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { CmsKitManagementConfigModule} from '@fs-tw/cms-kit-management/config';
import { CodingManagementConfigModule} from '@fs-tw/coding-management/config';
//import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { ThemeAlainModule } from '@fs-tw/theme-alain';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';
import { EntityTypeManagementConfigModule } from '@fs-tw/entity-type-management/config';
import { AuditLogManagementConfigModule } from '@fs-tw/audit-log-management/config';

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
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    CmsKitManagementConfigModule.forRoot(),
    CodingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ThemeAlainModule.forRoot(),
    ThemeAlainUiExtensionsModule.forRoot(),

    EntityTypeManagementConfigModule.forRoot(),
    AuditLogManagementConfigModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
