import { ListService, ConfigStateService, } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef, ContentChild, Output, EventEmitter } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
const DEFAULT_ACTIONS_COLUMN_WIDTH = 100;
import { NzTableRowDetailDirective } from '../../directives/nz-table-row-detail.directive';
export class ExtensibleTableComponent extends AbpExtensibleTableComponent {
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
                template: "\r\n  <nz-table [nzData]=\"data\" [nzTotal]=\"recordsTotal\" [list]=\"list\"\r\n    \r\n  [nzScroll]=\"scroll\"  [nzLoading]=\"list.isLoading$ | async\">\r\n    <thead>\r\n      <tr>\r\n        <th [nzWidth]=\"columnWidths[0]+'px'\"></th>\r\n        <th *ngIf=\"haveRowDetail\"></th>\r\n        <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n          <th [nzSortFn]=\"prop.sortable\" [nzColumnKey]=\"prop.name\" [nzSortDirections]=\"['ascend', 'descend']\">\r\n            {{ prop.displayName | abpLocalization }}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let row of data;let no = index\">\r\n        <tr class=\"bg-white\" [ngClass]=\"{ listSelected: row['id'] == selectId,pointer:haveSelect }\">\r\n          <td>\r\n            <nz-grid-actions [record]=\"row\"></nz-grid-actions>\r\n          </td>\r\n  \r\n          <td *ngIf=\"haveRowDetail\" [nzExpand]=\"expandSet.has(row['id'])\" (nzExpandChange)=\"onExpandChange(row['id'], $event)\"></td>\r\n  \r\n          <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n\r\n            <td (click)=\"selected(row)\">\r\n              <span class=\"ant-table-rep__title\" *ngIf=\"!scroll\" >\r\n                {{ prop.displayName | abpLocalization }}\r\n              </span>\r\n              <div  *ngIf=\"row['_' + prop.name].visible\" [innerHTML]=\"row['_' + prop.name].value | async\" (click)=\"\r\n                  prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r\n                \" [class.pointer]=\"prop.action\"></div>\r\n            </td>\r\n          </ng-container>\r\n        </tr>\r\n  \r\n        <tr [nzExpand]=\"expandSet.has(row['id'])\">\r\n          <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: row }\"></ng-container>\r\n        </tr>\r\n  \r\n        <ng-template #nodeTemplate row-detail-template let-node>\r\n          <ng-container *ngTemplateOutlet=\"\r\n              rowDetailTemplate ? rowDetailTemplate?.template : defaultTemplate;\r\n                context: { $implicit: node }\r\n              \"></ng-container>\r\n        </ng-template>\r\n  \r\n        <ng-template #defaultTemplate let-node>\r\n          <sv-container [col]=\"svRowCount\">\u3000\r\n            <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">            \r\n              <sv *ngIf=\"row['_' + prop.name].visible\" [label]=\"prop.displayName| abpLocalization\"> <span  style=\"color: black\"\r\n                  [innerHTML]=\"row['_' + prop.name].value | async\"></span></sv>\r\n            </ng-container>\r\n          </sv-container>\r\n        </ng-template>\r\n  \r\n  \r\n      </ng-container>\r\n    </tbody>\r\n  </nz-table>\r\n\r\n",
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
//# sourceMappingURL=extensible-table.component.js.map