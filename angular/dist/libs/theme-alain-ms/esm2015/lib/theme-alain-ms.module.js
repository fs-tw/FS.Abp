import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { RootModule } from './root/root.module';
import { NG_ALAIN_MS_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
export class ThemeAlainMsModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NG_ALAIN_MS_THEME_STYLES_PROVIDERS,
                NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS
            ]
        };
    }
}
ThemeAlainMsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    LayoutModule,
                    NzSpinModule
                ],
                declarations: [ApplicationLayoutComponent, AccountLayoutComponent],
            },] }
];
//# sourceMappingURL=theme-alain-ms.module.js.map