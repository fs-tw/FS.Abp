import { ListService, ConfigStateService } from '@abp/ng.core';
import { Injector, TemplateRef } from '@angular/core';
import { ExtensibleTableComponent as AbpExtensibleTableComponent } from '@abp/ng.theme.shared/extensions';
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
}
