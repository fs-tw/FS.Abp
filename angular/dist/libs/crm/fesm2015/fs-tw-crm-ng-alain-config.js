import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';
import { Store } from '@ngxs/store';

const ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
const CrmCore = [
    {
        path: '/crm',
        parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
        name: "Crm::FS.Crm.Core" /* Crm */,
        iconClass: 'fa fa-id-card-o',
        layout: "application" /* application */,
        order: 0,
        navConfig: {
            title: "Crm::FS.Crm.Core" /* Crm */,
            doc: "Crm::FS.Crm.Core" /* Crm */,
            name: "Crm::FS.Crm.Core" /* Crm */,
        },
    },
];
const CrmBasic = [
    {
        path: '/crm',
        name: "Crm::FS.Crm.Base" /* CrmBase */,
        parentName: "Crm::FS.Crm.Core" /* Crm */,
        order: 0,
        navConfig: {
            title: "Crm::FS.Crm.Base" /* CrmBase */,
        },
    },
];
const Selectoroption = [
    {
        path: '/crm',
        name: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        parentName: "Crm::FS.Crm.Core" /* Crm */,
        order: 0,
        navConfig: {
            title: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        },
    },
    {
        path: '/crm/selector-options-management',
        name: "\u8A5E\u5F59\u7BA1\u7406" /* SelectorOption_01 */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 1,
        navConfig: {
            title: "\u8A5E\u5F59\u7BA1\u7406" /* SelectorOption_01 */,
        },
    },
    {
        path: '/crm/cp-management',
        name: "\u8F14\u5C0E\u7D00\u9304\u7BA1\u7406" /* CpManagement */,
        parentName: "Crm::FS.Crm.Base" /* CrmBase */,
        order: 1,
        navConfig: {
            title: "\u8F14\u5C0E\u7D00\u9304\u7BA1\u7406" /* CpManagement */,
        },
    },
    {
        path: '/crm/customers',
        name: "\u5BA2\u6236\u7BA1\u7406" /* Customers */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 1,
        navConfig: {
            title: "\u5BA2\u6236\u7BA1\u7406" /* Customers */,
        },
    },
    {
        path: '/crm/enterprise',
        name: "\u4F01\u696D\u5BA2\u6236\u7BA1\u7406" /* Enterprise */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 2,
        navConfig: {
            title: "\u4F01\u696D\u5BA2\u6236\u7BA1\u7406" /* Enterprise */,
        },
    },
    {
        path: '/crm/employee',
        name: "\u4EBA\u54E1\u7BA1\u7406" /* Employee */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 3,
        navConfig: {
            title: "\u4EBA\u54E1\u7BA1\u7406" /* Employee */,
        },
    },
    {
        path: '/crm/projects',
        name: "\u5C08\u6848\u7BA1\u7406" /* Projects */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 4,
        navConfig: {
            title: "\u5C08\u6848\u7BA1\u7406" /* Projects */,
        },
    },
    {
        path: '/crm/counseling-recrod',
        name: "\u8F14\u5C0E\u7D00\u9304" /* ConsultationRecords */,
        parentName: "\u57FA\u672C\u8CC7\u6599" /* SelectorOptions */,
        order: 5,
        navConfig: {
            title: "\u8F14\u5C0E\u7D00\u9304" /* ConsultationRecords */,
        },
    },
];
function configureRoutes(routes) {
    return () => {
        routes.add([...CrmCore, ...Selectoroption, ...CrmBasic]);
    };
}

const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
function configureStyles(store) {
    return () => {
        initLayouts(store);
    };
}
function initLayouts(store) {
}

class CrmNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: CrmNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
CrmNgAlainConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: []
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CrmNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, STYLES_PROVIDERS as ɵb, configureStyles as ɵc };
//# sourceMappingURL=fs-tw-crm-ng-alain-config.js.map
