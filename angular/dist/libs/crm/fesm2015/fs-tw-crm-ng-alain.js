import { Component, ViewChild, NgModule } from '@angular/core';
import { ListService, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { STModule } from '@delon/abc/st';
import { CustomersApiService } from '@fs-tw/crm/proxy';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

const TAG = {
    1: { text: '個人', color: 'green' },
    2: { text: '企業', color: 'red' }
};
const GENDER_TAG = {
    0: { text: '男', color: 'green' },
    1: { text: '女', color: 'red' },
    2: { text: '其他' }
};
class MainComponent {
    constructor(list, customerService) {
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
    ngOnInit() {
        const customerStreamCreator = query => this.customerService.getListByCustomerGetList(query);
        this.list.hookToQuery(customerStreamCreator).subscribe(res => {
            res.items = res.items.filter(x => x.discriminator == 2);
            this.datas = res.items;
            this.count = res.totalCount;
        });
    }
    ngOnDestroy() {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "\r\n<st #st [widthMode]=\"{ type: 'strict' }\" [data]=\"datas\" [columns]=\"columns\"></st>",
                providers: [ListService],
                styles: [""]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ListService },
    { type: CustomersApiService }
];
MainComponent.propDecorators = {
    st: [{ type: ViewChild, args: ['st', { static: false },] }]
};

class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">\r\n        \u4F01\u696D\u5BA2\u6236\u7BA1\u7406\r\n    </h1>\r\n  </div>\r\n  <div class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <!-- <abp-page-toolbar [record]=\"data\"></abp-page-toolbar> -->\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">\u4F01\u696D\u5BA2\u6236\u7BA1\u7406</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <abp-page-toolbar [record]=\"data$ | async\"></abp-page-toolbar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    \r\n  </div>\r\n</div> -->\r\n",
                styles: [""]
            },] }
];
LayoutComponent.ctorParameters = () => [];

const routes = [
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
class EnterpriseRoutingModule {
}
EnterpriseRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] }
];

class EnterpriseModule {
    static forChild() {
        return {
            ngModule: EnterpriseModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(EnterpriseModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(EnterpriseModule.forChild());
    }
}
EnterpriseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent, LayoutComponent],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    //NzSelectModule,
                    AlainThemeModule.forChild(),
                    NzDrawerModule,
                    STModule,
                    NzModalModule,
                    EnterpriseRoutingModule,
                ],
            },] }
];

const ɵ0 = EnterpriseModule.forEarly;
const routes$1 = [
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
class CrmNgAlainRoutingModule {
}
CrmNgAlainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

//import { SharedModule } from '@fs-tw/crm/ng-alain/shared';
class CrmNgAlainModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { CrmNgAlainModule, CrmNgAlainRoutingModule as ɵa, EnterpriseModule as ɵb, MainComponent as ɵc, LayoutComponent as ɵd, EnterpriseRoutingModule as ɵe };
//# sourceMappingURL=fs-tw-crm-ng-alain.js.map
