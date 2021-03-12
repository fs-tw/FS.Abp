import { ModuleWithProviders } from '@angular/core';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "./components/application-layout/application-layout.component";
import * as i2 from "./components/account-layout/account-layout.component";
import * as i3 from "./components/empty-layout/empty-layout.component";
import * as i4 from "./components/header/header.component";
import * as i5 from "./components/footer/footer.component";
import * as i6 from "./components/banner/banner.component";
import * as i7 from "./components/validation-error/validation-error.component";
import * as i8 from "./components/settings/settings.component";
import * as i9 from "@abp/ng.core";
import * as i10 from "@abp/ng.theme.shared";
import * as i11 from "@ng-bootstrap/ng-bootstrap";
import * as i12 from "@ngx-validate/core";
export declare const LAYOUTS: (typeof ApplicationLayoutComponent | typeof AccountLayoutComponent | typeof EmptyLayoutComponent)[];
export declare class ThemeUnifyModule {
    static forRoot(): ModuleWithProviders<ThemeUnifyModule>;
    static ɵfac: i0.ɵɵFactoryDef<ThemeUnifyModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ThemeUnifyModule, [typeof i1.ApplicationLayoutComponent, typeof i2.AccountLayoutComponent, typeof i3.EmptyLayoutComponent, typeof i4.HeaderComponent, typeof i5.FooterComponent, typeof i6.BannerComponent, typeof i7.ValidationErrorComponent, typeof i8.SettingsComponent], [typeof i9.CoreModule, typeof i10.ThemeSharedModule, typeof i11.NgbDropdownModule, typeof i12.NgxValidateCoreModule], [typeof i1.ApplicationLayoutComponent, typeof i2.AccountLayoutComponent, typeof i3.EmptyLayoutComponent, typeof i4.HeaderComponent, typeof i5.FooterComponent, typeof i8.SettingsComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<ThemeUnifyModule>;
}
export declare class RootUnifyModule {
    static ɵfac: i0.ɵɵFactoryDef<RootUnifyModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<RootUnifyModule, never, [typeof i12.NgxValidateCoreModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<RootUnifyModule>;
}
//# sourceMappingURL=theme-unify.module.d.ts.map