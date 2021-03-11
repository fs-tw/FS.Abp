import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostStateService } from './providers/post-state.service';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import * as i0 from "@angular/core";
import * as i1 from "./providers/post-state.service";
import * as i2 from "@angular/router";
export class RouteConfig {
    constructor(postStateService) {
        this.postStateService = postStateService;
    }
    resolve() {
        return this.postStateService.setBlog(null);
    }
}
RouteConfig.ɵfac = function RouteConfig_Factory(t) { return new (t || RouteConfig)(i0.ɵɵinject(i1.PostStateService)); };
RouteConfig.ɵprov = i0.ɵɵdefineInjectable({ token: RouteConfig, factory: RouteConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteConfig, [{
        type: Injectable
    }], function () { return [{ type: i1.PostStateService }]; }, null); })();
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
PostRoutingModule.ɵfac = function PostRoutingModule_Factory(t) { return new (t || PostRoutingModule)(); };
PostRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: PostRoutingModule });
PostRoutingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        RouteConfig
    ], imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PostRoutingModule, { imports: [i2.RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    RouteConfig
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=post-routing.module.js.map