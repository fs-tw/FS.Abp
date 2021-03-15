import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostStateService } from './providers/post-state.service';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
export class RouteConfig {
    constructor(postStateService) {
        this.postStateService = postStateService;
    }
    resolve() {
        return this.postStateService.setBlog(null);
    }
}
RouteConfig.decorators = [
    { type: Injectable }
];
RouteConfig.ctorParameters = () => [
    { type: PostStateService }
];
const routes = [
    {
        path: '',
        component: LayoutComponent,
        resolve: { 'RouteConfig': RouteConfig },
        children: [
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'detail',
                component: DetailComponent,
            },
            {
                path: 'detail/:postId',
                component: DetailComponent,
            }
        ],
    }
];
export class PostRoutingModule {
}
PostRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    RouteConfig
                ]
            },] }
];
//# sourceMappingURL=post-routing.module.js.map