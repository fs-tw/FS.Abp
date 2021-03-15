import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { PostModule } from './post/post.module';
import { TagManagementModule } from './tag-management/tag-management.module';
const ɵ0 = PostModule.forEarly, ɵ1 = TagManagementModule.forEarly;
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'post' },
    {
        path: '',
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'post',
                loadChildren: ɵ0
            },
            {
                path: 'tag',
                loadChildren: ɵ1
            },
        ],
    }
];
export class CmsAdminRoutingModule {
}
CmsAdminRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=cms-admin-routing.module.js.map