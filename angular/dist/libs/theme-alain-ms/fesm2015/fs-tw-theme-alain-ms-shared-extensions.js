import { LocalizationService, ConfigStateService, CoreModule } from '@abp/ng.core';
import { Directive, ChangeDetectorRef, Input, TemplateRef, EventEmitter, Component, ChangeDetectionStrategy, Inject, LOCALE_ID, Injector, ContentChild, Output, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';
import { ExtensibleTableComponent as ExtensibleTableComponent$1, GridActionsComponent as GridActionsComponent$1, EXTENSIONS_ACTION_TYPE, PageToolbarComponent as PageToolbarComponent$1, UiExtensionsModule as UiExtensionsModule$1 } from '@abp/ng.theme.shared/extensions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SVModule } from '@delon/abc/sv';

class NzTableListDirective {
    constructor(
    //private body:NzTbodyComponent,
    table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.querySubscription = new Subscription();
        this.loadingSubscription = new Subscription();
        this.setInitialValues();
    }
    setInitialValues() {
        this.table.nzSize = 'small';
        this.table.nzFrontPagination = false;
        this.table.nzBordered = true;
        this.table.nzShowSizeChanger = true;
    }
    subscribeToPage() {
        const sub = this.table.nzQueryParams.subscribe((params) => {
            var self = this;
            var sort = params.sort
                .filter((x) => !!x.value)
                .map((x) => {
                return { key: x.key, order: x.value === 'ascend' ? 'asc' : 'desc' };
            })[0];
            var sortChanged = isParamsChange();
            if (!!sort) {
                this.list.sortKey = sort.key;
                this.list.sortOrder = sort.order;
            }
            else {
                this.list.sortKey = '';
                this.list.sortOrder = '';
            }
            this.list.maxResultCount = params.pageSize;
            if (sortChanged) {
                this.list.page = 0;
            }
            else {
                this.list.page = params.pageIndex - 1;
            }
            this.cdRef.detectChanges();
            function isParamsChange() {
                var currentSortKey = `${self.list.sortKey}-${self.list.sortOrder}-${self.list.maxResultCount}`;
                var changeSortKey = `--${params.pageSize}`;
                if (!!sort) {
                    changeSortKey = `${sort.key}-${sort.order}-${params.pageSize}`;
                }
                return currentSortKey !== changeSortKey;
            }
        });
        this.subscription.add(sub);
    }
    subscribeToLoading() {
        if (!this.loadingSubscription.closed)
            this.loadingSubscription.unsubscribe();
        this.loadingSubscription = this.list.isLoading$.subscribe((x) => {
            this.table.nzLoading = x;
        });
    }
    subscribeToQuery() {
        if (!this.querySubscription.closed)
            this.querySubscription.unsubscribe();
        this.querySubscription = this.list.query$.subscribe((q) => {
            this.table.onPageIndexChange(this.list.page + 1);
            this.table.onPageSizeChange(this.list.maxResultCount);
        });
    }
    ngOnChanges({ list }) {
        //console.log(list.currentValue);
        this.subscribeToQuery();
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        //this.table.nzPageSize = maxResultCount;
        this.table.onPageSizeChange(maxResultCount);
        this.table.onPageIndexChange(page + 1);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToLoading();
    }
}
NzTableListDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line
                selector: 'nz-table[list]',
                exportAs: 'nzTableList',
            },] }
];
NzTableListDirective.ctorParameters = () => [
    { type: NzTableComponent },
    { type: ChangeDetectorRef },
    { type: LocalizationService }
];
NzTableListDirective.propDecorators = {
    list: [{ type: Input }]
};

class NzTableRowDetailDirective {
    constructor(template) {
        this.template = template;
    }
}
NzTableRowDetailDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row-detail-template]',
            },] }
];
NzTableRowDetailDirective.ctorParameters = () => [
    { type: TemplateRef }
];

const DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
class ExtensibleTableComponent extends ExtensibleTableComponent$1 {
    constructor(_locale, _config, _injector) {
        super(_locale, _config, _injector);
        this._locale = _locale;
        this._config = _config;
        this.responsive = true;
        this.expandSet = new Set();
        this.selectId = null;
        this.haveRowDetail = false;
        this.haveSelect = false;
        this.svRowCount = 2;
        this.select = new EventEmitter();
        this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    onExpandChange(id, check) {
        if (check) {
            this.expandSet.add(id);
        }
        else
            this.expandSet.delete(id);
    }
    set actionsText(value) {
        this._actionsText = value;
    }
    get actionsText() {
        var _a;
        return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
    }
    set actionsColumnWidth(width) {
        this._setColumnWidths(width ? Number(width) : undefined);
    }
    set defaultSelectId(value) {
        this.selectId = value;
    }
    ngOnInit() {
        if (this.scroll) {
            this.responsive = false;
        }
    }
    _setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
    selected(data) {
        if (this.haveSelect) {
            this.selectId = data['id'];
            this.select.emit(data);
        }
    }
}
ExtensibleTableComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzExtensibleTable',
                selector: 'nz-extensible-table',
                template: "\r\n  <nz-table [nzData]=\"data\" [nzTotal]=\"recordsTotal\" [list]=\"list\"\r\n    \r\n  [nzScroll]=\"scroll\"  [nzLoading]=\"list.isLoading$ | async\">\r\n    <thead>\r\n      <tr>\r\n        <th [nzWidth]=\"columnWidths[0]+'px'\"></th>\r\n        <th *ngIf=\"haveRowDetail\" [nzWidth]=\"'50px'\"></th>\r\n        <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n          <th [nzSortFn]=\"prop.sortable\" [nzWidth]=\"prop.columnWidth+'px'\" [nzColumnKey]=\"prop.name\" [nzSortDirections]=\"['ascend', 'descend']\">\r\n            {{ prop.displayName | abpLocalization }}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let row of data;let no = index\">\r\n        <tr class=\"bg-white\" [ngClass]=\"{ listSelected: row['id'] == selectId,pointer:haveSelect }\">\r\n          <td>\r\n            <nz-grid-actions [record]=\"row\"></nz-grid-actions>\r\n          </td>\r\n  \r\n          <td *ngIf=\"haveRowDetail\" [nzExpand]=\"expandSet.has(row['id'])\" (nzExpandChange)=\"onExpandChange(row['id'], $event)\"></td>\r\n  \r\n          <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n\r\n            <td (click)=\"selected(row)\">\r\n              <span class=\"ant-table-rep__title\" *ngIf=\"!scroll\" >\r\n                {{ prop.displayName | abpLocalization }}\r\n              </span>\r\n              <div  *ngIf=\"row['_' + prop.name].visible\" [innerHTML]=\"row['_' + prop.name].value | async\" (click)=\"\r\n                  prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r\n                \" [class.pointer]=\"prop.action\"></div>\r\n            </td>\r\n          </ng-container>\r\n        </tr>\r\n  \r\n        <tr [nzExpand]=\"expandSet.has(row['id'])\">\r\n          <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: row }\"></ng-container>\r\n        </tr>\r\n  \r\n        <ng-template #nodeTemplate row-detail-template let-node>\r\n          <ng-container *ngTemplateOutlet=\"\r\n              rowDetailTemplate ? rowDetailTemplate?.template : defaultTemplate;\r\n                context: { $implicit: node }\r\n              \"></ng-container>\r\n        </ng-template>\r\n  \r\n        <ng-template #defaultTemplate let-node>\r\n          <sv-container [col]=\"svRowCount\">\u3000\r\n            <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">            \r\n              <sv *ngIf=\"row['_' + prop.name].visible\" [label]=\"prop.displayName| abpLocalization\"> <span  style=\"color: black\"\r\n                  [innerHTML]=\"row['_' + prop.name].value | async\"></span></sv>\r\n            </ng-container>\r\n          </sv-container>\r\n        </ng-template>\r\n  \r\n  \r\n      </ng-container>\r\n    </tbody>\r\n  </nz-table>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-table-rep]': `responsive`,
                },
                styles: [".listSelected{background-color:rgba(33,33,230,.4392156862745098)!important}nz-list-item{font-size:15px}.bg-white{background-color:#fff}.pointer{cursor:pointer}"]
            },] }
];
ExtensibleTableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ConfigStateService },
    { type: Injector }
];
ExtensibleTableComponent.propDecorators = {
    responsive: [{ type: Input }],
    actionsText: [{ type: Input }],
    rowDetailTemplate: [{ type: ContentChild, args: [NzTableRowDetailDirective,] }],
    data: [{ type: Input }],
    list: [{ type: Input }],
    recordsTotal: [{ type: Input }],
    actionsColumnWidth: [{ type: Input }],
    actionsTemplate: [{ type: Input }],
    haveRowDetail: [{ type: Input }],
    haveSelect: [{ type: Input }],
    svRowCount: [{ type: Input }],
    defaultSelectId: [{ type: Input }],
    scroll: [{ type: Input }],
    select: [{ type: Output }]
};

class GridActionsComponent extends GridActionsComponent$1 {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzGridActions',
                selector: 'nz-grid-actions',
                template: "<ng-container *ngIf=\"actionList.length > 0\">\r\n  <button\r\n    nz-button\r\n    nzType=\"default\"\r\n    nz-dropdown\r\n    [nzDropdownMenu]=\"menu\"\r\n    class=\"ml-md\"\r\n  >\r\n    <i nz-icon nzType=\"down\"></i>\r\n    <span>{{ 'AbpUi::Actions' | abpLocalization }}</span>\r\n  </button>\r\n\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <ng-container *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n        <ng-container *abpPermission=\"action.permission\">\r\n          <li nz-menu-item *ngIf=\"action.visible(data)\">\r\n            <a (click)=\"action.action(data)\">{{\r\n              action.text | abpLocalization\r\n            }}</a>\r\n          </li>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</ng-container>",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'entityActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GridActionsComponent.ctorParameters = () => [
    { type: Injector }
];
GridActionsComponent.propDecorators = {
    icon: [{ type: Input }],
    index: [{ type: Input }],
    text: [{ type: Input }]
};

class PageToolbarComponent extends PageToolbarComponent$1 {
    constructor(_injector) {
        super(_injector);
        this._injector = _injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
}
PageToolbarComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzPageToolbar',
                selector: 'nz-page-toolbar',
                template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\">\r\n      <ng-container *abpPermission=\"action.permission\">\r\n        <ng-container *ngIf=\"action.component as component; else button\">\r\n          <ng-container\r\n            *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n          ></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #button>\r\n          <button nz-button nzType=\"primary\" (click)=\"action.action(data)\">\r\n            <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n            {{ action.text | abpLocalization }}\r\n          </button>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'toolbarActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PageToolbarComponent.ctorParameters = () => [
    { type: Injector }
];

const declarationsWithExports = [
    ExtensibleTableComponent,
    NzTableRowDetailDirective,
    GridActionsComponent,
    PageToolbarComponent,
    NzTableListDirective,
];
const ZORRO_MODULES = [
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzTableModule
];
class BaseUiExtensionsModule {
}
BaseUiExtensionsModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    ...declarationsWithExports,
                    UiExtensionsModule$1,
                    SVModule
                ],
                declarations: [
                    ...declarationsWithExports
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgxValidateCoreModule,
                    UiExtensionsModule$1,
                    SVModule,
                    ...ZORRO_MODULES,
                ],
            },] }
];
class UiExtensionsModule {
}
UiExtensionsModule.decorators = [
    { type: NgModule, args: [{
                exports: [BaseUiExtensionsModule],
                imports: [BaseUiExtensionsModule],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BaseUiExtensionsModule, ExtensibleTableComponent, GridActionsComponent, NzTableListDirective, NzTableRowDetailDirective, PageToolbarComponent, UiExtensionsModule };
//# sourceMappingURL=fs-tw-theme-alain-ms-shared-extensions.js.map
