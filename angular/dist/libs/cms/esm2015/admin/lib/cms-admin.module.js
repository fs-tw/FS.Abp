import { NgModule } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CmsAdminRoutingModule } from './cms-admin-routing.module';
import { SharedModule } from './shared/shared.module';
export class CmsAdminModule {
    static forChild() {
        return {
            ngModule: CmsAdminModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CmsAdminModule.forChild());
    }
}
CmsAdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule,
                    CoreModule,
                    CmsAdminRoutingModule,
                ],
                exports: [
                    SharedModule,
                ],
            },] }
];
//# sourceMappingURL=cms-admin.module.js.map