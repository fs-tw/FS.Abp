import { NgModule } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CrmNgAlainRoutingModule } from './crm-ng-alain-routing.module';
//import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
export class CrmNgAlainModule {
    static forChild() {
        return {
            ngModule: CrmNgAlainModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CrmNgAlainModule.forChild());
    }
}
CrmNgAlainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    //SharedModule,
                    CoreModule,
                    CrmNgAlainRoutingModule
                ]
            },] }
];
//# sourceMappingURL=crm-ng-alain.module.js.map