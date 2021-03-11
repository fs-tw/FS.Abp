import { ModuleWithProviders } from '@angular/core';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
export declare const LAYOUTS: (typeof ApplicationLayoutComponent | typeof AccountLayoutComponent | typeof EmptyLayoutComponent)[];
export declare class ThemeUnifyModule {
    static forRoot(): ModuleWithProviders<ThemeUnifyModule>;
}
export declare class RootUnifyModule {
}
