import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { RootModule } from './root/root.module';
import { NGALAINMS_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
export class ThemeAlainMsModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NGALAINMS_THEME_STYLES_PROVIDERS,
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
                declarations: [ApplicationLayoutComponent],
            },] }
];
//# sourceMappingURL=theme-alain-ms.module.js.map