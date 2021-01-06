import { NgModule } from '@angular/core';
import { AlainThemeModule } from '@delon/theme';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { STModule } from '@delon/abc/st';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
export class EnterpriseModule {
    static forChild() {
        return {
            ngModule: EnterpriseModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(EnterpriseModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(EnterpriseModule.forChild());
    }
}
EnterpriseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    //NzSelectModule,
                    AlainThemeModule.forChild(),
                    NzDrawerModule,
                    STModule,
                    NzModalModule,
                    EnterpriseRoutingModule,
                ],
            },] }
];
//# sourceMappingURL=enterprise.module.js.map