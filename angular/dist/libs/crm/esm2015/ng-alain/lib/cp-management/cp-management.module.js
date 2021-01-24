import { NgModule } from '@angular/core';
import { CpManagementRoutingModule } from './cp-management-routing.module';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { LazyModuleFactory } from '@abp/ng.core';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SVModule } from '@delon/abc/sv';
import { NzTagModule } from 'ng-zorro-antd/tag';
export class CpManagementModule {
    static forChild() {
        return {
            ngModule: CpManagementModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CpManagementModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(CpManagementModule.forChild());
    }
}
CpManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LayoutComponent, MainComponent],
                imports: [
                    NzGridModule,
                    NzTabsModule,
                    NzSelectModule,
                    NzTableModule,
                    NzCollapseModule,
                    NzDividerModule,
                    SVModule,
                    NzTagModule,
                    SharedModule,
                    CpManagementRoutingModule,
                ],
            },] }
];
//# sourceMappingURL=cp-management.module.js.map