import { NgModule } from '@angular/core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { EmployeeRoutingModule } from './employee-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { STModule } from '@delon/abc/st';
import { NzModalModule } from 'ng-zorro-antd/modal';
export class EmployeeModule {
    static forChild() {
        return {
            ngModule: EmployeeModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(EmployeeModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(EmployeeModule.forChild());
    }
}
EmployeeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent],
                imports: [
                    NzModalModule,
                    STModule,
                    SharedModule,
                    EmployeeRoutingModule
                ]
            },] }
];
//# sourceMappingURL=employee.module.js.map