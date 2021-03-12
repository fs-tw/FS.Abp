import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { Options } from './models/options';
import * as i0 from "@angular/core";
import * as i1 from "./components/auth-wrapper/auth-wrapper.component";
import * as i2 from "./components/login/login.component";
import * as i3 from "./components/register/register.component";
import * as i4 from "./components/tenant-box/tenant-box.component";
import * as i5 from "./components/change-password/change-password.component";
import * as i6 from "./components/manage-profile/manage-profile.component";
import * as i7 from "./components/personal-settings/personal-settings.component";
import * as i8 from "@abp/ng.core";
import * as i9 from "./account-routing.module";
import * as i10 from "@abp/ng.theme.shared";
import * as i11 from "@ng-bootstrap/ng-bootstrap";
import * as i12 from "@ngx-validate/core";
export declare class AccountModule {
    static forChild(options: Options): ModuleWithProviders<AccountModule>;
    static forLazy(options: Options): NgModuleFactory<AccountModule>;
    static ɵfac: i0.ɵɵFactoryDef<AccountModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AccountModule, [typeof i1.AuthWrapperComponent, typeof i2.LoginComponent, typeof i3.RegisterComponent, typeof i4.TenantBoxComponent, typeof i5.ChangePasswordComponent, typeof i6.ManageProfileComponent, typeof i7.PersonalSettingsComponent], [typeof i8.CoreModule, typeof i9.AccountRoutingModule, typeof i10.ThemeSharedModule, typeof i11.NgbDropdownModule, typeof i12.NgxValidateCoreModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<AccountModule>;
}
//# sourceMappingURL=account.module.d.ts.map