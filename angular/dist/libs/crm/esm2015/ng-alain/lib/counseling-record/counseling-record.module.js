import { NgModule } from '@angular/core';
import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
import { CounselingRecordRoutingModule } from './counseling-record-routing.module';
import { LazyModuleFactory } from '@abp/ng.core';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { STModule } from '@delon/abc/st';
export class CounselingRecordModule {
    static forChild() {
        return {
            ngModule: CounselingRecordModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CounselingRecordModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(CounselingRecordModule.forChild());
    }
}
CounselingRecordModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent],
                imports: [
                    STModule,
                    SharedModule,
                    CounselingRecordRoutingModule
                ]
            },] }
];
//# sourceMappingURL=counseling-record.module.js.map