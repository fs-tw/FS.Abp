(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@angular/router'), require('@delon/theme'), require('@fs-tw/crm/proxy'), require('@delon/abc/st'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/drawer'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/crm/ng-alain', ['exports', '@angular/core', '@abp/ng.core', '@angular/router', '@delon/theme', '@fs-tw/crm/proxy', '@delon/abc/st', 'ng-zorro-antd/modal', 'ng-zorro-antd/drawer', '@abp/ng.theme.shared'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].crm = global['fs-tw'].crm || {}, global['fs-tw'].crm['ng-alain'] = {}), global.ng.core, global.ng_core, global.ng.router, global.theme, global['fs-tw'].crm.proxy, global.st, global.modal, global.drawer, global.ng_theme_shared));
}(this, (function (exports, core, ng_core, router, theme, proxy, st, modal, drawer, ng_theme_shared) { 'use strict';

    var TAG = {
        1: { text: '個人', color: 'green' },
        2: { text: '企業', color: 'red' }
    };
    var GENDER_TAG = {
        0: { text: '男', color: 'green' },
        1: { text: '女', color: 'red' },
        2: { text: '其他' }
    };
    var MainComponent = /** @class */ (function () {
        function MainComponent(list, customerService) {
            this.list = list;
            this.customerService = customerService;
            this.columns = [
                { title: '編號', index: 'no' },
                { title: '聯絡人', index: 'contactPerson' },
                { title: '聯絡人職稱', index: 'jobTitle' },
                { title: '性別', index: 'gender', type: 'tag', tag: GENDER_TAG },
                { title: '年齡', index: 'ageRange' },
                { title: '電話', index: 'phone' },
                { title: '信箱', index: 'email' },
                { title: '來源管道', index: 'pipelineSource' },
                { title: '企業名稱', index: 'name' },
                { title: '統一編號', index: 'uniformNumber' },
                { title: '公司設立日期', index: 'establishmentDate' },
                { title: '資本額', index: 'money' },
                { title: '縣市+地址', index: 'address' },
                { title: '公司產品/服務', index: 'product' },
                { title: '產業別', index: 'industry' },
                { title: '類型', index: 'discriminator', type: 'tag', tag: TAG },
            ];
            this.datas = [];
            this.count = 0;
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            var customerStreamCreator = function (query) { return _this.customerService.getListByCustomerGetList(query); };
            this.list.hookToQuery(customerStreamCreator).subscribe(function (res) {
                res.items = res.items.filter(function (x) { return x.discriminator == 2; });
                _this.datas = res.items;
                _this.count = res.totalCount;
            });
        };
        MainComponent.prototype.ngOnDestroy = function () {
        };
        return MainComponent;
    }());
    MainComponent.decorators = [
        { type: core.Component, args: [{
                    template: "\r\n<st #st [widthMode]=\"{ type: 'strict' }\" [data]=\"datas\" [columns]=\"columns\"></st>",
                    providers: [ng_core.ListService],
                    styles: [""]
                },] }
    ];
    MainComponent.ctorParameters = function () { return [
        { type: ng_core.ListService },
        { type: proxy.CustomersApiService }
    ]; };
    MainComponent.propDecorators = {
        st: [{ type: core.ViewChild, args: ['st', { static: false },] }]
    };

    var LayoutComponent = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        return LayoutComponent;
    }());
    LayoutComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">\r\n        \u4F01\u696D\u5BA2\u6236\u7BA1\u7406\r\n    </h1>\r\n  </div>\r\n  <div class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <!-- <abp-page-toolbar [record]=\"data\"></abp-page-toolbar> -->\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">\u4F01\u696D\u5BA2\u6236\u7BA1\u7406</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    \r\n  </div>\r\n</div> -->\r\n",
                    styles: [""]
                },] }
    ];
    LayoutComponent.ctorParameters = function () { return []; };

    var routes = [
        {
            path: '',
            component: LayoutComponent,
            children: [
                {
                    path: '',
                    component: MainComponent
                }
            ],
        }
    ];
    var EnterpriseRoutingModule = /** @class */ (function () {
        function EnterpriseRoutingModule() {
        }
        return EnterpriseRoutingModule;
    }());
    EnterpriseRoutingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule]
                },] }
    ];

    var EnterpriseModule = /** @class */ (function () {
        function EnterpriseModule() {
        }
        EnterpriseModule.forChild = function () {
            return {
                ngModule: EnterpriseModule,
                providers: [],
            };
        };
        EnterpriseModule.forLazy = function () {
            return new ng_core.LazyModuleFactory(EnterpriseModule.forChild());
        };
        EnterpriseModule.forEarly = function () {
            return new ng_core.LazyModuleFactory(EnterpriseModule.forChild());
        };
        return EnterpriseModule;
    }());
    EnterpriseModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MainComponent, LayoutComponent],
                    imports: [
                        ng_core.CoreModule,
                        ng_theme_shared.ThemeSharedModule,
                        //NzSelectModule,
                        theme.AlainThemeModule.forChild(),
                        drawer.NzDrawerModule,
                        st.STModule,
                        modal.NzModalModule,
                        EnterpriseRoutingModule,
                    ],
                },] }
    ];

    var ɵ0 = EnterpriseModule.forEarly;
    var routes$1 = [
        { path: '', pathMatch: 'full', redirectTo: 'enterprise' },
        {
            path: '',
            //canActivate: [AuthGuard, PermissionGuard],
            children: [
                {
                    path: 'enterprise',
                    loadChildren: ɵ0
                },
            ]
        }
    ];
    // @dynamic
    var CrmNgAlainRoutingModule = /** @class */ (function () {
        function CrmNgAlainRoutingModule() {
        }
        return CrmNgAlainRoutingModule;
    }());
    CrmNgAlainRoutingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes$1)],
                    exports: [router.RouterModule],
                },] }
    ];

    //import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
    var CrmNgAlainModule = /** @class */ (function () {
        function CrmNgAlainModule() {
        }
        CrmNgAlainModule.forChild = function () {
            return {
                ngModule: CrmNgAlainModule,
                providers: [],
            };
        };
        CrmNgAlainModule.forLazy = function () {
            return new ng_core.LazyModuleFactory(CrmNgAlainModule.forChild());
        };
        return CrmNgAlainModule;
    }());
    CrmNgAlainModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        //SharedModule,
                        ng_core.CoreModule,
                        CrmNgAlainRoutingModule
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CrmNgAlainModule = CrmNgAlainModule;
    exports.ɵa = CrmNgAlainRoutingModule;
    exports.ɵb = EnterpriseModule;
    exports.ɵc = MainComponent;
    exports.ɵd = LayoutComponent;
    exports.ɵe = EnterpriseRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-crm-ng-alain.umd.js.map
