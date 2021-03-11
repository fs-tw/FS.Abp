import { ListService, ConfigStateService } from '@abp/ng.core';
import { Injector, TemplateRef } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
export declare class ExtensibleTableComponent<R = any> extends AbpExtensibleTableComponent<R> {
    private _locale;
    private _config;
    protected _actionsText: string;
    set actionsText(value: string);
    get actionsText(): string;
    data: R[];
    list: ListService;
    recordsTotal: number;
    set actionsColumnWidth(width: number);
    actionsTemplate: TemplateRef<any>;
    constructor(_locale: string, _config: ConfigStateService, _injector: Injector);
    private _setColumnWidths;
    static ɵfac: i0.ɵɵFactoryDef<ExtensibleTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExtensibleTableComponent<any>, "nz-extensible-table", ["nzExtensibleTable"], { "actionsText": "actionsText"; "data": "data"; "list": "list"; "recordsTotal": "recordsTotal"; "actionsColumnWidth": "actionsColumnWidth"; "actionsTemplate": "actionsTemplate"; }, {}, never, never>;
}
//# sourceMappingURL=extensible-table.component.d.ts.map