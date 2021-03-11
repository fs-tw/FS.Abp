import { NgModule } from '@angular/core';
import { AlainThemeModule } from '@delon/theme';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、在 `shared-delon.module.ts` 导入 `ReuseTabModule` 模块
 * 2、注册 `RouteReuseStrategy`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);
// #endregion
//import { DelonACLModule } from '@delon/acl';
// Please refer to: https://ng-alain.com/docs/global-config
const alainConfig = {
    st: { modal: { paramsName: 'i', size: 'lg' }, page: { toTop: true, toTopOffset: 0 } },
    pageHeader: { homeI18n: 'home', recursiveBreadcrumb: true },
    auth: { login_url: '/account/login' },
};
// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
const ngZorroConfig = {};
export class GlobalConfigModule {
    constructor() {
    }
    static forRoot() {
        return {
            ngModule: GlobalConfigModule,
            providers: [
            //{ provide: ALAIN_CONFIG, useValue: alainConfig },
            //{ provide: NZ_CONFIG, useValue: ngZorroConfig }
            ],
        };
    }
}
GlobalConfigModule.ɵfac = function GlobalConfigModule_Factory(t) { return new (t || GlobalConfigModule)(); };
GlobalConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: GlobalConfigModule });
GlobalConfigModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            AlainThemeModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalConfigModule, { imports: [i1.AlainThemeModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AlainThemeModule.forRoot(),
                ],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=global-config.module.js.map