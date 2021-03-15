import { Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { PageService } from './providers/page.service';
export class RouteConfig {
    constructor(pageService) {
        this.pageService = pageService;
    }
    resolve() {
        this.pageService.getTageListFromApi();
    }
}
RouteConfig.decorators = [
    { type: Injectable }
];
RouteConfig.ctorParameters = () => [
    { type: PageService }
];
export class DetailRouteConfig {
    constructor(pageService) {
        this.pageService = pageService;
    }
    resolve(route) {
        let tagId = route.params.tagId;
        if (tagId)
            this.pageService.getTagOneFromApi(tagId);
    }
}
DetailRouteConfig.decorators = [
    { type: Injectable }
];
DetailRouteConfig.ctorParameters = () => [
    { type: PageService }
];
const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent,
                resolve: { RouteConfig: RouteConfig },
            },
            {
                path: ':tagId',
                component: TagDetailComponent,
                resolve: { DetailRouteConfig: DetailRouteConfig }
            }
        ],
    }
];
export class TagManagementRoutingModule {
}
TagManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    RouteConfig,
                    DetailRouteConfig
                ]
            },] }
];
//# sourceMappingURL=tag-management-routing.module.js.map