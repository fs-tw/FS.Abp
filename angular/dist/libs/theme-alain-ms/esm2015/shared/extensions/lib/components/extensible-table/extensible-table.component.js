import { ListService, ConfigStateService } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
const DEFAULT_ACTIONS_COLUMN_WIDTH = 75;
export class ExtensibleTableComponent extends AbpExtensibleTableComponent {
    constructor(_locale, _config, _injector) {
        super(_locale, _config, _injector);
        this._locale = _locale;
        this._config = _config;
        this._setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
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
    _setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
}
ExtensibleTableComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'nzExtensibleTable',
                selector: 'nz-extensible-table',
                template: "<nz-table [nzData]=\"data\" [nzTotal]=\"recordsTotal\" [list]=\"list\" >\r\n  <thead>\r\n    <tr>\r\n      <th [nzWidth]=\"columnWidths[0]+'px'\"></th>\r\n      <ng-container\r\n        *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\"\r\n      >\r\n        <th\r\n          [nzSortFn]=\"prop.sortable\"\r\n          [nzColumnKey]=\"prop.name\"\r\n          [nzSortDirections]=\"['ascend', 'descend']\"\r\n        >\r\n          {{ prop.displayName | abpLocalization }}\r\n        </th>\r\n      </ng-container>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let row of data\" class=\"bg-white\">\r\n      <td>\r\n        <nz-grid-actions [record]=\"row\"></nz-grid-actions>\r\n      </td>\r\n      <ng-container\r\n        *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\"\r\n      >\r\n        <td>\r\n          <div\r\n            *ngIf=\"row['_' + prop.name].visible\"\r\n            [innerHTML]=\"row['_' + prop.name].value | async\"\r\n            (click)=\"\r\n              prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\r\n            \"\r\n            [class.pointer]=\"prop.action\"\r\n          ></div>\r\n        </td>\r\n      </ng-container>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ExtensibleTableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ConfigStateService },
    { type: Injector }
];
ExtensibleTableComponent.propDecorators = {
    actionsText: [{ type: Input }],
    data: [{ type: Input }],
    list: [{ type: Input }],
    recordsTotal: [{ type: Input }],
    actionsColumnWidth: [{ type: Input }],
    actionsTemplate: [{ type: Input }]
};
//# sourceMappingURL=extensible-table.component.js.map