import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { PostModule } from './post/post.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'post' },
    {
        path: '',
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'post',
                loadChildren: PostModule.forEarly
            },
        ],
    }
];
export class CmsAdminRoutingModule {
}
CmsAdminRoutingModule.ɵfac = function CmsAdminRoutingModule_Factory(t) { return new (t || CmsAdminRoutingModule)(); };
CmsAdminRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsAdminRoutingModule });
CmsAdminRoutingModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsAdminRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsAdminRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();
//# sourceMappingURL=cms-admin-routing.module.js.map